import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import ContactModal from './ContactModal'
import { IoMdAddCircle } from 'react-icons/io'
import AddExperienceModa from './Resume/AddExperienceModa'
import AddEducationModal from './Resume/AddEducationModal'
import AddSkillModal from './Resume/AddSkillModal'
import AddRewardsModal from './Resume/AddRewardsModal'


interface IProp{
    modelOpen: boolean,
    setModalOpen: any
}


const Resume = ({modelOpen , setModalOpen}:IProp) => {

    const isAuth = true 

    const closeModalHandler = ()=>{
        setModalOpen(false)
    }

    const[contactOpen , setContactOpen] = useState(false)

    const contactOpenHandler = ()=>{
        setContactOpen(true)
    }

    const[expModalOpen, setExpModalOpen] = useState(false)

    const openExpModelHandler = ()=>{
        setExpModalOpen(true)  
    }

    const[educationModalOpen, setEducationModalOpen] = useState(false)

    const openEducationModelHandler = ()=>{
        setEducationModalOpen(true)  
    }

    const[skillModalOpen, setSkillModalOpen] = useState(false)

    const openSkillModelHandler = ()=>{
        setSkillModalOpen(true)  
    }

    const[rewardModalOpen, setRewardModalOpen] = useState(false)

    const openRewardModelHandler = ()=>{
        setRewardModalOpen(true)  
    }

  return (
    <div>

<div className={modelOpen?'modal !block' : 'modal'} id="modal_resume">
    <div className="modal_dialog">
        
        <button onClick={closeModalHandler} className="modal_exit" type="button" data-close>
            <span className='text-black'><RxCross1 /></span>
            
        </button>
        <div className="modal_content">
            <h3 className="modal_title  text_centr">РЕЗЮМЕ</h3>
            
            {/* <div className="text_centr">
                <a className="btn btn--thin" href="#">Cкачать PDF</a>
                <a className="btn btn--thin" href="#">Печатать</a>
            </div> */}
            
            <div className="time_line">
            
                <div className="time_line-col time_line-col--left">
                    <h4 className="time_line-title flex justify-end items-center gap-5">ОПЫТ РАБОТЫ {isAuth?<IoMdAddCircle onClick={openExpModelHandler} />:''}</h4>
                    
                <div className="time_line-item">
                             <time className="time_line-date" >2020 - <b>Сегодня</b></time>
                    <h5 className="time_line-subtitle">Фрилансер</h5>
                    <div className="time_line-position">Арт Директор</div>
                    <div className="time_line-text">
                    <p>Я работаю на фрилансе в свободное время, потому что времени у меня нету, я учу учёбу. И вообще я устал, пожслуйста поставте 4-5.</p>
                    </div>        
                </div>
                    <div className="time_line-item">
                             <time className="time_line-date" >2014 - 2020</time>
                    <h5 className="time_line-subtitle">Безработный</h5>
                    <div className="time_line-position">БОМЖ</div>
                    <div className="time_line-text">
                    <p>Я работаю на фрилансе в свободное время, потому что времени у меня нету, я учу учёбу. И вообще я устал, пожслуйста поставте 4-5.</p>
                    </div>        
                    </div>
                    <div className="time_line-item">
                             <time className="time_line-date" >2002 - 2014</time>
                    <h5 className="time_line-subtitle">Школьник</h5>
                    <div className="time_line-position">Ученик</div>
                    <div className="time_line-text">
                    <p>Я работаю на фрилансе в свободное время, потому что времени у меня нету, я учу учёбу. И вообще я устал, пожслуйста поставте 4-5.</p>
                    </div>        
                    </div>
                    <div className="time_line-item">
                             <time className="time_line-date" >2001 - 2002</time>
                    <h5 className="time_line-subtitle">Никто</h5>
                    <div className="time_line-position">Безработный</div>
                    <div className="time_line-text">
                    <p>Помню те времена, меня ещё не существовало, хорошие были времена...</p>
                    </div>        
                    </div>
                </div>
                
                
                
                <div className="time_line-col time_line-col--right">
                <h4 className="time_line-title flex justify-end items-center gap-5">Образование {isAuth?<IoMdAddCircle  onClick={openEducationModelHandler}/>:''}</h4>
                    
                    <div className="time_line-item">
                             <time className="time_line-date" >2002 - 2014</time>
                    <h5 className="time_line-subtitle">Школа</h5>
                    <div className="time_line-position">47 оренбург</div>
                           
                    </div>
                    
                    <div className="time_line-item">
                             <time className="time_line-date" >2014 - 2019</time>
                    <h5 className="time_line-subtitle">Познание интернета</h5>
                    <div className="time_line-position">Интернет</div>
                            
                    </div>
                    
                    <h4 className="time_line-title flex justify-end items-center gap-5">Способности {isAuth?<IoMdAddCircle onClick={openSkillModelHandler}  />:''}</h4>
                        <div className="progress-bar text-black">
                            <div className="progress-bar-item">
                            <div className="progress-bar-left">
                                <div className="progress-bar-title">Photoshop</div>
                            </div>
                            <div className="progress-bar-right">
                                <div className="progress-bar-bar">
                                    <div className="progress-bar-progress w-[90%]" ></div>
                                </div>
                            </div>
                            </div>
                            <div className="progress-bar-item">
                            <div className="progress-bar-left">
                                <div className="progress-bar-title">C++</div>
                            </div>
                            <div className="progress-bar-right">
                                <div className="progress-bar-bar">
                                    <div className="progress-bar-progress w-[30%]" ></div>
                                </div>
                            </div>
                            </div>
                            <div className="progress-bar-item">
                            <div className="progress-bar-left">
                                <div className="progress-bar-title">C#</div>
                            </div>
                            <div className="progress-bar-right">
                                <div className="progress-bar-bar">
                                    <div className="progress-bar-progress w-[40%]"></div>
                                </div>
                            </div>
                            </div>
                            <div className="progress-bar-item">
                            <div className="progress-bar-left">
                                <div className="progress-bar-title">JS</div>
                            </div>
                            <div className="progress-bar-right">
                                <div className="progress-bar-bar">
                                    <div className="progress-bar-progress w-[10%]" ></div>
                                </div>
                            </div>
                            </div> 
                        </div>
                    
                    <h4 className="time_line-title flex justify-end items-center gap-5">Награды {isAuth?<IoMdAddCircle onClick={openRewardModelHandler}  />:''}</h4>
                    
                    <div className="time_line-item flex gap-8">
                        <time className="time_line-date" >2020</time>
                        <div className="">
                            <h5 className="time_line-subtitle">Лучший братишка</h5>

                            <div className="time_line-position">жизнь</div>

                            <div className="time_line-text">
                                <p>Получил аттестат о победе по жизни.</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
            <div className="text_centr">
                <a className="btn" onClick={contactOpenHandler} data-modal="#modal_hireme">НАПИШИ МНЕ</a>
            </div>
            
        </div>
    </div>
</div>   
    
                {
                    contactOpen&&<ContactModal setModalOpen={setContactOpen} modelOpen={contactOpen}/>
                }
                {
                    expModalOpen&&<AddExperienceModa setModalOpen={setExpModalOpen} modalOpen={expModalOpen}/>
                }
                {
                    educationModalOpen&&<AddEducationModal setModalOpen={setEducationModalOpen} modalOpen={educationModalOpen}/>
                }
                {
                    skillModalOpen&&<AddSkillModal setModalOpen={setSkillModalOpen} modalOpen={skillModalOpen}/>
                }
                {
                    rewardModalOpen&&<AddRewardsModal setModalOpen={setRewardModalOpen} modalOpen={rewardModalOpen}/>
                }

    </div>
  )
}

export default Resume