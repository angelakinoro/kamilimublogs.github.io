import React from 'react'
import { useState } from 'react'
import { blog_data } from '/Assets/assets'
import BlogItem from '/Components/BlogItem'




const BlogList = () => {

        const [menu, setMenu] = useState("All");

    return(
        <div>
            <div className='flex justify-center gap-6 my-10'>
                <button onClick={() => setMenu('All')} className={menu==="All"?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
                <button onClick={() => setMenu('month 3')} className={menu==="month 3"?'bg-black text-white py-1 px-4 rounded-sm':""}>month 3</button>
                <button onClick={() => setMenu('month 4')} className={menu==="month 4"?'bg-black text-white py-1 px-4 rounded-sm':""}>month 4</button>
                <button onClick={() => setMenu('month 5')} className={menu==="month 5"?'bg-black text-white py-1 px-4 rounded-sm':""} >month 5</button>
                <button onClick={() => setMenu('month 6')} className={menu==="month 6"?'bg-black text-white py-1 px-4 rounded-sm':""} >month 6</button>
                <button onClick={() => setMenu('month 7')} className={menu==="month 7"?'bg-black text-white py-1 px-4 rounded-sm':""}>month 7</button>
            </div>

            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 '>
                {blog_data.filter((item) => menu==="All"?true:item.category===menu).map((item,index) => {
                    return <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category}/>
                })}
            </div>
        </div>
    )
}

export default BlogList