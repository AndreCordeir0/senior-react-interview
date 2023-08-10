import { Swords } from "lucide-react";
import style from '../styles/menu_lateral.module.css';
import { useRouter } from "next/router";

export function MenuLateral(){
    const router = useRouter();
    return (
        <>
            <div className={`w-64 flex ${style.menu_lateral} items-center flex-col`}>
                <div className="flex gap-2 items-center h-max mt-4 pb-4">
                    <Swords className="cursor-pointer" color="#A259FF" size={'2rem'} onClick={()=>router.push('/')}></Swords>
                    <a href="/" className="text-2xl font-medium">Quiz Challenger</a>
                </div>
                <div className={`w-64 flex ${style.menu_lateral} items-center flex-col gap-2`}>
                    <div className={`p-4 flex w-full items-center p-5 gap-2 cursor-pointer ${router.asPath === '/' ? style.item_active : style.item_not_activated}`} onClick={()=>router.push('/')}>
                        <svg viewBox="0 0 22 18" focusable="false" aria-label="Home" style={{width: '2rem'}}><path d="M11 2.84824L16.5 7.61294V15.8824H14.3V9.52941H7.7V15.8824H5.5V7.61294L11 2.84824V2.84824ZM11 0L0 9.52941H3.3V18H9.9V11.6471H12.1V18H18.7V9.52941H22L11 0Z" fill="url(#NavHomeIconHover)"></path><defs><linearGradient id="NavHomeIconHover" x1="-9.46" y1="-3.51187e-06" x2="24.5048" y2="-6.55974" gradientUnits="userSpaceOnUse"><stop offset="0.0001" stop-color="#FA5560"></stop><stop offset="0.499028" stop-color="#B14BF4"></stop><stop offset="1" stop-color="#4D91FF"></stop></linearGradient></defs></svg>
                        Home
                    </div>
                    <div className={`p-4 flex w-full items-center p-5 gap-2 cursor-pointer ${router.asPath === '/historico' ? style.item_active : style.item_not_activated}`} onClick={()=>router.push('/historico')}>
                        <svg viewBox="0 0 22 18" focusable="false" aria-label="Home" style={{width: '2rem'}}><path d="M11 2.84824L16.5 7.61294V15.8824H14.3V9.52941H7.7V15.8824H5.5V7.61294L11 2.84824V2.84824ZM11 0L0 9.52941H3.3V18H9.9V11.6471H12.1V18H18.7V9.52941H22L11 0Z" fill="url(#NavHomeIconHover)"></path><defs><linearGradient id="NavHomeIconHover" x1="-9.46" y1="-3.51187e-06" x2="24.5048" y2="-6.55974" gradientUnits="userSpaceOnUse"><stop offset="0.0001" stop-color="#FA5560"></stop><stop offset="0.499028" stop-color="#B14BF4"></stop><stop offset="1" stop-color="#4D91FF"></stop></linearGradient></defs></svg>
                        Histórico
                    </div>
                </div>
            </div>
        </>
    )
}