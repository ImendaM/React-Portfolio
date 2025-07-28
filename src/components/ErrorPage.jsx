import { Link } from 'react-router'

function ErrorPage(){
    return(
        <>
          <section className='flex flex-col min-h-screen bg-white items-center justify-center'>
            <div className='flex flex-col bg-black text-white text-center min-h-[670px] lg:rounded-[10px]
            lg:mr-[300px] lg:ml-[300px] lg:pl-[40px] lg:pr-[40px]'>
                <h1 className='text-4xl mt-[70px] font-[impact] mb-[70px]'>404 Not Found</h1>
                <Link to='/'
                className='text-[20px] mt-[50px] bg-yellow-700 rounded-[10px] 
                pt-[15px] pb-[15px] font-[helvetica] cursor-pointer hover:bg-yellow-800'>Return Home</Link>
            </div>
            </section>
        </>
    )
}

export default ErrorPage