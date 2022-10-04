// Systems
import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

// Other Component 
import useRecorder from "./useRecorder"
import { setSecond } from '../../features/chordgame/GameSlice'
import { setCntChord } from '../../features/chordgame/GameSlice'

// Material UI
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Stack } from '@mui/system'


export function NormalLevelController() {
    // script
    // 준비된 기타 코드셋 5개
    const guitarChordSets = [['A', 'B', 'C', 'D'], ['B', 'C', 'D', 'E'], ['C', 'D', 'E', 'F'],['D', 'E', 'F', 'G'],['E', 'F', 'G', 'A']]

    // 녹음에 필요한 정보들
    const [audioURL, isRecording, startRecording, stopRecording]:any[] = useRecorder()

    // 디스패치로 사용자가 슬라이더로 선택하는 시간 초 변경, 설정된 초 가져오기
    const chordSecond:number = useAppSelector((state) => state.game.chordSecond)
    const dispatch = useAppDispatch()
    const handleChange = (event: Event, newValue: number | number[]) => {
      dispatch(setSecond(newValue as number));
    }
    
    const theme = createTheme({
      palette: {
        primary: {
          main: '#fff',          
        },
      },
    })   

    // 버튼 눌렀을 때 해당 코드 연습 화면으로 변경
    let cntIdx = -2

    const startGame = () => {
      const randomIdx = Math.floor(Math.random() * 5)
      const cntChordset = guitarChordSets[randomIdx]
      console.log(cntChordset);
      
      cntIdx++
      // console.log('cntIdx', cntIdx)

      function plusIdx() {
          startRecording()
          // console.log('start recording')
          if (cntIdx === -1) {
            cntIdx++
            dispatch(setCntChord(cntChordset[cntIdx] as string))
            // console.log('cntIdx', cntIdx)
          }
        }

      function flipChord() {setInterval(function() {
          if (cntIdx === 0 || cntIdx === 1 || cntIdx === 2) {
            cntIdx++
            // console.log('cntIdx', cntIdx)
            dispatch(setCntChord(cntChordset[cntIdx] as string))
          } else if (cntIdx === 3) {
            stopRecording()
            // console.log('stop recording')
            cntIdx = -2
          }
        }, chordSecond*1000)
      }

      setTimeout(plusIdx, 3000)
      setTimeout(flipChord, 3000)
    }

      // if (cntIdx === -1) {
      //   console.log('cntIdx', cntIdx)
      //   setTimeout(plusIdx, 3000)
      // } else if (cntIdx >= 0 || cntIdx <= 2) {
      //   setInterval(function() {
      //     cntIdx++
      //     dispatch(setCntChord(cntChordset[cntIdx] as string))
      //     console.log('cntIdx', cntIdx)
      //   }, chordSecond*1000)
      // } else {
      //   setTimeout(stopRecording(), chordSecond*1000)
      //   cntIdx = -1
      // }

      // setInterval(function() {
      //   if (cntIdx=-1) {
      //   } else if (cntIdx !== 3) {
      //     cntIdx++
      //     dispatch(setCntChord(cntChordset[cntIdx] as string))
      //   } else {
      //     setTimeout(stopRecording())
      //     cntIdx = -1
      //   } 
      // }, chordSecond * 1000)      
      
    // JSX
    return (
      <Stack alignItems="center">
        <ThemeProvider theme={theme}>
          <Button id="normal-start-btn" variant="outlined" className="white-text" disabled={isRecording} onClick={startGame}>시 작 하 기</Button>
        </ThemeProvider>
      </Stack>
    )
}