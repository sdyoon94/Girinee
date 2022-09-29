import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

import './GameReport.css';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// 속성 색깔 커스텀
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: "#0e0e0e",
    },
  },
});

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box component="div">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

// main
export function GameReport() {
  
  // axios 상태 관리
  const [users, setUsers] = React.useState([]);
  const [value, setValue] = React.useState(0);

  // 로컬 스토리지에 있는 토큰 값 저장
  const accessToken = window.localStorage.getItem('accessToken')

  
  // axios 요청
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'https://j7a202.p.ssafy.io/api/record/game', {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
        console.log('data = ', response.data)
      } catch (e: any) {
        console.log('errer=', e)
      }
    };

    fetchUsers();
  }, []);


  // 그래프 데이터 관리
  const data = [
    {
      name: users ? users[value]['chord1'] : 'code',
      // CodeAccuracy: 70,
      CodeAccuracy: users ? users[value]['score1'] : 0
    },
    {
      name: users ? users[value]['chord2'] : 'code',
      // CodeAccuracy: 70,
      CodeAccuracy: users ? users[value]['score2'] : 0
    },
    {
      name: users ? users[value]['chord3'] : 'code',
      // CodeAccuracy: 70,
      CodeAccuracy: users ? users[value]['score3'] : 0
    },
    {
      name: users ? users[value]['chord4'] : 'code',
      // CodeAccuracy: 70,
      CodeAccuracy: users ? users[value]['score4'] : 0
    },
  ];

  // 현재 클릭된 기록 value
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(newValue)
  };

  
  
  return (
    <Box component="div">
      <Typography sx={{ display: 'flex', justifyContent: 'center', mb: 3}} id="text-color-game">지난 7게임의 기록을 확인할 수 있습니다.</Typography>
    <ThemeProvider theme={theme}>
      
    <Stack spacing={2} direction="row" sx={{ display: 'flex', justifyContent: 'center'}}>
      <Box component="div" sx={{ bgcolor: 'secondary', display: 'flex', height: 500 }}>
        <Tabs
          orientation="vertical"
          selectionFollowsFocus={true}
          // variant="scrollable"
          // aria-label="full width tabs example"
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          visibleScrollbar={false}
          // sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label={users[0]['difficult']} {...a11yProps(0)} id="text-color-game"/>
          <Tab label={users[1]['difficult']} {...a11yProps(1)} id="text-color-game"/>
          <Tab label={users[2]['difficult']} {...a11yProps(2)} id="text-color-game"/>
          {/* <Tab label={users[3]['difficult']} {...a11yProps(3)} id="text-color-game"/>
          <Tab label={users[4]['difficult']} {...a11yProps(4)} id="text-color-game"/>
          <Tab label={users[5]['difficult']} {...a11yProps(5)} id="text-color-game"/>
          <Tab label={users[6]['difficult']} {...a11yProps(6)} id="text-color-game"/> */}
        </Tabs>

        <TabPanel value={value} index={value}>
            <Box component="div" sx={{ ml:5 }}>
            <BarChart
              width={900}
              height={600}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="CodeAccuracy" fill="#e0ffff" barSize={30} />
            </BarChart>
          </Box>
        </TabPanel>
      </Box>  
    </Stack>
    </ThemeProvider>
    </Box>
  )
}

export default GameReport;