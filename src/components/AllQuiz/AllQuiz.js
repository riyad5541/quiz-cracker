import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OnlyQuiz from '../OnlyQuiz/OnlyQuiz';

const AllQuiz = () => {
    const quizData = useLoaderData()
    // console.log(quizData);
    const quizes = quizData.data.questions
    // console.log(quizes);
    return (
        <div>
            <p className='text-4xl font-bold'>Quiz of {quizData.data.name}</p>
            {
                quizes.map(quiz => <OnlyQuiz
                    key={quiz.id}
                    quiz={quiz}></OnlyQuiz>
                    )
            }
        </div>
    );
};

export default AllQuiz;