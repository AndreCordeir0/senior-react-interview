import { Inter } from 'next/font/google'
import HomeQuiz from './components/Home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HomeQuiz/>
    </>
  )
}
