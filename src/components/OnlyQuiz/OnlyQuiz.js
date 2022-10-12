import React from 'react';

const OnlyQuiz = ({ quiz }) => {
    console.log(quiz)
    const { question, options, correctAnswer } = quiz
    const handleAddToCart = () => {
        alert(correctAnswer);
    };
    const showCurrectQuiz = () =>{
        if(options[0] === correctAnswer){
            alert("correct answer");
        }
        else if(options[1] === correctAnswer){
            alert("correct answer");
        }
        else if(options[2] === correctAnswer){
            alert("correct answer");
        }
        else if(options[3] === correctAnswer){
            alert("correct answer");
        }
        else{
            alert("Wrong answer!");
        }

    }
    return (
        <div className='grid grid-cols-1 gap-5 border border-indigo-600 m-3'>
            <div className='flex justify-center'>
                <p className='mx-8'>Quiz: {question}</p>
                <button onClick={handleAddToCart}>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-8 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg></button>

            </div>
            <div className='inline-block'>
                <input onClick={showCurrectQuiz} type="radio" name="radio-1" className="radio" />{options[0]} <br />
                <input onClick={showCurrectQuiz} type="radio" name="radio-1" className="radio" /><span>{options[1]}</span><br />
                <input onClick={showCurrectQuiz} type="radio" name="radio-1" className="radio" /><span>{options[2]}</span><br />
                <input onClick={showCurrectQuiz} type="radio" name="radio-1" className="radio" /> <span>{options[3]}</span>
            </div>

        </div>
    );
};

export default OnlyQuiz;