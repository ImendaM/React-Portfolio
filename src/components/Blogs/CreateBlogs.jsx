import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useNavigate } from 'react-router'

function CreateBlogs(){
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');

   async function createPost(){
        const postsCollectionRef = collection(db, 'blogs');
        await addDoc(postsCollectionRef, { title, summary, content });
        navigate('/admin');
        alert(('success'));
    };

    return(
        <>
        <section className='bg-white min-h-screen flex flex-col justify-center items-center'>
            <div className='bg-black flex flex-col text-white min-h-[670px] rounded-[15px] pl-[40px] pr-[40px] lg:mr-[300px] lg:ml-[300px]'>
                <h1 className='text-3xl text-center font-[impact] mt-[50px]'>Create your blog</h1>
                <input
                placeholder='Title'
                required
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                type="text" 
                className='border-b pl-[10px] mt-[45px] min-w-[390px] min-h-[40px] focus:outline'/>
                <input
                placeholder='Summary'
                required
                value={summary}
                onChange={(e) => setSummary(e.target.value)} 
                type="text" 
                className='border-b pl-[10px] mt-[45px] min-w-[390px] min-h-[40px] focus:outline'/>
                <input
                placeholder='Content'
                required
                value={content}
                onChange={(e) => setContent(e.target.value)} 
                type="text" 
                className='border-[2px] pl-[10px] pb-[100px] mt-[25px] min-w-[390px] min-h-[40px] rounded-[10px] focus:outline'/>
                <button onClick={createPost} className='text-[20px] mt-[50px] bg-yellow-700 rounded-[10px] 
                pt-[15px] pb-[15px] font-[helvetica] cursor-pointer hover:bg-yellow-800'>Post Blog</button>
            </div>
        </section>
        </>
    )
}

export default CreateBlogs