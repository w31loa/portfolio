import React from 'react'
import { RxCross1 } from 'react-icons/rx'

interface IProp{
    modalOpen: boolean,
    setModalOpen: any
}

const BlogModal = ({modalOpen , setModalOpen}:IProp) => {

    


    const closeModalHandler = ()=>{
        setModalOpen(false)
    }

  return (
    <div className={modalOpen?'modal !block' : 'modal'} id="modal_pr">
    <div className="modal_dialog">
        
            <button onClick={closeModalHandler}  className="modal_exit" type="button" data-close>
                <span className='text-black'><RxCross1 /></span>
            </button>
        
        
        <div className="modal_work ">
            <div className="relative p-12 !w-full">
                <div className="modal_work-header">
                    <h3 className="modal_work-title">НАЧАЛ ДУМАТЬ БИЗНЕСС ИДЕЮ</h3>
                        <div className="modal_work-info">
                            Категория <span className="modal_work-info-d">|</span> Учебный процесс
                        </div>
                </div>
                
                <div className="modal_work-text  ">
                    <p>Перед пользователем стояла задача разработать сайт портфолио, в которым пользователь может отобразить своё портфолио и поделиться сайтом с нанемателем. При этом сделать сайт наименее затратным и весомым.</p>
                    <p>Перед пользователем стояла задача разработать сайт портфолио, в которым пользователь может отобразить своё портфолио и поделиться сайтом с нанемателем. При этом сделать сайт наименее затратным и весомым.</p>
                    <p>Перед пользователем стояла задача разработать сайт портфолио, в которым пользователь может отобразить своё портфолио и поделиться сайтом с нанемателем. При этом сделать сайт наименее затратным и весомым.</p>
                    <p>Перед пользователем стояла задача разработать сайт портфолио, в которым пользователь может отобразить своё портфолио и поделиться сайтом с нанемателем. При этом сделать сайт наименее затратным и весомым.</p>
                    <p>Перед пользователем стояла задача разработать сайт портфолио, в которым пользователь может отобразить своё портфолио и поделиться сайтом с нанемателем. При этом сделать сайт наименее затратным и весомым.</p>
                
                </div>
                
                <div className="modal_work-footer">
                    <button className="btn  btn--thin" type="button">Удалить</button>
                </div>
                
            </div>
        </div>
     
     </div>
    
    
</div>   
  )
}

export default BlogModal