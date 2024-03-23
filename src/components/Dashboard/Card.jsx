"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from "./card.module.css";

export default function Card(prop){
    const [cards, setCards] = useState([]);
  
    useEffect(() => {      
      const fetchcards = async () => {
        try {
          const response = await axios.get(            
            `https://api.trello.com/1/lists/${prop.idList}/cards?key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&token=${process.env.NEXT_PUBLIC_TRELLO_TOKEN}`
          );
          setCards(response.data);
        } catch (error) {
          console.error('Error fetching card:', error);
        }
      };
  
      fetchcards();
      setInterval(() =>{ fetchcards()} ,10000);
    }, []);


    return (
        <ul className={style.card}>
            {cards.map(card => {
                return <li key={card.id}>
                    <span>{card.name}</span>
                </li>
            })}
        </ul>

    )
}