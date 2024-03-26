import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'

interface IProp{
    modalOpen: boolean,
    setModalOpen: any
}

const AddSkillModal = ({modalOpen , setModalOpen}:IProp) => {
    const closeModalHandler = ()=>{
        setModalOpen(false)
        // console.log(modalOpen)
    }

    const [value, setvalue] = useState('')

  return (
    <div className={modalOpen?'modal !block' : 'modal'} id="modal_pr">
    <div className="modal_dialog">
        
            <button onClick={closeModalHandler}  className="modal_exit" type="button" data-close>
                <span className='text-black'><RxCross1 /></span>
            </button>
        
        
        <div className="modal_work flex justify-center text-black ">
            <div className="modal_work-content !w-1/2">
                <div className="modal_work-header">
                    <h3 className="modal_work-title">Добавить способность</h3>
                </div>

                <form action="">
                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Введите название</label>
                        <input className="form_input" name="input-email" type="text" id="input-email" placeholder="название "/>
                    </div>


                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Оцените ваши знания</label>
                        <div className="flex items-center gap-3">
                            <span className='text-sm'>1</span>
                                <input id="default-range" type="range" value={value} onChange={(e)=> {setvalue(e.target.value) } }  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                            <span className='text-sm'>100</span>
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

export default AddSkillModal