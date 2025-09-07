import * as dotenv from "dotenv";
import { createError } from "../errors/error.js";
import OpenAI from "openai";

dotenv.config();

// Setup open ai api key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Controller to generate Image
export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    
    console.log("Attempting to generate image with prompt:", prompt);
    
    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt: prompt,
      n: 1,
      size: "512x512",
      response_format: "b64_json",
    });
    
    console.log("Image generated successfully");
    const generatedImage = response.data[0].b64_json;
    res.status(200).json({ photo: generatedImage });
  } catch (error) {
    console.error("Error generating image:", error);
    next(
      createError(
        error.status || 500,
        error.message || "Failed to generate image"
      )
    );
  }
};