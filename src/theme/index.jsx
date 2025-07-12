import { createTheme } from '@mui/material/styles';
import { red, blue, green, orange } from '@mui/material/colors'; // ตัวอย่างสีเพิ่มเติม

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light', // กำหนดโหมดเป็น light
    primary: {
      main: blue[700], // สีน้ำเงินเข้มเป็นสีหลัก
    },
    secondary: {
      main: red[500], // สีแดงเป็นสีรอง
    },
    error: {
      main: red[700],
    },
    warning: {
      main: orange[700],
    },
    info: {
      main: blue[500],
    },
    success: {
      main: green[700],
    },
    background: {
      default: '#e0f2f7', // สีพื้นหลังเริ่มต้นสำหรับ light mode (ตามที่คุณใช้ใน BMI Calculator)
      paper: '#ffffff', // สีพื้นหลังของ Paper component
    },
    text: {
      primary: '#333333', // สีข้อความหลัก
      secondary: '#555555', // สีข้อความรอง
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // หรือฟอนต์ที่คุณต้องการ
    // กำหนด font sizes เพิ่มเติมได้ที่นี่
  },
  components: {
    // สามารถ override styles ของ MUI components ได้ที่นี่สำหรับ light mode
    MuiAppBar: {
      styleOverrides: {
        root: {
          // สไตล์เพิ่มเติมสำหรับ AppBar ใน Light Mode
        },
      },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)', // เงาที่ดูเบาและเป็นธรรมชาติขึ้น
            }
        }
    }
    // ...
  }
});

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark', // กำหนดโหมดเป็น dark
    primary: {
      main: blue[400], // สีน้ำเงินที่สว่างขึ้นสำหรับ Dark Mode
    },
    secondary: {
      main: red[400], // สีแดงที่สว่างขึ้นสำหรับ Dark Mode
    },
    error: {
      main: red[500],
    },
    warning: {
      main: orange[500],
    },
    info: {
      main: blue[300],
    },
    success: {
      main: green[500],
    },
    background: {
      default: '#121212', // สีพื้นหลังเริ่มต้นสำหรับ dark mode
      paper: '#1e1e1e', // สีพื้นหลังของ Paper component ใน dark mode
    },
    text: {
      primary: '#ffffff', // สีข้อความหลักใน dark mode
      secondary: '#bbbbbb', // สีข้อความรองใน dark mode
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    // สามารถ override styles ของ MUI components ได้ที่นี่สำหรับ dark mode
    MuiAppBar: {
      styleOverrides: {
        root: {
          // สไตล์เพิ่มเติมสำหรับ AppBar ใน Dark Mode
          // เช่น bgcolor: '#222'
        },
      },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.5)', // เงาที่ชัดเจนขึ้นใน Dark Mode
            }
        }
    }
    // ...
  }
});