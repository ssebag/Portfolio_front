import React, {useState, useContext} from 'react';
import './SkillCard.css'
import {DarkModeContext} from './../../context/DarkModeContext';

export default function SkillCard({ skill,  progress}) {
  //============================= Mode =======================
  const theme= localStorage.getItem("theme");
  return (
    <>
     {/*  <div className={`skillCard flex-center flex-col ${theme ==="dark" ?  'dark' : ''}`}> */}
     <div className={theme ==="light" ? 'skillCard flex-center flex-col light' : 'skillCard flex-center flex-col'}> 
        <p class="skill-title">{skill}</p>
        <p class="progress-div" data-progress={progress} style={{"--progress": progress }}>{progress}</p>    
      </div>
    </>
  );
}
