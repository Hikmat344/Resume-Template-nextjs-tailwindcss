
import Image from "next/image";
import react from "react";

export default function About(){
return (
    <div className="flex items-center">
        <div className="flex items-center max-w-full mx-auto leading-5" id="about">
            <div className="text-white-500 px-10 mt-10">
                <h1 className="p-24 text-center text-5xl text-white mb-10">
                    About Me
                    {/* <hr className="flex items-center justify-center w-48 h-1 mt-4 bg-white border-5 rounded  dark:bg-gray-700" /> */}
                </h1>
                <div className="flex justify-between">
                    <div className="flex flex-col flex-initial">
                        <p className="max-w-5xl flex text-slate-300 text-justify">
                             My name is Hikmat Ullah. I am a dedicated and reliable Computer System Engineering professional and having 1 year of working experience 
                            as a web developer based in Peshawar , PK. I have worked on different freelanceing platforms as well as with some international companies.
                            During the day I utilize the time to build my own products. Right now I am also trying a hand at machine learning and AI. I love to learn and explore new arenas.
                    

                        </p>
                    </div>
                    <div className="flex flex-col">
            
                            <Image className="rounded-none w-15 h-15 shadow-md"  src={"/public/Images/developer.png"} alt="web development icons"/>
                        
                    </div>
                    </div>
            </div>
        </div>
    </div>
)

}