
import CIcon from '@coreui/icons-react';
import { cilStar } from '@coreui/icons';


const UserCard = ({ user, updateUser, removeUser }) => {

    const handleClick = (operatin) => {
        let { num, steps } = user;
        //handle math operatins
        switch (operatin) {
            case '+1': num += 1; break;
            case '-1': num -= 1; break;
            case '*2': num *= 2; break;
            case '/2': num = Math.floor(num / 2); break;
        }
        updateUser({
            ...user,
            num,
            steps: steps + 1,
            win: num === 100 ? true : false,
            disabled: true
        })
    }

    return <div className={user.disabled ? 'card disabled' : user.win ? 'card win' : 'card'} >
        <h2 className="nameCard"> {user.name} </h2>
        <h1 className="numberCard"> {user.num} </h1>
        <div className="buttonsMath">
            <button className="btnMathOperation" onClick={() => handleClick('+1')}> +1 </button>
            <button className="btnMathOperation" onClick={() => handleClick('-1')}> -1 </button>
            <button className="btnMathOperation" onClick={() => handleClick('*2')}> *2 </button>
            <button className="btnMathOperation" onClick={() => handleClick('/2')}> /2 </button>
            <div className="sta"> <CIcon icon={cilStar} size="xxl" className='star' /></div>
        </div>
        <div className="footerCard">
            <p> steps: {user.steps} </p>
            <button className="btnLeave" onClick={() => removeUser(user.id)}> Leave </button>
        </div>
    </div>
}

export default UserCard