
import react from "react";

export default function About(){
return (
    <div className="flex items-center">
        <div className="flex items-center max-w-full mx-auto leading-5" id="about">
            <div className="text-white-500 px-10 mt-10">
                <h1 className="text-center text-5xl text-white mb-10">
                    About Me
                    {/* <hr className="flex items-center justify-center w-48 h-1 mt-4 bg-white border-5 rounded  dark:bg-gray-700" /> */}
                </h1>
                <p className="max-w-5xl flex text-slate-300 text-justify">
                    Dedicated and reliable Computer System Engineering professional and having 1 year of working experience 
                    as a web developer. I have worked on different freelanceing platforms as well as with some international companies.
                    

                </p>
            </div>
        </div>
    </div>
)

}