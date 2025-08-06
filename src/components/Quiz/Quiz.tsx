import './Quiz.css';
import { data } from '../../assets/data';
import { useState, useRef } from 'react';
const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [score, setScore] = useState(0);
    const [lock, setLock] = useState(false);
    const Option1 = useRef<HTMLLIElement>(null);
    const Option2 = useRef<HTMLLIElement>(null);
    const Option3 = useRef<HTMLLIElement>(null);
    const Option4 = useRef<HTMLLIElement>(null);
    const option_array = [Option1, Option2, Option3, Option4];
    const checkAnswer = (e: React.MouseEvent<HTMLLIElement>, ans: number) => {
        if (lock) return;
        if (ans === question.ans) {
            (e.target as HTMLLIElement).classList.add('correct-answer');
            setScore(score + 1);
        }
        else {
            (e.target as HTMLLIElement).classList.add('wrong-answer');
            option_array[question.ans - 1].current?.classList.add('correct-answer');
        }
        setLock(true);
    }
    const handleNext = () => {
        if (index === data.length || lock === false) {
            return;
        }
        setIndex(index + 1);
        setQuestion(data[index]);
        setLock(false);
        option_array.map((option) => {
            option.current?.classList.remove('correct-answer');
            option.current?.classList.remove('wrong-answer');
        })

    }
    return (
        <div className=' container quiz-container'>

            <h1>Quiz App</h1>
            <hr />

            <h2>{index + 1}. {question.question}</h2>

            <ul className='quiz-options list-group mb-3 gap-2'>
                <li className='list-group-item fs-5 border-1 border-secondary rounded-1 cursor-pointer' ref={Option1} onClick={(e) => checkAnswer(e, 1)}>A. {question.option1}</li>
                <li className='list-group-item fs-5 border-1 border-secondary rounded-1 cursor-pointer' ref={Option2} onClick={(e) => checkAnswer(e, 2)}>B. {question.option2}</li>
                <li className='list-group-item fs-5 border-1 border-secondary rounded-1 cursor-pointer' ref={Option3} onClick={(e) => checkAnswer(e, 3)}>C. {question.option3}</li>
                <li className='list-group-item fs-5 border-1 border-secondary rounded-1 cursor-pointer' ref={Option4} onClick={(e) => checkAnswer(e, 4)}>D. {question.option4}</li>
            </ul>

            <button className='quiz-button' onClick={handleNext}>Next</button>
            <div className="result d-flex justify-content-between">
                <div className="index fs-5">Q: {index + 1} / {data.length}</div>
                <div className="score fs-5">Score: {score}/{data.length}</div>
            </div>

        </div>

    )
}

export default Quiz