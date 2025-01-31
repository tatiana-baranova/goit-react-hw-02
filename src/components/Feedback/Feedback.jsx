import s from "./Feedback.module.css"

const Feedback = ({ results, totalFeedback, positive }) => {
    return (
        <ul className={s.feedback}>
            <li>Good:{results.good}</li>
            <li>Neutral: {results.neutral}</li>
            <li>Bad: {results.bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {positive}%</li>
        </ul>
    )
}

export default Feedback;