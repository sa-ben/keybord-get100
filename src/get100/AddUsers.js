import { useEffect, useRef, useState } from "react"

const AddUsers = ({ users, addUser }) => {
    const [name, setName] = useState("")
    const inputRef = useRef(null)

    useEffect(() => { //put the focus on the input box
        inputRef.current.focus()
    }, [name])

    const handleAddUser = () => {
        if (name) { //validation to enter value
            addUser(name)
            setName("")
        }
    }

    const handleKeyPress = (event) => { 
        if (event.key === "Enter") handleAddUser() //enable adding with 'enter' pressing
    }

    return <div className="divAddUser">
        <label> Name </label>
        <input type="text" placeholder="Enter user name" onChange={(e) => { setName(e.target.value) }} value={name} ref={inputRef} onKeyPress={handleKeyPress} />
        <button className="btnAddUser" onClick={() => { handleAddUser() }}> Add User </button>
        {users.map(user => {
            return <p> {user.name} <button className="btnShowNum" disabled={false}> {user.num} </button> </p> 
        })}
    </div>
}

export default AddUsers