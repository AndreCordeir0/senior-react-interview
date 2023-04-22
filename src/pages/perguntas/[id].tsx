import { useRouter } from "next/router"
import ItemQuestion from "../components/ItemQuestion";
import MenuTop from "../components/MenuTop";
import { Work_Sans } from "next/font/google";
import { getQuestions } from "../shared/services/api.service";
import { Question } from "../shared/models/question";
import { useEffect, useState } from "react";

const lexend = Work_Sans({ subsets: ['latin'] })

export default function Perguntas2(){
    const [listaPerguntas, setListaPerguntas] = useState<Question>();
    const router = useRouter();
    const id = router.query.id as string;
    
    useEffect(()=>{
        if(id){
            getQuestions(id).then(res=> {
                setListaPerguntas(res);
                console.log(listaPerguntas);
            });
        }
    },[id])

    return(
        <div className={`${lexend.className}`}>
            <MenuTop/>
            <div>
                {listaPerguntas?.results.map((res, i)=>{
                    return (
                        <ItemQuestion index={i} question={res}></ItemQuestion>
                    )
                })}
            </div>

        </div>
    )
}