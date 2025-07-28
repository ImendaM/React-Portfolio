import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase-config'

function Blogs(){
    const navigate = useNavigate();

    const [blogList, setBlogList] = useState([]);
    const blogCollectionRef = collection(db, 'blogs');

    useEffect(() => {
        const getBlogs = async () => {
            const data = await getDocs(blogCollectionRef);
            setBlogList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log(blogList)
        }
        getBlogs();
    }, []);

    return(
        <>
        <section className='bg-white min-h-screen'>
            <div>
            <h1 className='text-center text-2xl mt-[50px] font-[helvetica]'>Here are some web development topics that I find interesting.</h1>
            <div className='flex justify-center mt-[100px] gap-[10px]'>
            {blogList.map((blog) => {
                blogList.sort((a,b) => a.order - b.order)

                    return(
                        <button 
                        onClick={() => {window.localStorage.setItem('title', blog.title); navigate('/blogpage')}}
                        className='bg-black text-white min-w-[350px] rounded-[10px] cursor-pointer'>
                            <h1 className='text-2xl font-[helvetica]'>{blog.title}</h1>
                            <h2 className='text-1xl font-[verdana] pt-[50px] pb-[50px]'>{blog.summary}</h2>
                        </button>
                    )
            })}
            </div>
            </div>
        </section>
        </>
    )
}

export default Blogs