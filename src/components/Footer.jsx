import ProjectsContainer from './ProjectsContainer'

function Footer(){
    return(
        <>
        <section className='text-center pb-[100px]'>
        <h1 className='text-[20px] mt-[30px] font-[impact] lg:text-[2rem]'>Projects</h1>
        <ProjectsContainer/>
        </section>
        </>
    )
}

export default Footer