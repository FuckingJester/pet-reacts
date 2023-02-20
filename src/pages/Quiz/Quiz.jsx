import React, { useState } from 'react'
import classes from './Quiz.module.css'

    const questions = [
        {
            title: 'React - это ... ?',
            variants: ['библиотека', 'фреймворк', 'приложение'],
            correct: 0,
        },
        {
            title: 'Компонент - это ... ',
            variants: ['приложение', 'часть приложения или страницы', 'название страницы'],
            correct: 1,
        },
        {
            title: 'Что такое JSX?',
            variants: [
                'Это простой HTML',
                'Это функция',
                'Это тот же HTML, но с возможностью выполнять JS-код',
            ],
            correct: 2,
        },
        {
            title: 'От какого класса идет наследование всех компонентов?',
            variants: [
                'ReactComponent',
                'React.Component',
                'Component',
            ],
            correct: 1,
        },
        {
            title: 'Где правильно выведен компонент через рендер?',
            variants: [
                '<Test >',
                '</Test >',
                '<Test />',
            ],
            correct: 2,
        },
      ];
      
      function Result({correct}) {
        return (
          <div className={`${classes.result}`}>
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {correct} ответов из {questions.length}</h2>
            <a href="/quiz">
                <button>Попробовать снова</button>
            </a>
          </div>
        );
      }
      
      function Game({step, question, checkVariants}) {
        const persentage = Math.round(step / questions.length * 100) 
        
        return (
          <>
            <div className={`${classes.progress}`}>
              <div style={{ width: `${persentage}%` }} className={`${classes.progress__inner}`}></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((text,index) => (
                    <li onClick={() => checkVariants(index)} key={index}>
                        {text}                   
                    </li>))}              
            </ul>
          </>
        );
      }
      
      function Quiz() {
        const [step, setStep] = useState(0)
        const [correct, setCorrect] = useState(0)
        const question = questions[step]

        function checkVariants(index){
            setStep( step + 1 )
            
            if( index === question.correct){
                setCorrect(correct + 1)
            }

        }
        return (
          <div className={`${classes.Quiz}`}>
            {
                step !== questions.length 
                    ? <Game step={step} checkVariants ={checkVariants} question={question} /> 
                    : <Result correct={correct} />
            }                
          </div>
        );
      }
      
export default Quiz
