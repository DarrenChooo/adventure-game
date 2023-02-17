const USER_URL = API_URL + "/users/"
export default function GameBarButtons({setSelectedFloor, setError}) {

    const userId = localStorage.getItem('userid');
    const [disabled, setDisabled] = React.useState(false);
    const [timeLeft, setTimeLeft] = React.useState(0);
    React.useEffect(() => {
        // If the status is stored, get the time when it was stored and compare it with the current time
        if (userId) {
            // If the status is stored, get the time when it was stored and compare it with the current time
            axios.get(USER_URL + "/lastspin/" + userId)
                .then((res) => {
                    const lastSpin = res.data[0].lastspin;
                    const storedTime = lastSpin
                    const currentTime = new Date().getTime();
                    //changeable time limit
                    const changeableTimeLimit = 24*60*60*1000; //24*60*60*1000 // 24 hours in milliseconds
                    const diff = changeableTimeLimit - (currentTime - storedTime);
                    // If the difference is less than 24 hours, set the button as disabled and calculate the time left
                    if (diff > 0) {
                        setDisabled(true);
                        setTimeLeft(diff);
                    } else {
                        // If the difference is more than 24 hours, remove the stored data and enable the button
                        setTimeout(() => {
                        axios.put(USER_URL + "/lastspin/" + userId, { lastspin: null });
                        }, 1000);
                        setDisabled(false);
                        setTimeLeft(0);
                    }
                   

                }).catch((error) => {
                    setError(error)
                });
        }
    }, [userId]);
    // Function to handle the button click
    function handleUpdateLastSpin() {
        const storedTime = new Date().getTime();
        axios.put(USER_URL + "/lastspin/" + userId, { lastspin: storedTime })
        setDisabled(true);
        let changeableTimeLimit = 24*60*60*1000; //24*60*60*1000 // 24 hours in milliseconds
        setTimeLeft(changeableTimeLimit); // setting time limit to 24 hours in milliseconds
        window.location.assign("/user/spinWheel.html")

    }

    React.useEffect(() => {
        if (disabled) {
            const intervalId = setInterval(() => {
                setTimeLeft(timeLeft - 1000);
                // If the time left is less than 0, remove the stored data and enable the button
                if (timeLeft <= 0) {

                    // localStorage.removeItem('disabledTime');
                    setDisabled(false);
                    setTimeLeft(0);
                    clearInterval(intervalId);
                }
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [disabled, timeLeft]);

    // Function to convert milliseconds to hours, minutes, and seconds
    const convertToHMS = (ms) => {
        const hours = Math.floor(ms / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((ms % (1000 * 60)) / 1000);
        return (
            <>
                <div>
                    <div>{hours} hrs </div>
                    <div>{minutes} mins </div>
                    <div>{seconds} secs</div>
                </div>
            </>
        );
    }

    // Update state to show floor is clicked
    function updateFloor () {
        setSelectedFloor(true)
    }

    return (
        <div className="btnContainer">
            <button type="button" className="gameBtns">
                <div onClick={updateFloor}>
                    <i className="fa-solid fa-gamepad"></i>
                </div>
            </button>

            <button type="button" className="gameBtns" disabled={disabled} onClick={handleUpdateLastSpin}>
                <div>
                    <i className="fa-solid fa-spinner"></i>
                </div>
            </button>

            {disabled && <div className="timeBox">Time left:{convertToHMS(timeLeft)}</div>}

            <button type="button" className="gameBtns">
                <a href="./react_store.html">
                    <i className="fa-solid fa-store"></i>
                </a>
            </button>

            <button type="button" className="gameBtns">
                <a href="./view_players.html">
                    <i className="fa-solid fa-users"></i>
                </a>
            </button>

            <button type="button" className="gameBtns">
                <a href="/user/react_inventory.html">
                    <i className="fa-solid fa-suitcase"></i>
                </a>
            </button>

            <button type="button" className="gameBtns">
                <a href="/user/user_profile.html">
                    <i className="fa-solid fa-gear"></i>
                </a>
            </button>
        </div>
    )
}

