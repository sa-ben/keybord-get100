import UserCard from "./UserCard"

const MainGame = ({ users, updateUser, removeUser }) => {
    return <div className="gameScreen">
        <div className="usersDetailsArea">
            <h1> Users: </h1>
            {users.map(user => <p> {user.name} <button className="btnShowNum" disabled={false}> {user.num} </button> </p>)}
            <h1> Winners: </h1>
            <div className="divWinners">
                {users.filter(user => user.win === true).map(user => <p> {user.name} <button className="btnShowNum" disabled={false}> {user.num} </button> </p>)}
            </div>
        </div>
        <div className="cardsArea">
            {users.map(user => <UserCard user={user} updateUser={updateUser} removeUser={removeUser} />)}

        </div>
    </div>
}

export default MainGame