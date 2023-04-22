import { Work_Sans } from 'next/font/google'
import HomeQuiz from './components/Home'
import MenuTop from './components/MenuTop'
import Historico from './components/Historico'

const lexend = Work_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className ={lexend.className}> 
      <MenuTop/>
      <HomeQuiz/>
      <Historico></Historico>
    </div>
    </>
  )
}
