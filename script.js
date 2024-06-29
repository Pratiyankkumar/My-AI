import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from 'https://cdn.jsdelivr.net/npm/marked@latest/lib/marked.esm.js';

// Fetch your API_KEY
const API_KEY = "AIzaSyAWSjsFs--G4S7IVGTgtjZBy8V_Ba3XSjs";
// Reminder: This should only be for local testing

// Access your API key
const genAI = new GoogleGenerativeAI(API_KEY);

// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to handle user input and get AI response
async function getAIResponse() {
  const textInput = document.querySelector('.js-input').value || 'Welcome me';
  const prompt = textInput;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;

    // Check if there are candidates and handle accordingly
    if (response.candidates && response.candidates.length > 0) {
      if (response.candidates.length > 1) {
        console.warn(`This response had ${response.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`);
      }

      const firstCandidate = response.candidates[0];
      const markdownText = firstCandidate.content && firstCandidate.content.parts
        ? firstCandidate.content.parts.map(part => {
          if (part.text) return part.text;
          if (part.executableCode) return `\n\`\`\`python\n${part.executableCode.code}\n\`\`\`\n`;
          if (part.codeExecutionResult) return `\n\`\`\`\n${part.codeExecutionResult.output}\n\`\`\`\n`;
        }).join("")
        : firstCandidate.content;

      const htmlText = marked(markdownText);

      console.log(`User: ${prompt}`);
      console.log(`AI: ${htmlText}`);
      generateHTML(prompt, htmlText);
    } else {
      console.error("No candidates found in the response.");
    }
  } catch (error) {
    console.error("Error fetching AI response:", error);
  }
}

function generateHTML(prompt, text) {
  let html = '';
  html += `
    <div class="output-container">
      <div class="user-question">
        <img class="user-image" src="https://lh3.googleusercontent.com/a/ACg8ocIt6zK9K8Mbhag_fzcDlhr9o0U8BnkXHVh5v_fJN39SErQhZ64=s64-c" alt="">
        <p class="question">${prompt}</p>
      </div>
      <div class="ai-response">
        <img class="ai-image" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png" alt="">
        <div class="response">${text}</div>
      </div>
    </div>
  `;
  document.querySelector('.js-output-container').innerHTML = html;

  // Re-run the syntax highlighter
  if (window.Prism) {
    Prism.highlightAll();
  }
}

document.querySelector('.js-output-container').classList.add('visibility-off');

// Add event listener to the send icon button
document.querySelector('.send-icon').addEventListener('click', () => {
  getAIResponse();
  document.querySelector('.js-card2').classList.add('visibility-off');
  document.querySelector('.js-card1').classList.add('visibility-off');
  document.querySelector('.js-output-container').classList.remove('visibility-off');
    });