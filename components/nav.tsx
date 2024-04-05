import Image from "next/image"

export default function Nav() {
    return (
        <nav className="flex filter fixed px-12 py-12 h-20 justify-between items-center w-full">
                <div className=""><Image src="/303.png" alt="logo" width={100} height={80}/></div>
                <div className="flex space-x-10 items-center">
                    <a className="" href="./">Home</a>
                    <a className="" href="./story">Story</a>
                    <a className="" href="./sponsors">Sponsors</a>
                    <a className="" href="./outreach">Outreach</a>
                    <a className="bg-[#008080] px-6 py-3 text-[#EEE] rounded-full" href="./contact">Contact Us</a>
                </div>
        </nav>
    )
}