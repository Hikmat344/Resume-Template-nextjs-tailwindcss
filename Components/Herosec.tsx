import react from "react"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import Image from "next/image"
import about from "../Components/About"
export const Herosec = () =>{

    
    return(
        <section className="flex items-center text-justify justify-around gap-0 md:flex-row flex-col  md:max-w-md max-w-auto max-h-screen">
            <div className="flex md:max-w-full max-w-auto px-15 py-40 mt-30  md:mt-20 md:py-0  pb-0">
            
             <Image className="rounded-full w-96 h-96 shadow-lg shadow-red-900" src={"/Images/image.png"} alt="hikmatullah" /> 

            </div>
            <div className=" md:py-10 mt-8 md:px-20">
            <h2 className="flex justify-center md:justify-start duration-700 font-extralight text-green-500 text-2xl text-bold">web Developer</h2>

            <h1 className="font-bold font-mono text-red-900 text-5xl flex justify-center md:justify-start max-w-2xl md:max-w-1xl ">Hikmat Ullah</h1>
            <h2 className="flex justify-center md:justify-start duration-700 font-extralight text-green-500 text-1xl text-bold">web 3.0 & Metaverse Evengalist</h2>


            <p className="text-white font-sans text-1xl text-justify items-center max-w-sm md:max-w-2xl mt-5">So keep your eyes fixed on the horizon, your feet firmly planted, and your spirit unbreakable. Because when life tries to suck you in, you will be ready to say, &apos;Bring it on.&apos;</p>
            <div className="flex flex-row  gap-8 justify-center md:justify-start mt-5">
            <button className="mt-5 items-center rounded-3xl text-white border-4 border-red-900 flex justify-center cursor-pointer group-hover:scale-105 ease-in hover:bg-red-900 py-2 px-2 ">
            <a href="/Hikmat_CV.pdf" download="cv">Download CV</a>

            </button>
            <button className="text-white mt-5 items-center  rounded-3xl flex justify-center bg-red-900 cursor-pointer group-hover:scale-105 ease-in hover:bg-gray-300 py-2 px-5 mx-0">
            <a  href={"#about"}>Profile</a>
            <MdOutlineKeyboardArrowRight size={25}  className ='group-hover:rotate-90 duration-500 '/>
            </button>
            </div>
            </div>

            
        </section>

        
    )
}