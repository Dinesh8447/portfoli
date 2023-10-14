import { HiArrowCircleRight} from "react-icons/hi";

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd]'>Dinesh</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a FullStack Developer</h2>
        <p className='text-[#717686] py-4 max-w-[700px]'>I'm a full-stack developer specializing on building 
        (and occasionally designing) exceptional digital experiences Current.I'm focused on building responsive
        full-stack web application .
       
         .</p>
         <div >
            <button className='text-white group flex border-2 px-6 py-3 ml-1 items-center hover:bg-purple-600 hover:border-purple-600 duration-500'>
              view work 
            <span className='ml-3 group-hover:rotate-90 duration-200'><HiArrowCircleRight size={20}/></span>
            </button>
         </div>

      </div>
    </div>
  )
}

export default Home
