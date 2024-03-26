import React, { useState } from 'react'
import ContactModal from './ContactModal'
import Resume from './Resume'

const Intro = () => {

    const[modalOpen, setModalOpen] = useState(false)
    const[contactOpen , setContactOpen] = useState(false)

    const contactOpenHandler = ()=>{
        setContactOpen(true)
    }
    const openModelHandler = ()=>{
        setModalOpen(true)  
    }


  return (
    <div>

        <section className="intro">
                <div className="contanier">
                    <div className="intro__inner"> 
                        <div className="intro__content">
                        <h2 className="intro__subtitle">Привет, я</h2>
                        <h1 className="intro__title">Максим Цыс</h1>
                        <div className="intro__text">Ученик группы 20ПКС-1</div>
                            
                            <div className="social">
                                <a className="social_link" href="#">
                                <img src="img/Fb.png" alt=""/> 
                                </a>
                                <a className="social_link" href="#">
                                <img src="img/Instagram.png" alt=""/> 
                                </a>
                                <a className="social_link" href="#">
                                <img src="img/Twitter.png" alt=""/> 
                                </a>
                            </div>
                            
                            <button className="btn"  onClick={contactOpenHandler} data-modal="#modal_hireme">Напиши мне</button>
                        <button className="btn" type="button" onClick={openModelHandler} data-modal="#modal_resume">Моё резюме</button>
                            
                            
                            
                        </div>
                        
                        <img className="intro__photo" src="img/designer_photo.png" alt=""/>
                        
                    </div>
                </div>
            </section>

            {
                    modalOpen&&<Resume setModalOpen={setModalOpen} modelOpen={modalOpen}/>
                }

            {
                    contactOpen&&<ContactModal setModalOpen={setContactOpen} modelOpen={contactOpen}/>
                }

    </div>
  )
}

export default Intro