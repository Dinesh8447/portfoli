import html from '../assets/html-5-my.png'
import css from '../assets/css-3-my.png'
import tailwind from '../assets/tailwind.png'
import js from '../assets/js-my.png'
import react from '../assets/react.png'
import nodejs from '../assets/node.png'
import mongodb from '../assets/mongo.png'
import firebase from '../assets/firebase.png'
import github from '../assets/github.png'
export default function Skills() {
  return (
    <div name='skills' className='w-full h-screen text-gray-200  bg-[#0a192f] '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'>these are technologi i've worked with </p>
                </div>
                <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8 '>
                    <div className='shadow-md shadow-[#061] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={html} alt='HTML'/>
                        <p className='my-4'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#061] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={css} alt='HTML'/>
                        <p className='my-4'>css</p>
                    </div>

                    <div className='shadow-md shadow-[#061] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt='HTML'/>
                        <p className='my-4'>Tailwind css</p>
                    </div>

                    <div className='shadow-md shadow-[#061] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={js} alt='HTML'/>
                        <p className='my-4'>JavaScript</p>
                    </div>

                    <div className='shadow-md shadow-[#061] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={react} alt='HTML'/>
                        <p className='my-4'>ReactJs</p>
                    </div>
                    <div className='shadow-md shadow-[#061] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={nodejs} alt='HTML'/>
                        <p className='my-4'>NodeJs</p>
                    </div>
                    <div className='shadow-md shadow-[#061] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={mongodb} alt='HTML'/>
                        <p className='my-4'>mongoDB</p>
                    </div>
                    <div className='shadow-md shadow-[#061] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={firebase} alt='HTML'/>
                        <p className='my-4'>FireBase</p>
                    </div>
                    <div className='shadow-md shadow-[#061] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={github} alt='HTML'/>
                        <p className='my-4'>Github</p>
                    </div>
                </div>
        </div>
      
    </div>
  )
}
