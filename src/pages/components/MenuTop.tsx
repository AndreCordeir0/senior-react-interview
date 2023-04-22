import { Swords, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MenuTop(){
    const router = useRouter();
    return (
        <div className="flex justify-between pl-3 pr-3 pt-3">
            <div className="flex gap-3 items-center">
                <Swords className="cursor-pointer" color="#A259FF" size={'2rem'} onClick={()=>router.push('/')}></Swords>
                <a href="/" className="text-2xl">Quiz Challenger</a>
            </div>
            <div>
                <Link href={'/'} className="rounded-3xl bg-purple-600 flex pl-5 pr-5 h-14 items-center gap-2">
                    <User></User>
                    <label className="font-semibold cursor-pointer">Login</label>
                </Link>
            </div>
        </div>
    )
}