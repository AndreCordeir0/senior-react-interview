import { Search } from 'lucide-react'
import style from '../styles/home.module.css'
export default function HomeQuiz(){
    return (
        <div className="flex items-center justify-center">
            <div className="gap-2 flex flex-col" style={{maxWidth: '1050px',width: '100%'}}>
                <h1 className="font-semibold text-4xl">Quiz</h1>
                <h2 className="font-normal text-xl">
                    Teste seus conhecimentos - Um quiz de perguntas para desafiar sua mente
                </h2>
                <div className='relative'>
                    <input type="text" className={style.inputStyle} placeholder='Digite aqui...'/>
                    <Search className={style.iconAbsolute}></Search>
                </div>
            </div>
        </div>
    )
}

