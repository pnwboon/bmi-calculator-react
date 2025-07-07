import "./BMICalculator.css";
import { useState } from "react";

export default function BMICalculator(){
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [result, setResult] = useState(null)
    const [status, setStatus] = useState("");
    const [recommend, setRecommend] = useState("")

    function resultBMI(e){
        e.preventDefault()
        const numWeight = parseFloat(weight);
        const numHeight = parseFloat(height);

        const heightMeters = numHeight / 100;
        const calculator = (numWeight / (heightMeters * heightMeters)).toFixed(2)

        let status = ""
        let recommend = ""
        if (calculator < 18.5) {
            status = "สถานะ: น้ำหนักน้อยกว่าเกณฑ์ปกติ";
            recommend = "น้ำหนักของคุณค่อนข้างน้อย ลองปรึกษาผู้เชี่ยวชาญเพื่อหาวิธีเพิ่มน้ำหนักที่เหมาะสมและดูแลสุขภาพโดยรวมให้แข็งแรงขึ้น"
        } else if (calculator <= 22.9) {
            status = "สถานะ: น้ำหนักอยู่ในเกณฑ์ดี"
            recommend = "ยอดเยี่ยมเลยครับ น้ำหนักของคุณอยู่ในเกณฑ์ที่เหมาะสมแล้ว! รักษาสุขภาพดีๆ แบบนี้ต่อไปด้วยการกินอาหารมีประโยชน์และออกกำลังกายสม่ำเสมอนะครับ"
        } else if (calculator <= 24.9) {
            status = "สถานะ: น้ำหนักเริ่มเกินเกณฑ์"
            recommend = "น้ำหนักของคุณเกินเกณฑ์มาเล็กน้อย การปรับเปลี่ยนพฤติกรรมการกินและเพิ่มการออกกำลังกายจะช่วยให้กลับมาสู่เกณฑ์สุขภาพที่ดีได้ครับ ลองเริ่มดู"
        } else if (calculator <= 29.9) {
            status = "สถานะ: มีภาวะน้ำหนักเกิน"
            recommend = "คุณมีภาวะน้ำหนักเกินในระดับหนึ่ง ซึ่งอาจเพิ่มความเสี่ยงด้านสุขภาพ ลองปรึกษาแพทย์หรือนักโภชนาการเพื่อวางแผนการดูแลและลดน้ำหนักอย่างถูกวิธีนะครับ"
        } else {
            status = "สถานะ: เข้าข่ายภาวะอ้วนรุนแรง"
            recommend = "นี่เป็นระดับที่ต้องให้ความสำคัญกับสุขภาพอย่างมากครับ ภาวะอ้วนระดับนี้มีความเสี่ยงสูงต่อปัญหาสุขภาพร้ายแรง ควรปรึกษาแพทย์โดยเร็วที่สุดเพื่อรับคำแนะนำและวางแผนการจัดการน้ำหนักอย่างจริงจังครับ"
        }

        setResult(calculator);
        setStatus(status)
        setRecommend(recommend)
    }

    function clearInputs() {
        setWeight("");
        setHeight("");
        setResult(null);
        setStatus("");
        setRecommend("");
    }
    
    return(
        <section className="container">
            <form onSubmit={resultBMI}>
                <div className="form-group">
                    <label>น้ำหนัก: </label>
                    <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder="กิโลกรัม" />
                </div>
                <div className="form-group">
                    <label>ส่วนสูง: </label>
                    <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)} placeholder="เซนติเมตร"/>
                </div>
                <button type="submit" className="btn-calculator" disabled={weight.trim()==="" || height.trim()===""}>คำนวณ</button>
                <button type="button" onClick={clearInputs} className="btn-clear">ล้างข้อมูล</button>
            </form>
                <div className="result-section">
                    <h2>ค่า BMI ของคุณคือ: {result}</h2>
                    <br />
                    <h3>{status}</h3>
                    <br />
                    <p>{recommend}</p>
                </div>
        </section>
    );
}