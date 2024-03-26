import React from 'react'
import { RxCross1 } from 'react-icons/rx'

interface IProp{
    modalOpen: boolean,
    setModalOpen: any
}

const AddRewardsModal = ({modalOpen , setModalOpen}:IProp) => {
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
        
        
        <div className="modal_work flex justify-center text-black ">
            <div className="modal_work-content !w-1/2">
                <div className="modal_work-header">
                    <h3 className="modal_work-title">Добавить награду</h3>
                </div>

                <form action="">
                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Введите название</label>
                        <input className="form_input" name="input-email" type="text" id="input-email" placeholder="название "/>
                    </div>


                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Введите направление</label>
                        <input className="form_input" name="input-email" type="text" id="input-email" placeholder="направление"/>
                    </div>


                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Введите описание</label>
                        <textarea className="form_textarea" name="input-text" id="input-text" placeholder="Описание..."></textarea>
                    </div>

                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Введите год получения</label>
       
                        <input className="form_input !w-1/3" name="input-email" type="number" id="input-email" placeholder="Год"/>
                   
           
                    </div>


                    <div className="flex justify-center">

                        <button className="btn" type="submit">Добавить</button>
                    </div>

                </form>
                
         
                
            </div>
        </div>
     
     </div>
    
    
</div>   
  )
}

export default AddRewardsModal