import { Swords, User } from "lucide-react";
import Link from "next/link";

export default function MenuTop(){
    return (
        <div className="flex justify-between pl-3 pr-3 pt-3">
            <div className="flex gap-3 items-center">
                <Swords color="#A259FF" size={'2rem'}></Swords>
                <a className="text-2xl">Quiz Challenger</a>
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