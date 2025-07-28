import { useState, useEffect } from 'react'
import { getDocs, collection, doc, updateDoc, query, where, deleteDoc } from 'firebase/firestore'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { useNavigate } from 'react-router'
import { db, storage } from './firebase-config'

function Admin(){
     const navigate = useNavigate();

     // Variables for blog content
     const [title, setTitle] = useState('');
     const [summary, setSummary] = useState('');
     const [content, setContent] = useState('');

     // Variables for storing blogs from Firebase
    const [blogList, setBlogList] = useState([]);
    const blogCollectionRef = collection(db, 'blogs');

    //Variables for storing file url from Firebase
    const [fileUrl, setFileUrl] = useState(null);

    // Variables for controlling visibility of items
    const [visibility, setVisibility] = useState('hidden');

    function toggleVisibility(){
        if (visibility === 'hidden') {
            setVisibility('block')
        } else {
            setVisibility('hidden')
        }
    };

    async function updateDocument(){
       try {
    const blogQuery = query(collection(db, 'blogs'), where('title', '==', title));
    const querySnapshot = await getDocs(blogQuery);

    if (querySnapshot.empty) {
      alert('No document found with that title');
      return;
    }

    // Assuming titles are unique, get the first matching doc
    const docRef = doc(db, 'blogs', querySnapshot.docs[0].id);

    await updateDoc(docRef, {
      title,
      summary,
      content
    });

    alert('Successfully updated document.');
    await getBlogs();
  } catch (error) {
    alert(error.message);
  }
    };

    async function deleteDocument(blogTitle){
        try {
            const blogQuery = query(collection(db, 'blogs'), where('title', '==', blogTitle));
            const querySnapshot = await getDocs(blogQuery);

            if (querySnapshot.empty) {
                alert('No document found with that title');
                return;
            }

            const docRef = doc(db, 'blogs', querySnapshot.docs[0].id);

            await deleteDoc(docRef);

            alert('Successfully deleted the document');
            await getBlogs();
        } catch (error) {
            alert(error.message);
        }
    }

     const getBlogs = async () => {
            const data = await getDocs(blogCollectionRef);
            setBlogList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

    const getFile = async () => {
        try {
           // const path = 'images/Getting Started.mp4';
            const fileRef = ref(storage, 'images/day1programmer logo.png');
            const url = await getDownloadURL(fileRef);
            setFileUrl(url);
      } catch (error) {
                console.error('Failed to load video:', error.message);
                alert('Failed to load video:', error.message);
            }                 
    }

    useEffect(() => {
        getBlogs();
        getFile();
    }, []);

    return(
        <>
         <section className='bg-white min-h-screen'>
            <div className='flex justify-end'>
            <button onClick={() => navigate('/createblog')} 
            className='font-[verdana] text-2xl border-b-[3px] mr-[10px] mt-[10px] cursor-pointer 
            hover:text-gray-700 hover:text-[25px]'>Create Blog</button>
            <button onClick={() => navigate('/uploadimage')} 
            className='font-[verdana] text-2xl border-b-[3px] mr-[10px] mt-[10px] cursor-pointer 
            hover:text-gray-700 hover:text-[25px]'>Upload Image</button>
            </div>
            <div>
            {fileUrl && (
                <img src={fileUrl} alt=""  className='w-[200px] ml-auto mr-auto'/>
            )}
            </div>
            <div>
            <h1 className='text-center text-2xl mt-[50px] font-[helvetica]'>Here are some web development topics that I find interesting</h1>
            <div className='flex justify-center mt-[100px] gap-[10px]'>
            {blogList.map((blog) => {

                    return(
                        <div>
                            <div className='mt-[10px] mb-[5px] flex justify-between rounded-[10px] p-[5px] bg-gray-900'>
                                <button 
                                onClick={() => {
                                   const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
                                   if (confirmDelete) {
                                    deleteDocument(blog.title);
                                   }
                                }} className='ml-[5px] p-[5px] rounded-[10px] 
                               cursor-pointer text-red-800 bg-red-100'>Delete</button>
                                <button 
                                onClick={() => {
                                    setTitle(blog.title); 
                                    setSummary(blog.summary); 
                                    setContent(blog.content); 
                                    toggleVisibility();}} 
                                    className='mr-[5px] p-[5px] rounded-[10px] 
                               cursor-pointer text-green-800 bg-green-100'>Update</button>
                            </div>
                        <div 
                        onClick={() => {window.localStorage.setItem('title', blog.title); navigate('/blogpage')}}
                        className='bg-black flex flex-col text-center text-white min-w-[350px] min-h-[250px] rounded-[10px] cursor-pointer'>
                            <h1 className='text-2xl font-[helvetica]'>{blog.title}</h1>
                            <h2 className='text-1xl font-[verdana] pt-[50px] pb-[50px]'>{blog.summary}</h2>
                        </div>
                        </div>
                    )
            })}
            </div>
            <section className={`flex flex-col min-h-screen justify-center items-center ${visibility} inset-0 fixed`}>
              <div className='bg-black flex flex-col text-white min-h-[670px] rounded-[15px] pl-[40px] pr-[40px] lg:mr-[300px] lg:ml-[300px]'>
                <h1 className='text-3xl text-center font-[impact] mt-[50px]'>Update your blog</h1>
                <input
                required
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                type="text" 
                className='border-b pl-[10px] mt-[45px] min-w-[390px] min-h-[40px] focus:outline'/>
                <input
                required
                value={summary}
                onChange={(e) => setSummary(e.target.value)} 
                type="text" 
                className='border-b pl-[10px] mt-[45px] min-w-[390px] min-h-[40px] focus:outline'/>
                <input
                required
                value={content}
                onChange={(e) => setContent(e.target.value)} 
                type="text" 
                className='border-[2px] pl-[10px] pb-[100px] mt-[25px] min-w-[390px] min-h-[40px] rounded-[10px] focus:outline'/>
                <button onClick={() => {updateDocument(); toggleVisibility();}} className='text-[20px] mt-[50px] bg-yellow-700 rounded-[10px] 
                pt-[15px] pb-[15px] font-[helvetica] cursor-pointer hover:bg-yellow-800'>Update Blog</button>
                <button onClick={() => {toggleVisibility()}} className='text-[20px] mt-[50px] bg-red-700 rounded-[10px] 
                pt-[15px] pb-[15px] font-[helvetica] cursor-pointer hover:bg-red-800'>Cancel Update Blog</button>
            </div>
            </section>
            </div>
        </section>
        </>
    )
}

export default Admin;