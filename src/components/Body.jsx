import Personal from './Personal'
import MyImage from './MyImage'
import Skills from './Skills'

function Body(){
    return(
        <>
        <section className='flex bg-red justify-between items-center mt-[50px] mr-[10px] ml-[10px] lg:m-[100px]'>
        <Personal/>
        <MyImage/>
        <Skills/>
        </section>
        </>
    )
}

export default Body