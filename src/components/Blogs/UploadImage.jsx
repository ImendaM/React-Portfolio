import { useState } from 'react'
import { storage, db } from '../firebase-config'
import { ref, uploadBytes } from 'firebase/storage'

function UploadImage(){
    const [file, setFile] = useState(null);

    async function uploadFile(){
        if (file ==  null) return;
        const storageRef = ref(storage, `images/${file}`);
        window.localStorage.setItem('file', file);
        uploadBytes(storageRef, file).then(() => {
            alert('File uploaded successfully');
        })
    }

    return(
        <>
        <section className='flex flex-col min-h-screen bg-white items-center justify-center'>
            <div className='flex flex-col bg-black text-white text-center min-h-[670px] lg:rounded-[10px]
            lg:mr-[300px] lg:ml-[300px] lg:pl-[40px] lg:pr-[40px]'>
                <h1 className='text-4xl mt-[70px] font-[impact] mb-[70px]'>Upload an image</h1>
                <input 
                onChange={(e) => setFile(e.target.files[0])}
                type="file" 
                />
                <button
                onClick={uploadFile}
                className='text-[20px] mt-[50px] bg-yellow-700 rounded-[10px] 
                pt-[15px] pb-[15px] font-[helvetica] cursor-pointer hover:bg-yellow-800'>Upload File</button>
            </div>
            </section>
        </>
    )
}

export default UploadImage