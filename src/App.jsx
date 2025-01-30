import { useState } from 'react';
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options';

function App() {

    const [results, setResults] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    })


    return (
        <>
            <Description />
            <Options/>
        </>
    );
}

export default App
