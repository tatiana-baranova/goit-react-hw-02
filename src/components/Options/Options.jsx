import s from "./Options.module.css"

const Options = ({results, updateFeedback, totalFeedback, reset }) => {

    const btnResults = Object.keys(results);
    return (
        <div className={s.reviews}>
            {btnResults.map(option => {
                const capitalizedOption = option.charAt(0).toUpperCase() + option.slice(1);
                return (
                    <button key={option}
                        onClick={() => updateFeedback(option)}>
                        {capitalizedOption}
                    </button>
                );
        })}
            {(totalFeedback > 0) && <button className={s.btn} onClick={reset}>Reset</button>}
        </div>
    )
}

export default Options;