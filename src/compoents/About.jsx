import React from 'react'

function About() {
  return (
    <div name="about" className=' w-full h-screen bg-[#0a192f] text-gray-600'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div name="container"  className='max-w-[1640px] w-full  grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-6 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-400'>About</p>
                    </div>
                     </div>
                    <div name="container"  className='max-w-[1000px] w-full   sm:grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold mb-4 '>
                        <p>hi i'm Dinesh nice to meet you please look around</p>
                    </div>
                    <div>
                        <p className='font-bold'>I am passionate about building excellent software that improves
                          the lives of those around me.I specialize in creating software for client
                          ranging from individuals and small-bussineses all the way to large enterprise 
                          corporations What would you do if you had a software expert available at your
                          fingertips?
                        </p>
                    </div>
                    </div>
            </div>
      
    </div>
  )
}

export default About
