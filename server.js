import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// 환경변수 로드
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 80; // 포트 80 대신 3001 사용

// CORS 설정
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

// JSON 파싱을 위한 미들웨어 추가
app.use(express.json());

// Nodemailer 설정
const transporter = nodemailer.createTransport({
  service: "naver",
  auth: {
    user: process.env.EMAILADDRESS,
    pass: process.env.EMAILPASSWORD,
  },
});

// 이메일 발송 함수
async function sendEmail(name, phone, email, inquiry, message) {
  console.log(name, phone, email, inquiry, message);
  try {
    await transporter.sendMail({
      from: "creamoff2021@naver.com",
      to: "creamoff2021@naver.com",
      subject: "홈페이지 문의",
      text: `이름 : ${name}
전화번호 : ${phone}
이메일 : ${email}
문의유형 : ${inquiry}
메시지 : ${message}`,
    });

    return true;
  } catch (error) {
    console.error("이메일 발송 실패:", error);
    return false;
  }
}

app.post("/send", async (req, res) => {
  console.log(req.body);

  const { name, phone, email, inquiry, message } = req.body;

  try {
    const result = await sendEmail(name, phone, email, inquiry, message);
    console.log(result);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.use(express.static(path.join(__dirname, "dist")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const dataDir = path.join(__dirname, "public", "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

app.post("/addList", (req, res) => {
  try {
    const { email } = req.body;
    console.log("email : ", email);

    const filePath = path.join(__dirname, "public", "data", "lists.csv");
    fs.appendFileSync(filePath, email + "\n");
    res.json({ success: true, message: "Email added successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, error: e.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
