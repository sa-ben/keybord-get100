import { useState } from "react"

const [text, setText] = useState([])

const deleteFunc =() =>{
    setText(text - text[text.length-1])
}
deleteFunc()
console.log(text);