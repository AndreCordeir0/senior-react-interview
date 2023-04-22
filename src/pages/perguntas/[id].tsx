import { useRouter } from "next/router"

export default function Perguntas2(){
    const router = useRouter();
    console.log(router);
    
    return(
        <div>
            perguntas: {router.query.id}
        </div>
    )
}