// Systems
import { useState, useEffect } from 'react'

// Other Component 
import GIRINEE from '../assets/images/GIRINEE.png'
import './ChordGame.css'
import '../assets/fonts/font.css'

import { LowLevel } from '../components/game/LowLevel'
import { IntermediateLevel } from '../components/game/IntermediateLevel'
import { HighLevel } from '../components/game/HighLevel'

// Material UI
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
// import Switch from '@mui/material/Switch';  
// import { PowerSettingsNew } from '@mui/icons-material'

// -----------------------------------------------------------------------------------------------------

export function ChordGame() {
    // script
    const [controllerDegree, setDegree] = useState(0)
    const clickLow = () => setDegree((prev) => 0)
    const clickMid = () => setDegree((prev) => 1)
    const clickHigh = () => setDegree((prev) => 2)
    
    let levelValue = "초급 난이도"
    let levelExplanation = "쉬워요"
    if (controllerDegree === 0) {
      levelValue = 'EASY LEVEL'
      levelExplanation = "쉬워요"  
    } else if (controllerDegree === 1) {
      levelValue = '중급 난이도'
      levelExplanation = "괜찮아요"
    } else {
      levelValue = '상급 난이도'
      levelExplanation = "어려워요"
    }

    // JSX
    return (
      <Box component="div" id="game-body" sx={{ display: 'flex', flexDirection: 'column' }}>
        {/* Navbar */}
        <Box component="div" id="menu-bar" sx={{ mt: 4, px: 8, display: 'flex', justifyContent: 'space-between'}}>
          {/* 텍스트로고 */}
          <img id="girinee-img" src={GIRINEE} alt="GIRINEE.png" />
          <Stack spacing={2} direction="row">
            <Button variant="text">
              <Typography className="menu-text">MY PAGE</Typography>
            </Button>
            <Button variant="text">
              <Typography className="menu-text">LOGOUT</Typography>
            </Button>
          </Stack>
        </Box>
      
        {/* 컨트롤패널 */}
        <Box component="div" id="control-panel" sx={{ mt: 5, px: 10, display: 'flex', justifyContent: 'space-between'}}>
          <Box component="div" sx={{ display: 'flex'}}>
            {/* 컨트롤러 */}
            <div id="level-controller" className={`degree${ controllerDegree } metal radial`}>
              <div id="level-index"></div>
            </div>

            {/* 레벨버튼 누르면 해당하는 부분으로 위의 컨트롤러가 회전 */}
            <Box component="div" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <Button id="low-level-btn" variant="text" onClick={clickLow}>
                <Typography className="white-text">LOW</Typography>
              </Button>
              <Button id="mid-level-btn" variant="text" onClick={clickMid}>
                <Typography className="white-text">MID</Typography>
              </Button>
              <Button id="high-level-btn" variant="text" onClick={clickHigh}>
                <Typography className="white-text">HIGH</Typography>
              </Button>
            </Box>
          </Box>

          {/* 현재 난이도 표시 */}
          {/* 캐루젤로 바꾸고 싶은 마음이 굴뚝 같음 */}
          <Stack>
            <h1 id="level-value" key={levelValue} className='level-text line-up'> {levelValue} </h1>
            <h3 className='white-text'> {levelExplanation} </h3>
          </Stack>

          {/* 메인화면으로 돌아가기 */}
          <form id="quitLever">
          	<input type="checkbox" name="lever" className="lever pristine" id="lever" value="lever value" role="switch" aria-label="lever" aria-checked="false" />
          	<label htmlFor="lever"><span>On</span></label>
          	<label htmlFor="lever"><span>Off</span></label>
          </form>

        </Box>

        {/* 선택한 난이도 따라서 나타나는 내용 */}
        <Box component="div">
          {controllerDegree === 0 ? <LowLevel/> : controllerDegree === 1 ? <IntermediateLevel/> : <HighLevel/>}
        </Box>

      </Box>
    )
  }
  
  // Three Function
