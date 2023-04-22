import { useEffect, useState } from 'react';
import style from '../styles/question.module.css';
import { Result } from '../shared/models/question';

export default function ItemQuestion({index, question}:{question:Result, index:number}) {
    const indexLabel = ['A', 'B', 'C', 'D', 'E'];
    const [indexClicado, setIndexClicado] = useState<number>(); 
    const [perguntas, setPerguntas] = useState<string[]>(); 

    useEffect(()=>{
        if(!perguntas){
            let arr = [];
            arr.push(question.correct_answer);
            arr.push(...question.incorrect_answers);
            arr.sort((a, b) =>a > b ? 1 : a < b ? -1 : 0 );
            setPerguntas(arr);
        }
    },[])

    return (
        <div className="bg-neutral-700 m-3 rounded-md flex flex-col p-2">
            <label>{index + 1}. {question.question.replace(/&quot;/g, '"')}: </label>
          <div>
            {perguntas?.map((item,i)=>{
                return(
                        <div key={i}  className='flex pt-2 pb-2'>
                            <div className={`${style.botaoSelecionar} flex justify-center items-center cursor-pointer ${indexClicado == i ? style.choice : ''}`} onClick={()=>setIndexClicado(i)}>
                                {indexLabel[i]}
                            </div>
                            <div className='pl-2 cursor-pointer' onClick={()=>setIndexClicado(i)}>{item}</div>
                        </div>
                )
            })}
          </div>
        </div>
    )
}