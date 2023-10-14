import fooddeliveryapp from '../assets/projects/food_deliver_app.png'

function Work() {
    return (
        
        <div name='projects' className='w-full md:h-screen  text-gray-300  bg-[#0a192f] '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div name="container-1" className='pb-4'>
                    <p className='text-4xl font-bold border-b-4 inline text-gray-300 border-pink-400' >Projects</p>
                    <p className='py-6'>check out my recent project</p>
                </div>

                {/* container */}
                <div name="container-2" className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* grid-item-1 */}
                    <div style={{ backgroundImage: `url(${fooddeliveryapp})`}} name="card" className='shadow-lg shadow-[#06f] group container flex justify-center object-cover items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className="opacity-0 group-hover:opacity-100 duration-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React-js-Application
                            </span>
                            <div className="">
                                <a href='#' >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">demo</button>
                                </a>
                                <a href='#' >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid item-2 */}
                    <div style={{ backgroundImage: 'url();' }} name="card" className='shadow-lg shadow-[#06f] group container flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className="opacity-0 group-hover:opacity-100 duration-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React-js-Application
                            </span>
                            <div className="">
                                <a href='#' >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">demo</button>
                                </a>
                                <a href='#' >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid-item-3 */}
                    <div style={{backgroundImage:'url();'}} name="card" className='shadow-lg shadow-[#06f] group container flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className="opacity-0 group-hover:opacity-100 duration-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React-js-Application
                            </span>
                            <div className="">
                                <a href='#' >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">demo</button>
                                </a>
                                <a href='#' >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                  

                </div>
            </div>
        </div>

    )
}

export default Work
