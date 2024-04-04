import Image from "next/image"

export default function Bot() {
    return (
        <main className="flex justify-between px-48 py-20 gap-20 items-center">
            <div className="w-1/2">
                <Image src="/content/2024.svg" alt="image" width={500} height={100}/>
                <p className="text-sm py-12">Check out our 2024 robot the for the FIRST robotics competition, Crescendo<br/><b>Hatboro-Horsham</b><br/>The team faced many wiring and inspection issues resulting in several issues the pit crew desperately fixed, and the team still managed to secure 3rd pick from alliance 4.<br/><br/><b>Warren Hills</b><br/>The team came back with a revised robot for their week 4 event, which did exceptionally well during the first couple games,however misfortune led to some mechanical failures later into the event. The team proudly accept EI award, and are now going to Lehigh, to participate in the Mid-Atlantic District Championships <br/></p>
            </div>
            <div className="w-1/3">
                <Image src="/img/chompy.png" alt="txt" width={300} height={0} />
                
            </div>
        </main>
    );
}