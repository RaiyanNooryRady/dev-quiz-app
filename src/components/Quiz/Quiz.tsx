import './Quiz.css'
const Quiz = () => {
    return (
        <div className=' container quiz-container'>

            <h1>Quiz App</h1>
            <hr />

            <h2>Which device is used to create a website?</h2>

            <ul className='quiz-options list-group mb-3 gap-2'>
                <li className='list-group-item fs-5 border-1 border-secondary rounded-1'>A. Computer</li>
                <li className='list-group-item fs-5 border-1 border-secondary rounded-1'>B. Phone</li>
                <li className='list-group-item fs-5 border-1 border-secondary rounded-1'>C. Tablet</li>
                <li className='list-group-item fs-5 border-1 border-secondary rounded-1'>D. Smartwatch</li>
            </ul>

            <button className='quiz-button'>Next</button>

            <div className="index fs-5">1 / 10</div>
        </div>

    )
}

export default Quiz