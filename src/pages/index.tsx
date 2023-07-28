import { Work_Sans } from 'next/font/google'
import HomeQuiz from './components/Home'
import MenuTop from './components/MenuTop'
import Historico from './components/Historico'
import style from './styles/menu_lateral.module.css';
import { Swords } from 'lucide-react';
import { useRouter } from 'next/router';

const lexend = Work_Sans({ subsets: ['latin'] })

export default function Home() {
const router = useRouter();

return (
<>
  <div className={`${lexend.className}, flex`}>
    <div className={`w-64 flex ${style.menu_lateral} items-center flex-col`}>
      <div className="flex gap-2 items-center h-max mt-4 pb-4">
        <Swords className="cursor-pointer" color="#A259FF" size={'2rem'} onClick={()=>router.push('/')}></Swords>
        <a href="/" className="text-2xl font-medium">Quiz Challenger</a>
      </div>
      <div className='flex w-full items-center p-5 gap-2'>
        <svg viewBox="0 0 22 18" focusable="false" aria-label="Home" style={{width: '2rem'}}><path d="M11 2.84824L16.5 7.61294V15.8824H14.3V9.52941H7.7V15.8824H5.5V7.61294L11 2.84824V2.84824ZM11 0L0 9.52941H3.3V18H9.9V11.6471H12.1V18H18.7V9.52941H22L11 0Z" fill="url(#NavHomeIconHover)"></path><defs><linearGradient id="NavHomeIconHover" x1="-9.46" y1="-3.51187e-06" x2="24.5048" y2="-6.55974" gradientUnits="userSpaceOnUse"><stop offset="0.0001" stop-color="#FA5560"></stop><stop offset="0.499028" stop-color="#B14BF4"></stop><stop offset="1" stop-color="#4D91FF"></stop></linearGradient></defs></svg>
        Home      
      </div>
    </div>
 
    <div className='w-full'>
    <button>
      <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true" focusable="false">
        <path
          d="M7 1C7 0.448 7.448 0 8 0H19C19.552 0 20 0.448 20 1C20 1.552 19.552 2 19 2H8C7.448 2 7 1.552 7 1ZM19 6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H19C19.552 8 20 7.552 20 7C20 6.448 19.552 6 19 6ZM12 12H1C0.448 12 0 12.448 0 13C0 13.552 0.448 14 1 14H12C12.552 14 13 13.552 13 13C13 12.448 12.552 12 12 12Z"
          fill="currentColor"></path>
      </svg>
    </button>
      <MenuTop />
      
      <HomeQuiz />
      <Historico></Historico>
    </div>
  </div>
</>
)
}