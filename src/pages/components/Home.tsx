export default function HomeQuiz(){
    return (
        <>
            <h1 className="flex flex-col items-center justify-center" >Quiz Challenger</h1>
                <div className="flex flex-col items-center justify-center dark:bg-slate-800 shadow-md w-2/4 mx-auto gap-6 border border-sky-500 rounded	">
                    <label htmlFor="quizInput">Escreva a quantidade de perguntas a serem respondidas:</label>
                    <input id="quizInput" type="text" className="w-60"/>
                </div>
       
        </>
    )
}