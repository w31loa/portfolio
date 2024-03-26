import React from 'react'
import { RxCross1 } from 'react-icons/rx'

interface IProp{
    modalOpen: boolean,
    setModalOpen: any
}

const AddExperienceModa = ({modalOpen , setModalOpen}:IProp) => {
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
                    <h3 className="modal_work-title">Добавить опыт работы</h3>
                </div>

                <form action="">
                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Введите название компании</label>
                        <input className="form_input" name="input-email" type="text" id="input-email" placeholder="Название "/>
                    </div>


                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Введите должность</label>
                        <input className="form_input" name="input-email" type="text" id="input-email" placeholder="Должность"/>
                    </div>


                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Введите описание</label>
                        <textarea className="form_textarea" name="input-text" id="input-text" placeholder="Описание..."></textarea>
                    </div>

                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Введите года работы</label>
                        <div className=" flex gap-10">
                            <input className="form_input !w-1/3" name="input-email" type="text" id="input-email" placeholder="Начало"/>
                            <input className="form_input !w-1/3" name="input-email" type="text" id="input-email" placeholder="Конец"/>
                        </div>
           
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

export default AddExperienceModa