import { useState } from 'react'
import { useNavigate } from 'react-router'

function ForgotPassword(){

    const [email, setEmail] = useState();

    function handleForgotPassword(){

    }

    return(
        <>
        <section className='flex flex-col min-h-screen bg-white items-center justify-center'>
            <div className='flex flex-col bg-black text-white text-center min-h-[670px] lg:rounded-[10px]
            lg:mr-[300px] lg:ml-[300px] lg:pl-[40px] lg:pr-[40px]'>
                <h1 className='text-4xl mt-[70px] font-[impact] mb-[70px]'>Enter your email</h1>
                <input 
                autoComplete='off'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='Email' 
                className='border-b mt-[90px] pl-[10px] min-w-[280px] min-h-[40px] font-[helvetica] focus:outline
                lg:min-w-[390px] lg:min-h-[45px]'/>
                <button 
                onClick={handleForgotPassword}
                className='text-[20px] mt-[50px] bg-yellow-700 rounded-[10px] 
                pt-[15px] pb-[15px] font-[helvetica] cursor-pointer hover:bg-yellow-800'>Send me reset link</button>
            </div>
            </section>
        </>
    )
}

export default ForgotPassword