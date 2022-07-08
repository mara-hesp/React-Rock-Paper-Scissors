const Lose = ({ btn }) => {

    return (
        <div className="lose">
            <h1>Oh no...</h1>
            <h2>You lost</h2>
            <button className="p" onClick={btn}>Play Again</button>
        </div>
    )
}

export default Lose