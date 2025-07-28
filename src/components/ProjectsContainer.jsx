function Projects(){
    return(
        <>
        <section className='flex flex-col justify-between gap-[15px] mr-[10px] ml-[10px] mt-[30px] lg:mr-auto lg:ml-auto lg:mt-[100px] lg:flex-row'>
            <div className=' border-[5px] rounded-[10px] p-[5px] lg:min-w-[400px] lg:ml-[100px]'>
            <h1 className='font-[helvetica] text-[1.5rem]'>Online Store</h1>
            <p className='font-[verdana]'>This is a basic online store project.</p>
            <div className='flex justify-center'>
                <img src="../../public/Github.png" alt="" className='w-[60px] lg:w-[100px]' />
                <img src="../../public/Arrow.png" alt="" className='w-[40px] self-center cursor-pointer hover:w-[50px] lg:hover:w-[70px] lg:hover:h-[60px] lg:w-[50px] lg:h-[50px]' />
            </div>
            </div>
            <div className='border-[5px] rounded-[10px] p-[5px] lg:min-w-[400px]'>
                <h1 className='font-[helvetica] text-[1.5rem]'>Project Management</h1>
                <p className='font-[verdana]'>This helps users manage their projects.</p>
                <div className='flex justify-center'>
                    <img src="../../public/Github.png" alt="" className='w-[60px] lg:w-[100px]' />
                    <img src="../../public/Arrow.png" alt="" className='w-[40px] self-center cursor-pointer hover:w-[50px] lg:hover:w-[70px] lg:hover:h-[60px] lg:w-[50px] lg:h-[50px]' />
                </div>
            </div>
            <div className=' border-[5px] rounded-[10px] p-[5px] lg:min-w-[400px] lg:mr-[100px]'>
                <h1 className='font-[helvetica] text-[1.5rem]'>Personal Portfolio.</h1>
                <p className='font-[verdana]'>This is a description of my personal project.</p>
                <div className='flex justify-center'>
                <img src="../../Github.png" alt="" className='w-[60px] lg:w-[100px]' />
                <img src="../../public/Arrow.png" alt="" className='w-[40px] self-center cursor-pointer hover:w-[50px] lg:hover:w-[70px] lg:hover:h-[60px] lg:w-[50px] lg:h-[50px]' />
                </div>
            </div>
        </section>
        </>
    )
}

export default Projects