import './Quiz.css'
const Quiz = () => {
    return (
        <div className=' container quiz-container'>

            <h1>Quiz App</h1>
            <hr />

            <h2>Which device is used to create a website?</h2>

            <ul className='quiz-options list-group mb-3'>
                <li className='list-group-item fs-5'>A. Computer</li>
                <li className='list-group-item fs-5'>B. Phone</li>
                <li className='list-group-item fs-5'>C. Tablet</li>
                <li className='list-group-item fs-5'>D. Smartwatch</li>
            </ul>

            <button className='quiz-button'>Next</button>

            <div className="index">1 / 10</div>
        </div>

    )
}

export default Quiz