import React, { useState } from 'react'
import BlogModal from './BlogModal'

const BlogItem = () => {

    const[modalOpen, setModalOpen] = useState(false)

    const openModelHandler = ()=>{
        setModalOpen(true)  
    }

  return (
               <div className="articles_col">
            
            <div className="articles_item">
                    <div className="articles_header">
                        <time className="articles_date">22 марта</time>
                        
                        <a >
                            <img className="articles_photo" src="https://placehold.it/370x250" alt=""/>
                        </a>
                    </div>
                <div className="articles_content">
                    
                    <h4 className="articles_title"> 
                        <a >Своевременно выполнил практику</a>
                    </h4>
                    
                    <div className="articles_cat">Учебный процесс</div>
                    <div className="articles_text">
                    <p>Ученик УК ОГУ своеверменно выполнил практику. Такого от него неожидал НИКТО. Это был шок для всех учителей и руководителей практики. Чем ещё сможет удивить нас Максим?</p>
                    </div>
                
                </div>
                <a className="btn  btn--sm" onClick={openModelHandler}>Читать больше</a>
            </div>
            
                {
                    modalOpen&&<BlogModal setModalOpen={setModalOpen} modalOpen={modalOpen}/>
                }
            </div>
    
  )
}

export default BlogItem