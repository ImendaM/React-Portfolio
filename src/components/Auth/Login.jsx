import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';

function Login(){
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [authenticating, setAuthenticating] = useState(false);

    async function handleLogin(){
        setAuthenticating(true);
        setError('');

        signInWithEmailAndPassword(auth, email, password)
        .then(navigate('/admin'))
        .catch((error) => {
            setError(error.message);
            setAuthenticating(false);
        });
    };


    return(
        <>
        <section className='flex flex-col min-h-screen bg-white items-center justify-center'>
            <div className='flex flex-col bg-black text-white text-center min-h-[670px] lg:rounded-[10px]
            lg:mr-[300px] lg:ml-[300px] lg:pl-[40px] lg:pr-[40px]'>
                <h1 className='text-4xl mt-[70px] font-[impact]'>Login</h1>
                <input 
                autoComplete='off'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='Email' 
                className='border-b mt-[90px] pl-[10px] min-w-[280px] min-h-[40px] font-[helvetica] focus:outline
                lg:min-w-[390px] lg:min-h-[45px]'/>
                <input
                autoComplete='off'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password' 
                placeholder='Password' 
                className='border-b mt-[45px] pl-[10px] min-w-[280px] min-h-[40px] font-[helvetica] focus:outline
                lg:min-w-[390px] lg:min-h-[45px]'/>
                <button 
                onClick={handleLogin}
                className='text-[20px] mt-[50px] bg-yellow-700 rounded-[10px] 
                pt-[15px] pb-[15px] font-[helvetica] cursor-pointer hover:bg-yellow-800'>Login</button>
                <Link to='/forgotpassword' className='mt-[50px] hover:text-gray-200'>Forgot Password</Link>
            </div>
            </section>
        </>
    )
}

export default Login