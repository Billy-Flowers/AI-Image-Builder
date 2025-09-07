import express from "express";
import rateLimit from 'express-rate-limit';
import { generateImage } from "../controllers/GenerateImage.js";

const router = express.Router();

const imageGenerationLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 6, 
  message: { error: "Rate limit exceeded. Maximum 6 images per hour." },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
  const clientIP = req.ip || req.connection.remoteAddress;
  const adminIPs = ['127.0.0.1', '::1', '::ffff:127.0.0.1', process.env.ADMIN_IP];
  return adminIPs.includes(clientIP);
}
});

router.post("/", imageGenerationLimiter, generateImage);

export default router;