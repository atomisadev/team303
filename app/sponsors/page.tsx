import Image from "next/image"

export default async function Home() {
    return (
        <main className="flex flex-col justify-center items-center text-center px-20 py-48 gap-10">
            <Image src="/content/spon.svg" alt="sponsors" width="500" height="100"/>
            <p className="w-4/5 text-sm">A big thank you to all of our sponsors! Our success depends on the support of our generous sponsors. Scroll down to see our current sponsors, as well as our sponsor packages. If you are interested in becoming a sponsor for Team 303, please feel free to contact us. </p>
            <div className="flex flex-row justify-center items-center font-bold gap-10 px-12 py-6">
                <a href="./sponsors" className="border-b-2 border-[#008080]">Sponsors</a>
                <a href="./ramp" className="text-[#555]">Ramp & Mentors</a>
            </div>
            <Image src="/sponsors/txt1.svg" alt="" width={320} height={5}/>
            <div className="flex justify-normal gap-10 bg-[#FFF] items-center p-12 rounded-3xl">
                <div>
                    <Image src="/sponsors/brrsd.jpg" alt="j&j" width="300" height="5" />
                </div>
                <div>
                <Image src="/sponsors/ramp-logo.jpg" alt="j&j" width="300" height="5" />
                </div>
                <div>
                <Image src="/sponsors/j&j.jpg" alt="j&j" width="300" height="5" />
                </div>
                <div>
                <Image src="/sponsors/rvcc.png" alt="j&j" width="300" height="5" />
                </div>
            </div>
            <Image src="/sponsors/txt2.svg" alt="" width={190} height={5}/>
            <div className="flex justify-normal gap-10 bg-[#FFF] items-center p-12 rounded-3xl">
                <Image src="/sponsors/bell-labs.png" alt="j&j" width="300" height="5" />
            </div>
            <Image src="/sponsors/txt3.svg" alt="" width={250} height={5}/>
            <div className="flex justify-normal gap-10 bg-[#FFF] items-center p-12 rounded-3xl">
                <div>
                    <Image src="/sponsors/bank.png" alt="j&j" width="300" height="5" />
                </div>
                <div>
                <Image src="/sponsors/lightburn.png" alt="j&j" width="300" height="5" />
                </div>
                <div>
                <Image src="/sponsors/triadtool.png" alt="j&j" width="300" height="5" />
                </div>
            </div>
            <Image src="/sponsors/txt4.svg" alt="" width={250} height={5}/>
            <div className="flex justify-normal gap-10 bg-[#FFF] items-center p-12 rounded-3xl">
                <div>
                <Image src="/sponsors/soildworks.png" alt="j&j" width="300" height="5" />
                </div>
                <div>
                    <Image src="/sponsors/iCode-Logo.png" alt="j&j" width="300" height="5" />
                </div>
                <div>
                <Image src="/sponsors/NY-mellon.png" alt="j&j" width="300" height="5" />
                </div>
            </div>
        </main>
    );
}