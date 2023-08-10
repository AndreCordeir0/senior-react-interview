import { useRouter } from "next/router"
import ItemQuestion from "../components/ItemQuestion";
import MenuTop from "../components/MenuTop";
import { Work_Sans } from "next/font/google";
import { getQuestions } from "../shared/services/api.service";
import { Question } from "../shared/models/question";
import { useEffect, useState } from "react";

const lexend = Work_Sans({ subsets: ['latin'] })

export default function Perguntas(){
    const [listaPerguntas, setListaPerguntas] = useState<Question>();
    const [respostas , setRespostas] = useState<Map<string, string>>(new Map<string, string>());

    const router = useRouter();
    const id = router.query.id as string;
    console.log(router);
    useEffect(()=>{
        if(id){
            getQuestions(id).then(res=> {
                setListaPerguntas(res);
            });
        }
    },[id]);


    function handleRespostas(){
        salvarRespostasNoNavegador();
    }
    function salvarRespostasNoNavegador(){
        if(respostas.size === listaPerguntas?.results.length){
            let arr = [];
            if(localStorage.getItem('respostasAnteriores')){
                arr = JSON.parse(localStorage.getItem('respostasAnteriores') as string);
            }
            arr.push(...Array.from(respostas));
            localStorage.setItem('respostasAnteriores', JSON.stringify(arr));
            setRespostas(new Map());
        }
    }
    return(
        <div className={`${lexend.className}`} style={{paddingBottom:'20px'}}>
            <MenuTop/>
            <div>
                {listaPerguntas?.results.map((res, i)=>{
                    return (
                        <div key={i}>
                            <ItemQuestion index={i} question={res} respostas={respostas} setRespostas={setRespostas}></ItemQuestion>
                        </div>
                    )
                })}
            </div>
            <div className="flex fles-col justify-center">
                <button className="bg-orange-600 p-3 font-bold" onClick={()=>handleRespostas()}>Responder</button>
            </div>
        </div>
    )
}