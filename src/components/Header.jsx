import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, useTheme } from '@mui/material'; // import useTheme ด้วย
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Header({ theme, setTheme }) {
  const muiTheme = useTheme(); // ใช้ useTheme hook เพื่อเข้าถึง theme object ปัจจุบันของ MUI

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <AppBar position="static" 
            sx={{ 
              borderRadius: 2,
              mb: 4,
              boxShadow: 3,
              // ไม่ต้องระบุ bgcolor หรือ color แล้ว ถ้าต้องการให้ใช้สีจาก theme.palette.primary.main/contrastText
              // แต่ถ้าต้องการ override ก็ทำได้
              // bgcolor: muiTheme.palette.primary.main, // ตัวอย่างการใช้สีจาก theme
              // color: muiTheme.palette.primary.contrastText,
            }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography 
          variant="h5" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold', 
            // color: muiTheme.palette.primary.contrastText, // ถ้า AppBar ไม่ได้กำหนด color ให้ใช้ตัวนี้
          }}
        >
          โปรแกรมคำนวณหาค่าดัชนีมวลกาย BMI
        </Typography>

        <IconButton 
          color="inherit" 
          onClick={toggleTheme}
          sx={{
            ml: 2,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.15)', 
            }
          }}
        >
          {theme === "dark" ? 
            <WbSunnyIcon sx={{ fontSize: 28 }} /> :
            <DarkModeIcon sx={{ fontSize: 28 }} />
          }
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}