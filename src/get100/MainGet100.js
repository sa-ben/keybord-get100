import { useState } from "react"
import AddUsers from "./AddUsers"
import MainGame from "./MainGame"

const MainGet100 = () => {
    const [gameStatus, setGameStatus] = useState(0)
    const [users, setUsers] = useState([])

    const addUser = (name) => {
        const userObj = {
            id: users.length + 1,
            name: name,
            steps: 0,
            num: Math.floor(Math.random() * 100),
            win: false,
            disabled: true
        }
        setUsers([...users, userObj])
        console.log(users);
    }

    const updateUser = (user) => {
        users[user.id - 1] = user;
        const activeUsers = users.filter(user => !user.win).map(u => u.id);
        if (activeUsers.length) {
            const currentUserIdx = activeUsers.findIndex(uid => uid === user.id);
            let nextUserIdx = currentUserIdx + 1;
            if (nextUserIdx >= activeUsers.length) {
                nextUserIdx = 0;
            }
            const nextUserId = activeUsers[nextUserIdx];
            users[nextUserId - 1].disabled = false;
        }
        // console.log(user.num);
        // if (user.num === 100) {
        //     console.log('you win');
        //     user.win = true
        // }
        setUsers([...users])
    }

    const removeUser = (userId) => {
        users.splice(userId - 1, 1)
        setUsers([...users])
    }

    return <>
        <div className="get100Header">
            <div className="title get100Title">
                <h2 className="title"> Get 100! </h2>
                <button className="btnGameStatus" onClick={() => setGameStatus(1)} disabled={gameStatus > 0}> add user </button>
                <button className="btnGameStatus" onClick={() => { setGameStatus(2); users[0].disabled = false }} disabled={users.length === 0 || gameStatus > 1}> start game </button>
                <button className="btnGameStatus" onClick={() => { setGameStatus(0); setUsers([]) }} disabled={gameStatus !== 2} > new game </button>
            </div>
        </div >
        {gameStatus === 1 && <AddUsers users={users} addUser={addUser} />}
        {gameStatus === 2 && <MainGame users={users} updateUser={updateUser} removeUser={removeUser} />}
    </>
}

export default MainGet100