import React from 'react'

const Reviews = () => {
  return (
    <div>

        <div className="reviews">
                <div className="contanier">
                    <div className="reviwes_item">
                        <div className="reviwes_text">
                        <p>Я оставляю свой отзыв на этого пользователя и хочу сказать, что он грамотно выполняет своб работу, а что самое главное вовремя! О работе с данным пользователем у меня остались хорошие впечетления, спасибо!</p>
                        </div>
                    
                        <div className="reviwes_autor">
                            <img className="reviews_photo" src="https://placehold.it/103/333" alt=""/>
                            <div className="reviwes_name">Василий Дроздов</div>
                            <div className="reviwes_company">"ОАО" Максус</div>
                            {/* <div className="reviwes_rating">
                                <img className="reviews_star" src="img/star-point.svg" width="13" alt=""/>
                                <img className="reviews_star" src="img/star-point.svg" width="13" alt=""/>
                                <img className="reviews_star" src="img/star-point.svg" width="13" alt=""/>
                                <img className="reviews_star" src="img/star-point.svg" width="13" alt=""/>
                                <img className="reviews_star reviews_star--unactive" src="img/star-point.svg" width="13" alt=""/>
                            </div> */}
                        </div>
                        
                    </div>  
                </div> 
            </div>

    </div>
  )
}

export default Reviews