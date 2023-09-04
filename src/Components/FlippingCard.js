import React, { useState } from 'react';
import './FlippingCard.css'; // Import the CSS file for styling
import gitIcon from '../Assets/git.png';
import Noticehub from '../Assets/NoticeHub.png';
import covid from '../Assets/covid-19.jpg';
import booksell from '../Assets/booksell1 (2).png';
import chatbot from '../Assets/Chatbot (1).png'



export default function ProjectCards() {
  return (
    <div>
      <h1 style={{ display: 'flex', justifyContent:'center', padding: '20px' }}>PROJECTS</h1>
      <hr style={{ width: "70%", position: "relative", left: "15%",marginBottom:'20px' }}></hr>
      <br />
            <div className="card-container">
            <FlippingCard frontImage={chatbot} name="ChatBOT"
              gitLink="https://github.com/Devanshi024/NoticeHUB" backContent="Create a powerful chatbot using HTML, CSS, and JavaScript to enhance audience engagement and provide instant responses,  this chatbot will elevate your customer experience to new heights." />
            <FlippingCard frontImage={Noticehub} name="NoticeHUB" gitLink="https://github.com/Devanshi024/NoticeHUB" backContent="NoticeHUB is a CRUD based Django application to manage notice." />
            <FlippingCard frontImage={covid} name="Combating COVID_19" gitLink="https://github.com/Devanshi024/Combating-Covid-19-with-IOT" backContent="Proposed an IOT based attendance system with PHP for maintaining COVID safety guidelines.
            Selected for SSIP grant of 10,000." />
            <FlippingCard frontImage={booksell} name="Booksell"gitLink="https://github.com/Devanshi024/BookSell"  backContent="ReactJS and Axios API- based Application for maintaining the bookstore." />
          </div>
    </div>
  )
}


const FlippingCard = ({ frontImage, name,tag, gitLink,backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
        <div className='container'>    
            <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
                <div className="card-inner">
                    <div className="card-front">
                        <img src={frontImage} alt="Front Image" />
                        <div className="name">{name}</div>  
                    </div>
                    <div className="card-back">
                        {backContent}
                        <img src={gitIcon} alt="Git Icon" className="git-icon" />
                            <a href={gitLink} target="_blank" rel="noopener noreferrer">
                                {name}
                            </a> 
                    </div>
                </div>
            </div>
            
        </div>
</div>


  );
};


