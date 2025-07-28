function Skills(){
    return(
        <>
        <section className='lg:mr-[100px]'>
            <h1 className='text-[2rem] text-[17px] font-[impact] lg:text-[2.5rem]'>Web Designer</h1>
            <h2 className='font-[helvetica] text-[17px] mt-[5px] md:text-[1.5rem]'>Skills:</h2>
            <div className='flex flex-col gap-[10px] font-[verdana] hidden md:block lg:pb-[90px]'>
                <div className='flex text-[12px] lg:gap-[10px] lg:text-[1rem]'>
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                </div>
                <div className='flex text-[12px] lg:gap-[10px] lg:text-[1rem]'>
                <p>React</p>
                <p>TailwindCSS</p>
                <p>Firebase</p>
                </div>
            </div>
            <div className='text-[12px] pb-[55px] md:hidden'>
                <ul>
                    <div className='flex gap-[10px]'>
                    <li>HTML</li>
                    <li>CSS</li>
                    </div>
                    <div className='flex gap-[10px]'>
                    <li>Javascript</li>
                    <li>React</li>
                    </div>
                    <div className='flex gap-[10px]'>
                    <li>TailwindCSS</li>
                    <li>Firebase</li>
                    </div>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Skills