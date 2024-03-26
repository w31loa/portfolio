import React, { useState } from 'react'
import WorksModal from './WorksModal'

const WorksItem = () => {

    
    const[modalOpen, setModalOpen] = useState(false)

    const openModelHandler = ()=>{
        setModalOpen(true)  
    }

    console.log(modalOpen)
  return (
    <div >
                <div onClick={openModelHandler} className="portfolio_col" data-cat="all" data-modal="#modal_pr">
                    
                    <div className="work">
                        <img className="work_images" src="https://placehold.it/370x300" alt=""/> 
                    
                        <div className="work_content"> 
                            <div className="work_cat">Категория: Все</div>
                            <div className="work_title">Название проекта 
                            <time className="work_date">2024</time>
                            </div>
                            
                        </div>
                            
                    </div>
                </div>

                {
                    modalOpen&&<WorksModal setModalOpen={setModalOpen} modalOpen={modalOpen}/>
                }
    </div>
  )
}

export default WorksItem