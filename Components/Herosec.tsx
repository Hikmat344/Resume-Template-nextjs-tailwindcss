import react from "react"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import image from "@/public/Images/image.png"
import Image from "next/image"
export const Herosec = () =>{
    return(
        <section className="flex items-center text-justify justify-between md:flex-row flex-col  md:max-w-full max-w-auto max-h-screen">
            <div className="md:max-w-full max-w-auto px-20 mt-8">
            
             <Image className="rounded-full w-96 h-96 shadow-lg shadow-white" src={image} alt="hikmatullah" /> 

            </div>
            <div className="py-10 mt-8 px-10 ">
            <h2 className="flex  duration-700 font-extralight text-white  text-bold">FrontEnd web Developer</h2>
            <h1 className="font-bold font-mono text-green-500 text-5xl flex ">Hikmat Ullah</h1>
            <p className="text-white text-justify">I am a front end web developer having 1 year experience , worked with international companies</p>

            <button className="mt-5 items-center group rounded-lg flex justify-center bg-gradient-to-b from-teal-400 to-teal-100 py-2 px-2">
            Profile
            <MdOutlineKeyboardArrowRight size={25}  className ='group-hover:rotate-90 duration-500 '/>
            </button>
            </div>

            
        </section>

        
    )
}