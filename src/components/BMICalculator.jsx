import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  Divider,
  useTheme
} from "@mui/material";

import Grid from "@mui/material/Grid";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CalculateIcon from "@mui/icons-material/Calculate";
import ClearIcon from "@mui/icons-material/Clear";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("");
  const [recommend, setRecommend] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");

  const muiTheme = useTheme();

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  function resultBMI(e) {
    e.preventDefault();

    const numWeight = parseFloat(weight);
    const numHeight = parseFloat(height);

    if (isNaN(numWeight) || isNaN(numHeight) || numWeight <= 0 || numHeight <= 0) {
      setSnackbarMessage("กรุณากรอกน้ำหนักและส่วนสูงให้ถูกต้อง (เป็นตัวเลขและมากกว่า 0)");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }
    
    const heightMeters = numHeight / 100;
    const calculator = (numWeight / (heightMeters * heightMeters)).toFixed(2);

    let currentStatus = "";
    let currentRecommend = "";
    let statusIcon = null;

    if (calculator < 18.5) {
      currentStatus = "น้ำหนักน้อยกว่าเกณฑ์ปกติ";
      currentRecommend =
        "น้ำหนักของคุณค่อนข้างน้อย ลองปรึกษาผู้เชี่ยวชาญเพื่อหาวิธีเพิ่มน้ำหนักที่เหมาะสมและดูแลสุขภาพโดยรวมให้แข็งแรงขึ้น";
      statusIcon = <WarningAmberIcon color="warning" sx={{ fontSize: 30 }} />;
    } else if (calculator <= 22.9) {
      currentStatus = "น้ำหนักอยู่ในเกณฑ์ดี";
      currentRecommend =
        "ยอดเยี่ยมเลยครับ น้ำหนักของคุณอยู่ในเกณฑ์ที่เหมาะสมแล้ว! รักษาสุขภาพดีๆ แบบนี้ต่อไปด้วยการกินอาหารมีประโยชน์และออกกำลังกายสม่ำเสมอ";
      statusIcon = <EmojiEventsIcon color="success" sx={{ fontSize: 30 }} />;
    } else if (calculator <= 24.9) {
      currentStatus = "น้ำหนักเริ่มเกินเกณฑ์";
      currentRecommend =
        "น้ำหนักของคุณเกินเกณฑ์มาเล็กน้อย การปรับเปลี่ยนพฤติกรรมการกินและเพิ่มการออกกำลังกายจะช่วยให้กลับมาสู่เกณฑ์สุขภาพที่ดีได้ ลองเริ่มดู";
      statusIcon = <WarningAmberIcon color="warning" sx={{ fontSize: 30 }} />;
    } else if (calculator <= 29.9) {
      currentStatus = "มีภาวะน้ำหนักเกิน";
      currentRecommend =
        "คุณมีภาวะน้ำหนักเกินในระดับหนึ่ง ซึ่งอาจเพิ่มความเสี่ยงด้านสุขภาพ ลองปรึกษาแพทย์หรือนักโภชนาการเพื่อวางแผนการดูแลและลดน้ำหนักอย่างถูกวิธี";
      statusIcon = <WarningAmberIcon color="error" sx={{ fontSize: 30 }} />;
    } else {
      currentStatus = "เข้าข่ายภาวะอ้วนรุนแรง";
      currentRecommend =
        "นี่เป็นระดับที่ต้องให้ความสำคัญกับสุขภาพอย่างมากครับ ภาวะอ้วนระดับนี้มีความเสี่ยงสูงต่อปัญหาสุขภาพร้ายแรง ควรปรึกษาแพทย์โดยเร็วที่สุดเพื่อรับคำแนะนำและวางแผนการจัดการน้ำหนักอย่างจริงจัง";
      statusIcon = <SentimentVeryDissatisfiedIcon color="error" sx={{ fontSize: 30 }} />;
    }

    setResult(calculator);
    setStatus({ text: currentStatus, icon: statusIcon });
    setRecommend(currentRecommend);
  }

  function clearInputs() {
    setWeight("");
    setHeight("");
    setResult(null);
    setStatus("");
    setRecommend("");
  }

  // *** ค่าความสูงของ Header ที่สมมติขึ้น (คุณต้องปรับค่านี้ตามความจริงของ Header คุณ) ***
  const HEADER_HEIGHT = 96; // สมมติว่า Header สูง 64px (เช่น AppBar default height)
  // ถ้า Header ของคุณสูง 56px, 100px หรืออื่นๆ ให้เปลี่ยนค่านี้

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // *** CSS ที่ปรับให้พอดี 1 หน้าจอ และไม่มี scrollbar ***
        // แทนที่จะใช้ 100vh ตรงๆ ให้ลบความสูงของ Header ออก
        height: `calc(100vh - ${HEADER_HEIGHT}px)`, // ความสูงของพื้นที่ที่เหลือหลังจากหัก Header
        overflow: "hidden", // ซ่อน scrollbar หลักของหน้าเว็บ
        boxSizing: "border-box", // รวม padding เข้าไปใน height/width ที่กำหนด
        // *** จบส่วนแก้ไข CSS ที่ Box ***

        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`, // ยังคง minHeight เผื่อกรณีเนื้อหาน้อย
        bgcolor: muiTheme.palette.background.default, 
        p: 2, // padding ของ Box หลัก 
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 4, // padding ของ Paper
          borderRadius: 3,
          maxWidth: 500,
          width: "100%",
          boxSizing: "border-box",
          textAlign: "center",
          // *** CSS ที่ปรับให้ Paper มีขนาดพอดีและจัดการ scrollbar ภายใน ***
          // muiTheme.spacing(2) = 16px (จาก p:2 ใน Box หลัก)
          // 100% ตรงนี้จะอ้างอิงจาก height ของ Box แม่
          // ดังนั้น maxHeight ของ Paper ควรเป็น 100% ของ Box แม่ ลบด้วย padding ของ Box แม่
          // Box แม่มี padding บน-ล่าง 2 x muiTheme.spacing(2) = 2 x 16px = 32px
          maxHeight: `calc(100% - ${2 * muiTheme.spacing(2)}px)`, // 100% ของ Box แม่ ลบด้วย padding บน-ล่าง ของ Box แม่
          overflowY: "auto", // ถ้าเนื้อหาใน Paper ล้น ให้ Paper มี scrollbar ภายใน
          // *** จบส่วนแก้ไข CSS ที่ Paper ***
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
          <FitnessCenterIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
            เครื่องคำนวณ BMI
          </Typography>
        </Box>

        <form onSubmit={resultBMI}>
          {/* *** การใช้งาน Grid สำหรับ MUI v7 *** */}
          {/* Grid Container: ใช้ prop "container" และ "columns" */}
          <Grid container spacing={3} mb={3} justifyContent="center" columns={12}>
            {/* Grid Slot 1: ใช้ breakpoint props (xs, sm, md) โดยตรง */}
            <Grid sx={{ gridColumn: { xs: "span 12", sm: "span 8", md: "span 6" } }}>
              <TextField
                fullWidth
                label="น้ำหนัก (กิโลกรัม)"
                type="number"
                variant="outlined"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="เช่น 65"
                inputProps={{ min: "0" }}
              />
            </Grid>
            {/* Grid Slot 2: ใช้ breakpoint props (xs, sm, md) โดยตรง */}
            <Grid sx={{ gridColumn: { xs: "span 12", sm: "span 8", md: "span 6" } }}>
              <TextField
                fullWidth
                label="ส่วนสูง (เซนติเมตร)"
                type="number"
                variant="outlined"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="เช่น 170"
                inputProps={{ min: "0" }}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<CalculateIcon />}
              disabled={weight.trim() === "" || height.trim() === ""}
              sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
            >
              คำนวณ BMI
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              startIcon={<ClearIcon />}
              onClick={clearInputs}
              sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
            >
              ล้างข้อมูล
            </Button>
          </Box>
        </form>

        {result !== null && (
          <Box className="result-section" 
               sx={{ 
                 mt: 4, 
                 p: 3, 
                 border: `1px dashed ${muiTheme.palette.divider}`,
                 borderRadius: 2, 
                 bgcolor: muiTheme.palette.action.hover, 
               }}>
            <Typography variant="h5" sx={{ mb: 1, color: 'text.secondary', fontWeight: 'bold' }}>
              ผลลัพธ์
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Typography variant="h4" component="h2" sx={{ mb: 1, color: 'primary.main', fontWeight: 'bold' }}>
              ค่า BMI ของคุณคือ: {result}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, gap: 1 }}>
                {status.icon}
                <Typography variant="h5" component="h3" sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                สถานะ: {status.text}
                </Typography>
            </Box>
            
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                <DirectionsRunIcon sx={{ verticalAlign: 'middle', mr: 0.5, color: 'info.main' }} />
                {recommend}
            </Typography>
          </Box>
        )}

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Paper>
    </Box>
  );
}