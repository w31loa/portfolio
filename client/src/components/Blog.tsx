import React, { useState } from 'react'
import BlogItem from './Blog/BlogItem'
import AddBlogModal from './Blog/AddBlogModal'

const Blog = () => {

    const data = [1,2,3,5,6,7]

    
    const[modalOpen, setModalOpen] = useState(false)

    const openModelHandler = ()=>{
        setModalOpen(true)  
    }

  return (
    <div>

<section className="news" id="blog">
    <div className="contanier">
        <div className="news_header">
            <h3 className="news_title">Блог</h3>
            <h3 className="news_text">Мои достижения и новости обо мне</h3>
        </div>
    
    
        <div className="articles">
     
            
 
                {
                    data.map(el=>(
                        <BlogItem/>
                    ))
                }
            
            
            
            
            
            
        </div> 
        
       
                        <div className="news_footer">
                            <a className="news_link  hover:cursor-pointer" onClick={openModelHandler}>Добавить запись</a>
                        </div>
                    
        
    </div>   
</section>

        {
            modalOpen&&<AddBlogModal setModalOpen={setModalOpen} modalOpen={modalOpen}/>
        }
        

    </div>
  )
}

export default Blog