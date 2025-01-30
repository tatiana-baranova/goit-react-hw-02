import { useState } from "react";
import s from "./Options.module.css"

const Options = ({ updateFeedback, }) => {
    return (
        <div className={s.reviews}>
            <button className={s.btn} onClick={() => updateFeedback('good')}>Good</button>
            <button className={s.btn} onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button className={s.btn} onClick={() => updateFeedback('bad')}>Bad</button>
            {/* <button className={s.btn}>Reset</button> */}
        </div>
    )
}

export default Options;