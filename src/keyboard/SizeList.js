const SizeList = ({ func, value }) => {

    const changeSize = (selectedValue) => {
        func(selectedValue)
    }

    return <select value={value} onChange={changeSize}>
        <option value="12"> 12 </option>
        <option value="14"> 14 </option>
        <option value="16"> 16 </option>
        <option value="18"> 18 </option>
        <option value="20"> 20 </option>
        <option value="24"> 24 </option>
        <option value="28"> 28 </option>
        <option value="30"> 30 </option>
        <option value="34"> 34 </option>
        <option value="38"> 38 </option>
        <option value="42"> 42 </option>
        <option value="48"> 48 </option>
        <option value="56"> 56 </option>
        <option value="64"> 64 </option>
        <option value="72"> 72 </option>
        <option value="84"> 84 </option>
        <option value={value}> {value} </option>
    </select>
}

export default SizeList