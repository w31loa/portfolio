import React from 'react'
import { RxCross1 } from 'react-icons/rx'

interface IProp{
    modalOpen: boolean,
    setModalOpen: any
}

const WorksModal = ({modalOpen , setModalOpen}:IProp) => {

    const closeModalHandler = ()=>{
        setModalOpen(false)
        // console.log(modalOpen)
    }

  return (
    <div className={modalOpen?'modal !block' : 'modal'} id="modal_pr">
    <div className="modal_dialog">
        
            <button onClick={closeModalHandler}  className="modal_exit" type="button" data-close>
                <span className='text-black'><RxCross1 /></span>
            </button>
        
        
        <div className="modal_work">
            <div className="modal_work-preview">
                <img className="modal_work-photo" src="https://placehold.it/790x780" alt=""/>
            </div>
            <div className="modal_work-content">
                <div className="modal_work-header">
                    <h3 className="modal_work-title">Название проекта</h3>
                        <div className="modal_work-info">
                            Категоря <span className="modal_work-info-d">|</span> 2024
                        </div>
                </div>
                
                <div className="modal_work-client">
                    <div className="modal_work-client-title">Клиент:</div>
                    <div className="modal_work-client-company">"ОАО" Максус</div>
                </div>
                
                <div className="modal_work-text">
                    <p>Перед пользователем стояла задача разработать сайт портфолио, в которым пользователь может отобразить своё портфолио и поделиться сайтом с нанемателем. При этом сделать сайт наименее затратным и весомым.</p>
                    <p>Перед пользователем стояла задача разработать сайт портфолио, в которым пользователь может отобразить своё портфолио и поделиться сайтом с нанемателем. При этом сделать сайт наименее затратным и весомым.</p>
                    
                </div>
                
                <div className="modal_work-footer">
                    <button className="btn  btn--thin" type="button">Редактировать</button>
                    <button className="btn  btn--thin" type="button">Удалить</button>
                </div>
                
            </div>
        </div>
     
     </div>
    
    
</div>   
  )
}

export default WorksModal