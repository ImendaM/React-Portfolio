function Personal(){
    return(
        <>
        <section className='lg:ml-[100px]'>
            <h1 className='text-[17px] font-[impact] lg:text-[2.5rem]'>John Doe</h1>
            <h2 className='font-[helvetica] text-[12px] lg:text-[1rem]'>I enjoy integrating <br className='block md:block' /> different UIs <br /> that resonate with users.</h2>
            <div className='flex '>
            <img className='w-[50px] cursor-pointer lg:w-[100px]' src="/Github.png" alt="Github Logo" />
            <img className='w-[50px] cursor-pointer lg:w-[100px]' src="/Linkedin.png" alt="Linkedin Logo" />
            </div>
        </section>
        </>
    )
}

export default Personal