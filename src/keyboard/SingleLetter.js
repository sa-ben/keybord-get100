const SingleLetter = ({ sLetter }) => {
    return <span className="text" style={{
        background: sLetter.bgColor,
        color: sLetter.color,
        fontFamily: sLetter.font,
        fontSize: sLetter.size,
        fontWeight: sLetter.bold ? "bold" : "normal",
        textDecoration: sLetter.underline ? "underline" : "none"
    }}> {sLetter.letter} </span>
}

export default SingleLetter