import { useState, useEffect } from 'react';
import Tooltip from '../components/Tooltip';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pizza from "../assets/images/pizza.png";
import { PizzaUsersList } from '../components/pizza_users_list_text';

interface PizzaApiResponse {
    success: boolean;
    count: number;
    users: string[];
    claimed: boolean;
}

export function GetPizza() {
    const [pizzaCount, setPizzaCount] = useState<number>(200);
    const [username, setUsername] = useState<string>("");
    const [userList, setUserList] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [showLoadingText, setShowLoadingText] = useState<boolean>(false);
    const [statusText, setStatusText] = useState<string>("");
    const [statusGood, setStatusGood] = useState<boolean>(true);
    const [hasClaimed, setHasClaimed] = useState<boolean>(false);
    function claim() {
        setStatusGood(true);
        setStatusText("There's your slice of pizza. Enjoy!");
        setHasClaimed(true);
    }
    useEffect(() => {
        async function fetchInitialState() {
            try {
                const response = await fetch('/api/pizza');
                if (!response.ok) {
                    throw new Error("[critical system error] response is not okay?");
                }
                const data: PizzaApiResponse = await response.json();
                setPizzaCount(data.count);
                setUserList(data.users);
                if (data.claimed) {
                    claim();
                }
            } catch (error) {
                setStatusText(String(error));
                setStatusGood(false);
            }
        }
        fetchInitialState();
    }, []);

    async function updatePizza() {
        let timerId: ReturnType<typeof setTimeout> | null = null;
        
        setLoading(true);
        setShowLoadingText(false);
        setStatusText("");

        timerId = setTimeout(() => {
            setShowLoadingText(true);
        }, 3000);

        try {
            const response = await fetch('/api/pizza', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username })
            });
            
            if (!response.ok) {
                const errorText = await response.text();
                setStatusText(errorText);
                setStatusGood(false);
            } else {
                const data: PizzaApiResponse = await response.json();
                setPizzaCount(data.count);
                setUserList(data.users);
                setUsername("");
                claim();
            }
        } catch (error) {
            setStatusText(error instanceof Error ? error.message : String(error));
            setStatusGood(false);
        } finally {
            if (timerId) clearTimeout(timerId);
            setLoading(false);
            setShowLoadingText(false);
        }
    }

    async function handleGetPizza() {
        if (!username.trim() || pizzaCount <= 0 || loading) return;
        await updatePizza();
    }

    return (
		<>
                <strong>{pizzaCount} pizza slices remaining</strong> 
                <div className='the-box'>
                    <p>people who claimed the pizza</p>
										<PizzaUsersList user_list={userList}/>
                </div>
                <div>
                { 
                    Array(pizzaCount).fill("").map(() => {
                        return <FontAwesomeIcon color='orange' icon={faPizzaSlice}/>
                    })
                }
                </div>
                { hasClaimed ? <></> : <input 
                    type="text" 
                    placeholder="enter your name"
                    className='pizza-input'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={loading || pizzaCount <= 0}
                />}
                {
                    showLoadingText ? 
                    <p>claiming...</p> : <></>
                }
                { hasClaimed ? <img src={pizza} className='behaveImage'/> :
                <Tooltip label="No pizzas left :(" open={pizzaCount <= 0}>
                    <button 
                        className='pizza-button showMail'
                        onClick={handleGetPizza} 
                        disabled={loading || pizzaCount <= 0 || !username.trim()}
                        >
                        press to get a delicious pizza
                    </button>
                </Tooltip>}
                { statusText.trim() !== "" ?
                    <p className={statusGood ? 'status-text' : 'error-status'}>{statusText}</p> : <></> }
								<p>This pizza party was made in celebration of something. Now, it's open to anyone—just place your name, and claim a delicious (virtual) pizza!</p>
						</>
    );
}
