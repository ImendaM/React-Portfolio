import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { db } from '../firebase-config'
import { getDocs, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router'

function BlogPage(){

    const blogTitle = window.localStorage.getItem('title');
    const [blogList, setBlogList] = useState([]);
    const blogCollectionRef = collection(db, 'blogs');

    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'blogs'));
                const blog = [];
                querySnapshot.forEach((doc) => {
                    blog.push(doc.data());
                });

                const matched = blog.find((b) => b.title === blogTitle);
                if (!matched){
                    alert('Blog not found');
                    navigate('/');
                }  else {
                    setBlog(matched);
                }
            } catch (error) {
                console.error('Failed to fetch blog', error);
                alert('Error loading blog');
            }
        };

        fetchBlog();
    }, [blogTitle, navigate])

    if(!blog) return <p className='text-black'>Loading blog...</p>;

    return(
        <>
        <section className='bg-white min-h-screen flex flex-col justify-center items-center'>
            <div className='bg-black flex flex-col min-h-[700px] rounded-[10px] lg:pl-[500px] lg:pr-[500px]'>
                <h1 className='text-center text-3xl text-white font-[impact] pt-[50px]'>{blog.title}</h1>
                {blog.content && (
                    <p className='text-center text-white font-[helvetica] mt-[50px]'>{blog.content}</p>
                )}
            </div>
        </section>
        </>
    )
}

export default BlogPage