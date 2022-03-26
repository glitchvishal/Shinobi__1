import React from 'react'
import './card.css'

function Card() {
  return (
    <>
    <div className="card">
        <div className="card-content">
        <div className="card-header">
        <div className="cardName">
            <h2>Name kumar</h2>
            <h5>userName</h5>
        </div>
            <div className="topRight">
            <p>logout</p>
            <img src="logo.png" alt="dp" />
            </div>
            <div className="block">
                <h2>twitter</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quia quae, eaque excepturi vitae dolorum magnam, laboriosam id nulla harum alias, praesentium obcaecati voluptate soluta nemo iste tempora esse vero!</p>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Card