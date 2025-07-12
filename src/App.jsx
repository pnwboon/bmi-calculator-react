import React, { useState, useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import BMICalculator from './components/BMICalculator';
import { lightTheme, darkTheme } from './theme/index.jsx'; // นำเข้าธีมของเรา

function App() {
  // สถานะสำหรับเก็บโหมดธีม: 'light' หรือ 'dark'
  const [themeMode, setThemeMode] = useState('light');

  // ใช้ useMemo เพื่อสร้าง Theme object เฉพาะเมื่อ themeMode เปลี่ยนแปลง
  // นี่ช่วยให้ประสิทธิภาพดีขึ้น เพราะ Theme object ไม่ได้ถูกสร้างใหม่ทุกครั้งที่ re-render
  const currentTheme = useMemo(
    () => (themeMode === 'light' ? lightTheme : darkTheme),
    [themeMode]
  );

  return (
    // ThemeProvider จะทำให้ Material-UI components ทั้งหมดสามารถเข้าถึงธีมได้
    <ThemeProvider theme={currentTheme}>
      {/* CssBaseline ช่วยปรับแต่ง CSS พื้นฐานให้เข้ากับ Material Design */}
      <CssBaseline />
      <Header theme={themeMode} setTheme={setThemeMode} />
      <BMICalculator />
    </ThemeProvider>
  );
}

export default App;