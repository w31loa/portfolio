import React, { useState } from 'react'
import Resume from './Resume'
import ContactModal from './ContactModal'

const About = () => {

    const[modalOpen, setModalOpen] = useState(false)
    const[contactOpen , setContactOpen] = useState(false)

    const openModelHandler = ()=>{
        setModalOpen(true)
    }

    const contactOpenHandler = ()=>{
        setContactOpen(true)
    }

  return (
    <div>

        <section className="about" id="obo_mne">
            
            <div className="contanier">
                <div className="about_inner">
                    <div className="about_photo">
                    <img className="imgg" src="img/designer_photo.png" alt=""/> 
                    </div>
                    <div className="about_content">
                    <h3 className="about_title">ОБО МНЕ</h3>
                    <h2 className="about_bigtitle">КТО Я ?</h2>
                        <div className="about_text">
                        <p>Я Цыс Максим Игоревич, учусь в Университетском Колледже при Оренбургском Государственном Университете на программиста компьютерных систем.</p>
                        <p>Данный сайт, по своей сути является моей задачей для курсового проекта, который нам необходимо выполнить находяться на производственной практике. </p>
                        <p>Если вы читаете это, то вы скорее всего мой руководитель практики, а так же мой куратор Мира Гайзулловна. </p>
                        </div>
                        <button className="btn"  onClick={contactOpenHandler} data-modal="#modal_hireme">Напиши мне</button>
                        <button className="btn" type="button" onClick={openModelHandler} data-modal="#modal_resume">Моё резюме</button>
                        
                    </div>
                </div>

                {
                    modalOpen&&<Resume setModalOpen={setModalOpen} modelOpen={modalOpen}/>
                }
                {
                    contactOpen&&<ContactModal setModalOpen={setContactOpen} modelOpen={contactOpen}/>
                }
                
            
            </div> 
            

        </section>

    </div>
  )
}

export default About