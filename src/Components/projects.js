import React from 'react';
import './projectstyle.css';
import img1 from './logo.png'; 

 export default function projects() {
  return (
    <div>
        <div class="card">
        <div class="face front">
            <img src={img1} alt=""/>
            <h3>Japan</h3>
        </div>
        <div class="face back">
            <h3>Japan</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius harum molestiae iste, nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?</p>
            <div class="link">
                <a href="#">Details</a>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="face front">
            <img src={img1} alt=""/>
            <h3>Spain</h3>
        </div>
        <div class="face back">
            <h3>Spain</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius harum molestiae iste, nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?</p>
            <div class="link">
                <a href="#">Details</a>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="face front">
            <img src={img1} alt=""/>
            <h3>Perú</h3>
        </div>
        <div class="face back">
            <h3>Perú</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius harum molestiae iste, nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?</p>
            <div class="link">
                <a href="#">Details</a>
            </div>
        </div>
    </div>
    
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
        <div className="card__body">
            <img src={props.img} class="card__image" />
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{props.description}</p>
        </div>
        <button className="card__btn">View Recipe</button>
        </div>
  );
}




     