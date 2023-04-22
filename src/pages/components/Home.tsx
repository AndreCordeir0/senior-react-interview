import { Search } from 'lucide-react'
import style from '../styles/home.module.css'
import { ChangeEvent, KeyboardEvent, SetStateAction, useState } from 'react';
import { getQuestions } from '../shared/services/api.service';
export default function HomeQuiz(){
    const [input, setInput] = useState('');
    console.log('renderizado');
    
    function pesquisarQuestoesEnter(event: KeyboardEvent<HTMLInputElement>){
        if(event.key === 'Enter'){
            pesquisarQuestoes();
        }
    }
    function pesquisarQuestoes(){
        getQuestions(input).then(res=>console.log(res));
    }
    function onChangeInput(event: ChangeEvent<HTMLInputElement>){
        const valor = event.target.value.replaceAll(/\D/g, '');
        setInput(valor);
    }
    return (
        <div className="flex items-center justify-center">
            <div className="gap-2 flex flex-col" style={{maxWidth: '1050px',width: '100%'}}>
                <h1 className="font-semibold text-4xl">Quiz</h1>
                <h2 className="font-normal text-xl">
                    Teste seus conhecimentos - Um quiz de perguntas para desafiar sua mente
                </h2>
                <div className='relative'>
                    <input value={input} onChange={(e)=>onChangeInput(e)} type="text" className={style.inputStyle} placeholder='Digite aqui a quantidade de perguntas...' onKeyDown={(e)=> pesquisarQuestoesEnter(e)}/>
                    <Search className={style.iconAbsolute} onClick={pesquisarQuestoes}></Search>
                </div>
            </div>
        </div>
    )
}