import Image from "next/image";
import khan from "@/public/Images/portfolio/khan.jpg"


export default function Portfolio(){
    return(
        <div>
            <div className="flex items-center max-w-8xl mx-auto leading-5 mt-10" id="portfolio">
                <div className="text-gray-500 px-10 mt-30 mx-auto">
                   
                    <h1 className="text-center text-5xl text-white mb-10">
                        Portfolio
                    </h1>
                </div>
                {/* cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-24 mx-auto w-full ">
                <div className="shadow-lg shadow-white h-60 hover:scale-120 duration-100">
                    <div>
                        <Image  className="rounded-t-lg w-80 h-60" src={khan} alt="website" />
                        
                    </div>
                    <div className="flex justify-between px-5 text-white">
                        <button className="p-5 hover:scale-50 duration-100">
                            <a href="https://khanshahzada.com/" >Check Out</a>
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}