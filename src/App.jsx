import { useEffect, useState } from 'react';
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
const [results, setResults] = useState(() => {
        const saveResults = JSON.parse(localStorage.getItem('feedback'));
        return saveResults || { good: 0, neutral: 0, bad: 0 };
    });

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(results));
    }, [results]);

    const updateFeedback = feedbackType => {
        setResults((prev) => ({
            ...prev,
            [feedbackType]: prev[feedbackType] + 1,
        }))
    }
    const totalFeedback = results.good + results.neutral + results.bad;
    
    const positive = totalFeedback > 0 
    ? Math.round((results.good / totalFeedback) * 100) 
    : 0;

    const reset = () => {
        setResults({
        good: 0,
        neutral: 0,
        bad: 0
        });
    }

    return (
        <>
            <Description />
            <Options results={results} updateFeedback={updateFeedback} reset={reset} totalFeedback={totalFeedback} positive={positive} />
            {(totalFeedback === 0) && <Notification />}
            {(totalFeedback !== 0) && <Feedback results={results} totalFeedback={totalFeedback} positive={positive}/>}
            
        </>
    ); 
}

export default App
