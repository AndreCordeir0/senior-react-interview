import { Work_Sans } from 'next/font/google';
import HomeQuiz from './components/Home';
import { MenuLateral } from './components/MenuLateral';
import MenuTop from './components/MenuTop';

const lexend = Work_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={`${lexend.className}, flex`}>
        <MenuLateral/>
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
        </div>
      </div>
    </>
  )
}