const End = ({ color, h1, h2, btn }) => {

    return (
        <div className={color}>
            <h1>{h1}</h1>
            <h2>{h2}</h2>
            <button className="p" onClick={btn}>Play Again</button>
        </div>
    )
}

export default End