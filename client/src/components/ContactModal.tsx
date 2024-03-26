import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'



interface IProp{
    modelOpen: boolean,
    setModalOpen: any
}

const ContactModal = ({modelOpen , setModalOpen}:IProp) => {


    const closeModalHandler = ()=>{
        setModalOpen(false)
    }

  return (
    <div className={modelOpen?'modal !block' : 'modal'} id="modal_hireme">
        <div className="modal_dialog modal_dialog--sm">
            
            <button onClick={closeModalHandler}  className="modal_exit" type="button" data-close>
                <span><RxCross1 /></span>
            </button>
            
            <div className="contact">
                        <div className="contact_left">
                            <h3 className="modal_title mb-0">Поговорим</h3>
                            <h4 className="modal_subtitle">Позвони мне или напиши</h4>
                            
                            
                            <ul className="contact_info">
                                <li className="contact_info-item flex gap-2">
                                <FaPhoneAlt />
                                +7(958) 669 96 50
                                </li>
                                <li className="contact_info-item flex gap-2">
                                <MdAlternateEmail />
                                maksim.cys@mail.ru
                                </li>
                            </ul>
                            
                            
                            <form className="form" action="/" method="post">
                                <div className="form_group">
                                    <label className="form_label" htmlFor="input-email">E-mail</label>
                                    <input className="form_input" name="input-email" type="text" id="input-email" placeholder="E-mail адрес"/>
                                </div>
                                
                                <div className="form_group">
                                    <label className="form_label" htmlFor="input-text">Сообщение</label>
                                    <textarea className="form_textarea" name="input-text" id="input-text" placeholder="Введите ваше сообщение..."></textarea>
                                </div>
                                <div className="text_right">
                                    <button className="btn" type="submit">Отправить</button>
                                </div>
                            </form>
                        </div>
            </div>
        </div>
    </div>   
    
  )
}

export default ContactModal