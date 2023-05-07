import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="flex items-center max-w-8xl mx-auto leading-5 mt-10" id="contact">
        <div className="text-gray-500 px-10 mt-30 mx-auto">
       
             <h1 className="p-24 text-center text-5xl text-white mb-6">
                Contact me
            </h1>
            <form 
             action="https://formspree.io/f/xnqyoqbk"
             method="POST">
                <div>
                    <input name="name" required className='mx-auto p-2 w-80 bg-transparent border-2 border-white rounded-md focus:outline-none text-white' placeholder='Enter Your name' type='text' />
                </div>
                <div className='my-5'>
                    <input name='email' required className=' mx-auto p-2 w-80 bg-transparent border-2 border-white rounded-md focus:outline-none text-white' placeholder='Enter Your Email' type='email' />
                </div>
                <div className='my-5'>
                    <textarea name='message' rows={9} required className='mx-auto p-2 w-80 bg-transparent border-2 border-white rounded-md focus:outline-none text-white' placeholder='Enter Your message...' />
                </div>

                <button className='px-6 rounded:lg bg-gradient-to-r from-white to-slate-400' type='submit' >Submit</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contact