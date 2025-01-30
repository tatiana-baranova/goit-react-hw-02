import s from "./Options.module.css"

const Options = () => {
    return (
        <div className={s.reviews}>
            <button className={s.btn}>Good</button>
            <button className={s.btn}>Neutral</button>
            <button className={s.btn}>Bad</button>
            {/* <button className={s.btn}>Reset</button> */}
        </div>
    )
}

export default Options;