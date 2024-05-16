import SizeList from './SizeList'
import FontList from './FontList'

const ToolBar = ({ func1, func2, func3, valFont, func4, valSize, func5, func6, func7,underline, func8, bold }) => {
    const changeBgColor = (event) => {
        func1(event)
    }
    const changeColor = (event) => {
        func2(event)
    }
    const changeFont = (selectedFont) => {
        func3(selectedFont)
    }
    const changeSize = (selectedSize) => {
        func4(selectedSize)
    }
    const sizePlus = (event) => {
        func5(event)
    }
    const sizeMinus = (event) => {
        func6(event)
    }
    const changeUnderline = (event) => {
        func7(event)
    }
    const changeBold = (event) => {
        func8(event)
    }

    return <div className="toolbar">
        <button className="tools bo" onClick={changeBold} style={{backgroundColor: bold? "grey" : "white"}} > B </button>
        <button className="tools un" onClick={changeUnderline} style={{backgroundColor: underline? "grey" : "white"}} > U </button>
        <button className="tools a-" onClick={sizeMinus} > A- </button>
        <button className="tools a+" onClick={sizePlus} > A+ </button>
        <SizeList func={changeSize} value={valSize} />
        <FontList func={changeFont} value={valFont} />
        <span> color </span> <input type="color" onChange={changeColor} />
        <span> back </span> <input type="color" onChange={changeBgColor} />
        <br />
    </div>
}

export default ToolBar