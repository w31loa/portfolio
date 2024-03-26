import React, { useState } from 'react'
import ContactModal from './ContactModal'

const Footer = () => {

    const[contactOpen , setContactOpen] = useState(false)

    const contactOpenHandler = ()=>{
        setContactOpen(true)
    }

  return (
    <div>

            <footer className="footer" id="contact">
                <div className="contanier">
                    
                    <div className="footer_iner">
                        <div className="footer_credits">
                            <div className="footer_copyright">
                                &copy; 2024 
                            </div>
                                <div className="flex">
                                    <a className="social_link" href="#">
                                    <img src="img/Fb.png" width="30" alt=""/> 
                                    </a>
                                    <a className="social_link" href="#">
                                    <img src="img/Instagram.png" width="30" alt=""/> 
                                    </a>
                                    <a className="social_link" href="#">
                                    <img src="img/Twitter.png" width="30" alt=""/> 
                                    </a>    
                                </div>
                        </div>
                        
                        <nav className="footer_nav">
                            <div className="">
                                <a className="footer_nav-link" href="#work_1">Работы</a>
                                <a className="footer_nav-link" href="#obo_mne">Обо мне</a>
                                <a className="footer_nav-link" href="#blog">Блог</a>
                            </div>
                             
                        
                            <a className="footer_nav-link  footer_nav-link--btn" data-modal="#modal_hireme" onClick={contactOpenHandler}>Напиши мне</a>
                        </nav>
                        
                    </div>
                
                </div>
            </footer>
            {
                    contactOpen&&<ContactModal setModalOpen={setContactOpen} modelOpen={contactOpen}/>
                }

    </div>
  )
}

export default Footer