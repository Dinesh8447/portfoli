 import React from 'react'

function Context() {
  return (
    <div name='context' className='w-full h-screen bg-[#0a192f] md:py-3 flex items-center justify-center p-4'>
        <form action='' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600 text-gray-300'>Context</p>
                <p className='text-gray-300 py-4'>//Submit the form below or shoot me an email-aaaa2022@gmail.com </p>
            </div>
            <input className='p-2 bg-slate-300 my-4' type='text' placeholder='name' name='name'/>
            <input className='p-2 bg-slate-300 my-4 ' type='email' placeholder='email' name='email'/>
        <textarea className=' bg-slate-300 p-2' placeholder='Message' rows={10}></textarea>
        <button className='text-white border-2 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center'>let's collabarate</button>
        </form>
      
    </div>
  )
}

export default Context
