import { useState } from 'react';
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';


function App() {

    const [results, setResults] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    })


    const updateFeedback = feedbackType => {
        setResults((prev) => ({
            ...prev,
            [feedbackType]: prev[feedbackType] + 1,
        }))
    }
    const totalFeedback = setResults.good + setResults.neutral + setResults.bad;
    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback}/>
            <Feedback results={results} />
        </>
    );
}

export default App
