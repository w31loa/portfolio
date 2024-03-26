import React, { useState } from 'react'
import WorksItem from './Works/WorksItem'
import AddWorksModal from './Works/AddWorksModal'

const Works = () => {

    const data = [1,2,3,4,5]

    const[modalOpen, setModalOpen] = useState(false)

    const openModelHandler = ()=>{
        setModalOpen(true)  
    }

  return (
    <div>

<div className="works" id="work_1">
        <div className="contanier">
            <div className="works_nav">
                <a className="works_nav_link" href="#" data-filter="all">Все</a>
                <a className="works_nav_link" href="#" data-filter="programm">Программы</a>
                <a className="works_nav_link" href="#" data-filter="web">Веб-сайт</a>
                <a className="works_nav_link" href="#" data-filter="inter">Интерактив</a>
            </div>
            
            
            <div className="portfolio" id="portfolio">
        

                {
                    data.map(el=>(
                        <WorksItem key={el}/>
                    ))
                }
    

                
          
               
                
                    
            </div> 
            
            <div className="news_footer">
                <a onClick={openModelHandler} className="news_link hover:cursor-pointer" >Добавить работу</a>
            </div>
            
        </div>
        {
            modalOpen&&<AddWorksModal setModalOpen={setModalOpen} modalOpen={modalOpen}/>
        }
        
    </div>

    </div>
  )
}

export default Works