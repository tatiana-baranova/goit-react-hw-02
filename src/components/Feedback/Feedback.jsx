import s from "./Feedback.module.css"

const Feedback = ({results}) => {
    return (
        <ul className={s.feedback}>
            <li>Good:{results.good}</li>
            <li>Neutral: {results.neutral}</li>
            <li>Bad: {results.bad}</li>
        </ul>
    )
}

export default Feedback;