const FontList = ({func, value}) => {

    const changeSize = (selectedFont) => {
        func(selectedFont)
    }
    return <select value={value} onChange={changeSize}>
        <option value="Arial, Helvetica, sans-serif"> Arial </option>
        <option value = "Georgia, 'Times New Roman', Times, serif"> Georgia </option>
        <option value = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif'"> Segoe </option>
        <option value = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"> Gill Sans </option>
        <option value = "Verdana, Geneva, Tahoma, sans-serif"> Verdana </option>
        <option value = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"> Cambria </option>
        <option value="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"> Lucida </option>
    </select>
}

export default FontList