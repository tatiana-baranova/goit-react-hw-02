import s from "./Feedback.module.css"

const Feedback = ({ results, totalFeedback, positive }) => {
    return (
        <ul className={s.list}>
            <li className={s.feedback}>Good: {results.good}</li>
            <li className={s.feedback}>Neutral: {results.neutral}</li>
            <li className={s.feedback}>Bad: {results.bad}</li>
            <li className={s.feedback}>Total: {totalFeedback}</li>
            <li className={s.feedback}>Positive: {positive}%</li>
        </ul>
    )
}

export default Feedback;