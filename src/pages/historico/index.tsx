import { MenuLateral } from "../components/MenuLateral"

export default function Historico(){
    return(
        <>
        <div className={`flex`}>
            <MenuLateral/>
            <div className="font-normal text-xl flex justify-center pt-12 w-full">
                Histórico
            </div>
        </div>
        </>
    )
}