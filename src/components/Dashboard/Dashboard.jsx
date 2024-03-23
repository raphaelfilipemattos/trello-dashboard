"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import style from "./dashboard.module.css";


const Dashboard = () => {
    const [boards, setBoards] = useState([]);
  
    useEffect(() => {
      const fetchBoards = async () => {
        try {
          const response = await axios.get(
            `https://api.trello.com/1/members/me/boards?key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&token=${process.env.NEXT_PUBLIC_TRELLO_TOKEN}&lists=open&cards=open`
          );
          setBoards(response.data);
        } catch (error) {
          console.error('Error fetching boards:', error);
        }
      };
  
      fetchBoards();
    }, []);
  
    return (
      <div className={style.dashboard}>
        <h1 className={style.titulo}>Trello Dashboard</h1>
        {boards.map((board) => (
          <div key={board.id} className={style.quadro}>
            <h2 className={style.titulo_quadro}>{board.name}</h2>
            <ul>              
              {board.lists.map((list) => (                
                <li key={list.id}>
                  {console.log(list)}
                  <h3 className={style.card_name}>{list.name}</h3>
                   <Card idList={list.id} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default Dashboard;