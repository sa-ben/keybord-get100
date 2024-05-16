import { useState } from "react"
import ShowLetters from "./ShowLetters"
import KbButtons from "./KbButtons"
import ToolBar from './ToolBar'

const MainKB = () => {
    const kbKeys = [
        ["q", "Q", "/", "1", <>&#9786;</>],
        ["w", "W", "'", "2" , <>&#9787;</>],
        ["e", "E", "ק", "3" , <>&#9785;</>],
        ["r", "R", "ר", "4" , <>&#10084;</>],
        ["t", "T", "א", "5" , <>&hearts;</>],
        ["y", "Y", "ט", "6" , <>&#9825;</>],
        ["u", "U", "ו", "7" , <>&#10004;</>],
        ["i", "I", "ן", "8" , <>&#10006;</>],
        ["o", "O", "ם", "9" , <>&#9788;</>],
        ["p", "P", "פ", "0" , <>&#9789;</>],
        ["delete", "delete", "delete", "delete" ,"delete"],
        ["a", "A", "ש", "@" , <>&#9997;</>],
        ["s", "S", "ד", "#" , <>&#9992;</>],
        ["d", "D", "ג", "$" , <>&#10004;</>],
        ["f", "F", "כ", "%" , <>&#10032;</>],
        ["g", "G", "ע", "&" , <>&#9743;</>],
        ["h", "H", "י", "*" , <>&#9730;</>],
        ["j", "J", "ח", "(" , <>&#9729;</>],
        ["k", "K", "ל", ")" , <>&#9743;</>],
        ["l", "L", "ך", "''" , <>&#9834;</>],
        [";", ";", "ף", "'" , <>&#9836;</>],
        ["enter", "enter", "enter", "enter", "enter"],
        ["shift", "shift", "shift", "shift", "shift"],
        ["z", "Z", "ז", "^" , <>&#9850;</>],
        ["x", "X", "ס", "+" , <>&#9851;</>],
        ["c", "C", "ב", "-" , <>&#9883;</>],
        ["v", "V", "ה", "=" , <>&#9918;</>],
        ["b", "B", "נ", "/" , <>&#10017;</>], 
        ["n", "N", "מ", ";" , <>&#10036;</>],
        ["m", "M", "צ", ":" , <>&#10048;</>],
        [",", ",", "ת", "?" , <>&#10163;</>],
        [".", ".", "ץ", "!" , <>&#9813;</>],
        ["shift", "shift", "shift", "shift", "shift"],
        ["cap", "cap", "cap", "cap", "cap"],
        ["Heb", "Heb", "Eng", "Eng", "Eng"],
        ["space", "space", "space", "space" ,"space"],
        ["symbol", "symbol", "symbol", "symbol" ,"symbol"],
        ["clear", "clear", "clear", "clear" ,"clear"]
    ]
    const [kbIndex, setKbIndex] = useState(0);
    const [text, setText] = useState([])
    const [bgColor, setBgColor] = useState("white")
    const [color, setColor] = useState("black")
    const [font, setFont] = useState("Arial, Helvetica, sans-serif")
    const [size, setSize] = useState(30)
    const [bold, setBold] = useState(false)
    const [underline, setUnderline] = useState(false)

    function addLetter(letter) {
        const obj = {
            letter: letter,
            bgColor: bgColor,
            color: color,
            font: font,
            size: size,
            bold: bold,
            underLine: underline
        }
        setText([...text, obj])
    }

    const changeBgColor = (event) => {
        setBgColor(event.target.value)
    }

    const changeColor = (event) => {
        setColor(event.target.value)
    }

    const changeFont = (event) => {
        setFont(event.target.value)
    }

    const changeSize = (event) => {
        setSize(parseInt(event.target.value))
    }

    const sizePlus = () => {
        if (size < 100)
            setSize(size + 2)
    }

    const sizeMinus = () => {
        if (size > 8)
            setSize(size - 2)
    }

    const changeUnderline = () => setUnderline(!underline)
    const changeBold = () => setBold(!bold)

    const handleClick = (kbKeyValue) => {
        switch (kbKeyValue) {
            case 'shift': {
                setKbIndex(kbIndex === 3 ? 1 : 3)
                break;
            }
            case 'delete': {
                if (text.length)
                    setText(text.slice(0, -1))
                break
            }
            case 'cap': {
                setKbIndex(kbIndex === 0 ? 1 : 0)
                // setKbIndex(kbIndex === 2 ? 1 : 2)
            }
                break
            case 'space': {
                addLetter(<span>&nbsp;</span>)
                break
            }
            case 'Heb': {
                setKbIndex(2)
                break
            }
            case 'Eng': {
                setKbIndex(0)
                break
            }
            case 'enter': {
                addLetter(<br />)
                break
            }
            case 'symbol':{
                setKbIndex(kbIndex === 4 ? 0 :4)
                break
            }
            case 'clear': {
                setText([])
                break
            }
            default:
                addLetter(kbKeyValue)
        }
    }

    return <>  
        <h2 className="title"> What you see is what you get - Keyboard</h2>
        <ShowLetters Letters={text} />
        <ToolBar
            func1={changeBgColor}
            func2={changeColor}
            func3={changeFont} valFont={font}
            func4={changeSize} valSize={size}
            func5={sizePlus}
            func6={sizeMinus}
            func7={changeUnderline} underline = {underline}
            func8={changeBold} bold ={bold}
        />
        <KbButtons kbKeys={kbKeys} kbIndex={kbIndex} handleClick={handleClick} />
    </>
}

export default MainKB