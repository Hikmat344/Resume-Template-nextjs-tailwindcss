import React from 'react';
import {AiOutlineSend , AiFillMediumSquare} from "react-icons/ai";
import { MdOutlineAlternateEmail} from "react-icons/md";
import {GrLocation} from "react-icons/gr";
import {BsWhatsapp} from "react-icons/bs";
import Linkedin from './shared/Linkedin';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col items-center max-w-8xl mx-auto leading-5 mt-10" id="contact">
  <h1 className="p-5 text-5xl text-center text-red-900 font-bold">
    GET IN TOUCH
  </h1>
  <div className="flex flex-col items-center justify-center">
    <form
      action="https://formspree.io/f/xnqyoqbk"
      method="POST"
      className="flex flex-col items-center space-y-3"
    >
      <input
        name="name"
        required
        className="p-2 bg-transparent border-4 border-red-900 rounded-md focus:outline-none text-white w-80"
        placeholder="Enter Your name"
        type="text"
      />
      <input
        name="email"
        required
        className="p-2 bg-transparent border-4 border-red-900 rounded-md focus:outline-none text-white w-80"
        placeholder="Enter Your Email"
        type="email"
      />
      <textarea
        name="message"
        rows={9}
        required
        className="p-2 bg-transparent border-4 border-red-900 rounded-md focus:outline-none text-white w-80"
        placeholder="Enter Your message..."
      />
      <button className="flex items-center group rounded-lg justify-start bg-red-900 py-2 px-2 text-black cursor-pointer hover:scale-105 ease-in hover:bg-gray-300 font-bold" type="submit">
        Send
        <AiOutlineSend size={25} className="group-hover:scale-100 duration-500 mx-3" />
      </button>
    </form>
    </div>
    <div className="flex flex-col items-center space-y-5 mt-10">
      <div className="flex flex-row items-center text-black">
        <MdOutlineAlternateEmail className="w-11 h-11 bg-red-900 rounded-full cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-gray-300 shadow-lg shadow-red-900" />
        <div className="text-white ml-4">hikmatcse1919@gmail.com</div>
      </div>
      <div className="flex flex-row items-center text-black">
        <GrLocation className="w-11 h-11 bg-red-900 rounded-full cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-gray-300 shadow-lg shadow-red-900" />
        <div className="text-white ml-4">Peshawar Pakistan</div>
      </div>
      <div className="flex flex-row items-center text-black">
        <BsWhatsapp className="w-11 h-11 bg-red-900 rounded-full cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-gray-300 shadow-lg shadow-red-900" />
        <div className="text-white ml-4">+923446474475</div>
      </div>
      <div className="flex justify-center space-x-4 mt-5">
        <Linkedin url="https://www.linkedin.com/in/hikmat-ullah-b284081b9/">
          <FaLinkedin className="text-white text-3xl cursor-pointer hover:text-blue-400" />
        </Linkedin>
    </div>
                <div className='mx-1 items-center'>
                            <Linkedin url="https://www.facebook.com/hikmat.ullah.1694059">

                                <FaFacebook /> 

                            </Linkedin>
                            </div>
                            <div className='mx-1 items-center'>
                            <Linkedin url="https://www.github.com/Hikmee/">

                                <FaGithub /> 
                                
                            </Linkedin>
                            </div>
                            <div className='mx-1 items-center'>
                            <Linkedin url="https://www.twitter.com">

                                <FaTwitter /> 
                                
                            </Linkedin>
                            </div>
                            <div className='mx-1 items-center'>
                            <Linkedin url="https://www.youtube.com/@hikmatullah9353">

                                <FaYoutube /> 
                                
                            </Linkedin>
                            </div>
                            <div className='mx-1 items-center'>
                            <Linkedin url="https://medium.com/@khanhikmee344">

                                <AiFillMediumSquare /> 
                                
                            </Linkedin>
                            </div>
        <div>
            <p className='flex px-10 justify-text justify-end text-white w-[100%] items-center'>
                Created by  <a className='text-blue-400 underline' href='https://hikmeedev.vercel.app/'>    Hikmat Ullah</a>
            </p>
        </div>
    </div>
</div>
  )
}

export default Contact