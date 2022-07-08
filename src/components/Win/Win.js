const Win = ({ btn }) => {

    return (
        <div className="win">
            <h1>Yay!</h1>
            <h2>You won!</h2>
            <button className="p" onClick={btn}>Play Again</button>
        </div>
    )
}

export default Win