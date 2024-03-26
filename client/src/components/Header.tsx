import React, { useState } from 'react'
import ContactModal from './ContactModal'
import ProfileModal from './Profile/ProfileModal'

const Header = () => {


    const isAuth = true

    const[contactOpen , setContactOpen] = useState(false)

    const contactOpenHandler = ()=>{
        setContactOpen(true)
    }

    const[profileOpen , setProfileOpen] = useState(false)

    const profileOpenHandler = ()=>{
        setProfileOpen(true)
    }


    
  return (
  
    <>
          <div className="header">
        <div className="contanier">
            <div className="header__iner">
                
                <div className="user">
                    <div className="user__avatar">
                        <img src="https://placehold.it/57/333" alt=""/>
                    </div>
                    <div className="user__content">
                        <div className="user__name flex flex-col"> <span>Максим</span><span>Цыс</span>  </div>
                        <div className="user__prof">Ученик группы 20ПКС-1</div>
                    </div>
                </div>
            
            
                <div className="nav">
                    {isAuth&&<a className="nav__link hover:cursor-pointer"  onClick={profileOpenHandler}>Профиль</a>}
                    <a className="nav__link" href="#work_1">Работы</a>
                    <a className="nav__link" href="#obo_mne">Обо мне</a>
                    <a className="nav__link" href="#blog">Блог</a>
                    
                    <a className="nav__link nav__link--btn" href="#" data-modal="#modal_hireme" onClick={contactOpenHandler} >Напиши мне</a>
                </div>
            </div>
        </div>
            </div>

                {
                    contactOpen&&<ContactModal setModalOpen={setContactOpen} modelOpen={contactOpen}/>
                }
                {
                    profileOpen&&<ProfileModal setModalOpen={setProfileOpen} modalOpen={profileOpen}/>
                }
    </>
  )
}

export default Header