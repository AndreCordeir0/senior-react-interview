import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import style from '../styles/question.module.css';
import { Result } from '../shared/models/question';

export default function ItemQuestion({index, question, respostas, setRespostas}:{question:Result, index:number,respostas:Map<string, string>, setRespostas:Dispatch<SetStateAction<Map<string, string>>>}) {
    const indexLabel = ['A', 'B', 'C', 'D', 'E'];
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

    function handleRespostas(resposta:string){
        setRespostas(map=>new Map(map.set(question.question, resposta)));
    }
    function compararResposta(item:any){
        return respostas.get(question.question) == item;
    }
    return (
        <div className="m-3 rounded-md flex flex-col p-2" style={{background: 'rgb(19, 19, 19)'}}>
            <label>{index + 1}. {question.question.replace(/&quot;/g, '"')}: </label>
          <div>
            {perguntas?.map((item,i)=>{
                return(
                        <div key={i}  className='flex pt-2 pb-2'>
                            <div className={`${style.botaoSelecionar} flex justify-center items-center cursor-pointer ${compararResposta(item) ? style.choice : ''}`} onClick={()=>handleRespostas(item)}>
                                {indexLabel[i]}
                            </div>
                            <div>
                                <div className='pl-2 cursor-pointer' onClick={()=>handleRespostas(item)}>{item}</div>
                            </div>
                        </div>
                )
            })}
                    {/* <small>Você errou</small>
                    <small>Parabéns! Você acertou!</small> */}
          </div>
        </div>
    )
}