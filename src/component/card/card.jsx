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
                <p>profile</p>
                <img src="logo.png" alt="dp" />
            </div>
        </div><hr className="hr" />
        <div className="block">
                <h2>twitter</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quia quae, eaque excepturi vitae dolorum magnam, laboriosam id nulla harum alias, praesentium obcaecati voluptate soluta nemo iste tempora esse vero!</p>
            </div>
            <div className="block1">
                <h2>github</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quia quae, eaque excepturi vitae dolorum magnam, laboriosam id nulla harum alias, praesentium obcaecati voluptate soluta nemo iste tempora esse vero!</p>
            </div>
            <div className="block2">
                <h2>insta</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quia quae, eaque excepturi vitae dolorum magnam, laboriosam id nulla harum alias, praesentium obcaecati voluptate soluta nemo iste tempora esse vero!</p>
            </div><hr />
        </div>
        <div className="social">
            <div>
                <h5>like</h5>
            </div>
            <div>
                <h5>comment</h5>
            </div>
            <div>
                <h5>share  </h5>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card