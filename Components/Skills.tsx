import Image from 'next/image'
import React from 'react'


// import java from  "../public/Images/skill/javas.png"
// import next from  "../public/Images/skill/nextjs.png"
// import tlcss from  "../public/Images/skill/tlcss.jpg"
// import node from  "../public/Images/skill/node.png"
// import chakra from  "../public/Images/skill/chakra.jpg"
// import type from  "../public/Images/skill/type.png"

const Skills = () => {
  return (
    <div className="flex items-center max-w-8xl mx-auto leading-5 mt-10" id="skills">
        <div className="text-gray-500 px-10 mt-30 mx-auto">
       
             <h1 className="p-24 text-center text-5xl text-red-900 font-bold mb-10"> SKILLS </h1>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-20'>
                {/* skill1 */}
                <div className='p-1'>
                    <Image className='w-20 h-20 object-contain hover:-translate-y-3 duration-700 shadow-lg shadow-red-900' src={"/Images/skill/html.png"} alt='html icon'   />
                    <p className='text-red-900 text-bold text-center mt-4'>Html</p>
                    {/* end */}
                </div>
                {/* skill2 */}
                <div className='p-1'>
                    <Image className='w-20 h-20 object-contain hover:-translate-y-3 duration-700 shadow-lg shadow-red-900' src={"/Images/skill/css.png"} alt='css icon'   />
                    <p className='text-red-900 text-center  mt-4'>Css</p>
                    {/* end */}
                </div>
                {/* skill3 */}
                <div className='p-1'>
                    <Image className='w-20 h-20 object-contain hover:-translate-y-3 duration-700 sshadow-lg shadow-red-900' src={"/Images/skill/javas.png"} alt='java icon'   />
                    <p className='text-red-900 text-center text-bold mt-4'>java script</p>
                    {/* end */}
                </div>
                {/* skill4 */}
                <div className='p-1'>
                    <Image className='w-20 h-20 object-contain hover:-translate-y-3 duration-700 shadow-lg shadow-red-900' src={"/Images/skill/nextjs.png"} alt='nextjs icon'   />
                    <p className='text-red-900 text-center mt-4'>Nextjs 13</p>
                    {/* end */}
                </div>
                {/* skill5 */}
                <div className='p-1'>
                    <Image className='w-20 h-20 object-contain hover:-translate-y-3 duration-700 shadow-lg shadow-red-900' src={"/Images/skill/tlcss.jpg"} alt='tailwindcss icon'   />
                    <p className='text-red-900 text-center mt-4'>tailwindcss</p>
                    {/* end */}
                </div>
                {/* skill5 */}
                <div className='p-1'>
                    <Image className='w-20 h-20 object-contain hover:-translate-y-3 duration-700 shadow-lg shadow-red-900' src={"/Images/skill/node.png"} alt='nodejs icon'   />
                    <p className='text-red-900 text-center mt-4'>Nodejs</p>
                    {/* end */}
                </div>
                {/* skill5 */}
                <div className='p-1'>
                    <Image className='w-20 h-20 object-contain hover:-translate-y-3 duration-700 shadow-lg shadow-red-900' src={"/Images/skill/type.png"} alt='typescript icon'   />
                    <p className='text-red-900 text-center mt-4'>Type Script</p>
                    {/* end */}
                </div>
                {/* skill5 */}
                <div className='p-1'>
                    <Image className='w-20 h-20 object-contain hover:-translate-y-3 duration-700 shadow-lg shadow-red-900' src={"/Images/skill/chakra.jpg"} alt='chakraui icon'   />
                    <p className='text-red-900 text-center mt-4'>Chakra</p>
                    {/* end */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills