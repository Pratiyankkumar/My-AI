import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "AIzaSyAWSjsFs--G4S7IVGTgtjZBy8V_Ba3XSjs";
// Reminder: This should only be for local testing

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

// ...

// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// ...

const prompt = "Who is the president of india"

const result = await model.generateContent(prompt);
const response = await result.response;
const text = response.text();
console.log(text);