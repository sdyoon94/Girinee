import React from 'react';
import './MyRecord.css'
import GIRINEE from '../assets/images/GIRINEE.png'

import { Box } from '@mui/system'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import Navbar from '../widgets/Navbar'
import { GameReport } from '../components/myRecord/GameReport';
import { PracticeReport } from '../components/myRecord/PracticeReport';
import { useNavigate } from "react-router-dom";

export function MyRecord() {
    // script
    const logout = () => {
      const logoutConfirm = window.confirm('로그아웃 하시겠습니까?')
      if (logoutConfirm) {
        localStorage.setItem("token", ' ');
        console.log('로그아웃 되었습니다.')
        window.location.replace('http://localhost:3000')
      }
    };

    const [Graph, setGraph] = useState(0)
    const codeAccuracyClick = () => setGraph((prev) => 0)
    const GameClick = () => setGraph((prev) => 1)
    const navigate = useNavigate()
  
    // JSX
    return (
      <div>
        <Box component="div" id="my-record-body" sx={{ display: 'flex', flexDirection: 'column' }}>

          {/* 그래프 선택 */}
          <Box component="div" sx={{ my: 5, display: 'flex', justifyContent: 'center'}}>
            <Stack spacing={2} direction="row">
            <Button variant="text" onClick={codeAccuracyClick}>
              <Typography id="graph-text" >Code Accuracy</Typography>
            </Button>
            <Button variant="text" onClick={GameClick}>
              <Typography id="graph-text">Game</Typography>
            </Button>
            </Stack>
          </Box>

          {/* 그래프 */}
            <Box component="div" sx={{ display: 'flex', justifyContent: 'center'}}>
              {Graph === 0 ? <PracticeReport/> : <GameReport/>}
            </Box>

        </Box>
        <Navbar/>
        <span className="my-record" 
          onClick={() => {
            setTimeout(() => {
              navigate('/')
            //   {({ isActive }) =>
            //   <div id="main2">
            //     <Navbar />
            //     {isActive ? <MenuContainer num={0.83}/> : null}
            //     <span className="menu-span">Chord Table</span>
            //     <span className="my-record" 
            //       onClick={() => {
            //         setTimeout(() => {
            //         navigate('/:userId')
            //         }, 1000);
            //       }}>
            //       기록보기
            //     </span>
            //   </div>
            // }
            }, 1000);
          }}>
          뒤로가기
        </span>

      </div>
    )
  }

  
  // Three Function