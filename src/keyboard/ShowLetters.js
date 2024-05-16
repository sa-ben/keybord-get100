import SingleLetter from "./SingleLetter"

const ShowLetters = ({ Letters }) => {
    return <div className="textArea">
        {Letters.map((singleLTR, index) => <SingleLetter key={index} sLetter={singleLTR} />)}
    </div>
}
export default ShowLetters