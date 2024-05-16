
const KbButtons = ({ kbKeys, kbIndex, handleClick }) => {
    return <div className="keyboard">
        {kbKeys.map((keyOpts, index) => (
            <button
                key={index}
                className={keyOpts[kbIndex]}
                onClick={() => handleClick(keyOpts[kbIndex])}
            >
                {keyOpts[kbIndex]}
            </button>
        ))}
    </div>
}

export default KbButtons