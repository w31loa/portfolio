import React from 'react'
import { RxCross1 } from 'react-icons/rx'

interface IProp{
    modalOpen: boolean,
    setModalOpen: any
}

const ProfileModal = ({modalOpen , setModalOpen}:IProp) => {

    


    const closeModalHandler = ()=>{
        setModalOpen(false)
    }

  return (
    <div className={modalOpen?'modal !block' : 'modal'} id="modal_pr">
    <div className="modal_dialog">
        
            <button onClick={closeModalHandler}  className="modal_exit" type="button" data-close>
                <span className='text-black'><RxCross1 /></span>
            </button>
        
        
        <div className="modal_work flex justify-center text-black">
            <div className="modal_work-content !w-1/2">
                <div className="modal_work-header">
                    <h3 className="modal_work-title">Профиль</h3>
                </div>

                <form action="">
                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Имя </label>
                        <input className="form_input" name="input-email" type="text" id="input-email" placeholder=" "/>
                    </div>

                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Фамилия </label>
                        <input className="form_input" name="input-email" type="text" id="input-email" placeholder=" "/>
                    </div>


                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Номер телефона</label>
                        <input className="form_input" name="input-email" type="number" id="input-email" placeholder=""/>

                    </div>

                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Специальность </label>
                        <input className="form_input" name="input-email" type="text" id="input-email" placeholder=" "/>
                    </div>

                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Ссылка на фейсбук </label>
                        <input className="form_input" name="input-email" type="text" id="input-email" placeholder=" "/>
                    </div>

                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Сылка на инстаграм </label>
                        <input className="form_input" name="input-email" type="text" id="input-email" placeholder=" "/>
                    </div>

                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Ссылка на твиттер </label>
                        <input className="form_input" name="input-email" type="text" id="input-email" placeholder=" "/>
                    </div>

                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">О себе</label>
                        <textarea className="form_textarea !resize"  name="input-text" id="input-text" placeholder=""></textarea>
                    </div>


                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Аватар</label>
                        <input className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-md file:border-0 file:border-e file:border-solid file:border-inherit file:bg-gray-50 file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-black" name="input-email" type="file" id="input-email" placeholder="Название компании"/>
                    </div>
                    <div className="form_group">
                        <label className="form_label" htmlFor="input-email">Ваше фото</label>
                        <input className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-md file:border-0 file:border-e file:border-solid file:border-inherit file:bg-gray-50 file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-black" name="input-email" type="file" id="input-email" placeholder="Название компании"/>
                    </div>


                    <div className="flex justify-center">

                        <button className="btn" type="submit">Сохранить</button>
                    </div>

                </form>
                
         
                
            </div>
        </div>
     
     </div>
    
    
</div>   
  )
}

export default ProfileModal