import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from 'https://cdn.jsdelivr.net/npm/marked@latest/lib/marked.esm.js';

// Fetch your API_KEY
const API_KEY = "AIzaSyAWSjsFs--G4S7IVGTgtjZBy8V_Ba3XSjs";
// Reminder: This should only be for local testing

// Access your API key
const genAI = new GoogleGenerativeAI(API_KEY);

// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

let textInput;
let htmlText;

// Initialize session history
if (!sessionStorage.getItem('history')) {
  sessionStorage.setItem('history', JSON.stringify([]));
}

// Function to handle user input and get AI response
async function getAIResponse(value) {
  textInput = document.querySelector('.js-input').value.toLowerCase() || value;

  // Retrieve session history
  const history = JSON.parse(sessionStorage.getItem('history'));

  // Add user input to history
  history.push({ sender: 'user', message: textInput });

  // Combine context and new input
  const fullContext = history.map(entry => `${entry.sender}: ${entry.message}`).join('\n');

  try {
    const result = await model.generateContent(fullContext);
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

      htmlText = marked(markdownText);

      // Add AI response to history
      history.push({ sender: 'ai', message: htmlText });

      // Update session history
      sessionStorage.setItem('history', JSON.stringify(history));

      console.log(`User: ${textInput}`);
      console.log(`AI: ${htmlText}`);
      generateHTML(textInput, htmlText);
    } else {
      console.error("No candidates found in the response.");
    }
  } catch (error) {
    console.error("Error fetching AI response:", error);
  }
}

function generateHTML(prompt, text) {
  let html = '';
  if (prompt === 'who is pratiyank') {
    text = 'Pratiyank is the coding wizard who just escaped the clutches of school, armed with a keyboard and a dream. Currently mastering the arts of JavaScript, HTML, and CSS, Pratiyank is on a quest to conquer the web development world. When not coding, you might find him convincing his computer to laugh at his jokes. Beware: approaching Pratiyank may result in uncontrollable bouts of laughter and a sudden urge to learn coding!'
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
  } else {
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
}

document.querySelector('.js-output-container').classList.add('visibility-off');

// Add event listener to the send icon button
document.querySelector('.send-icon').addEventListener('click', () => {
  getAIResponse();
  document.querySelector('.js-card2').classList.add('visibility-off');
  document.querySelector('.js-card1').classList.add('visibility-off');
  document.querySelector('.js-output-container').classList.remove('visibility-off');
  document.querySelector('.js-input').value = '';
  document.querySelector('.js-output-container').innerHTML = `
    <div class="output-container">
        <div class="user-question">
          <img class="user-image" src="https://lh3.googleusercontent.com/a/ACg8ocIt6zK9K8Mbhag_fzcDlhr9o0U8BnkXHVh5v_fJN39SErQhZ64=s64-c" alt="">
          <p class="question"><img class="loading-image" src="images/Animation - 1719798943044.gif" alt=""></p>
        </div>
        <div class="ai-response">
          <img class="ai-image" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png" alt="">
          <p class="response">
            <img class="loading-image" src="images/Animation - 1719798943044.gif" alt="">
          </p>
        </div>
    </div>
  `
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    getAIResponse();
    document.querySelector('.js-card2').classList.add('visibility-off');
    document.querySelector('.js-card1').classList.add('visibility-off');
    document.querySelector('.js-output-container').classList.remove('visibility-off');
    document.querySelector('.js-input').value = '';
    document.querySelector('.js-output-container').innerHTML = `
      <div class="output-container">
          <div class="user-question">
            <img class="user-image" src="https://lh3.googleusercontent.com/a/ACg8ocIt6zK9K8Mbhag_fzcDlhr9o0U8BnkXHVh5v_fJN39SErQhZ64=s64-c" alt="">
            <p class="question"><img class="loading-image" src="images/Animation - 1719798943044.gif" alt=""></p>
          </div>
          <div class="ai-response">
            <img class="ai-image" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png" alt="">
            <p class="response">
              <img class="loading-image" src="images/Animation - 1719798943044.gif" alt="">
            </p>
          </div>
      </div>
    `
  }
});

document.querySelectorAll('.js-suggest').forEach((suggestion) => {
  suggestion.addEventListener('click', () => {
    textInput = suggestion.innerHTML;
    getAIResponse(textInput);
    document.querySelector('.js-card2').classList.add('visibility-off');
    document.querySelector('.js-card1').classList.add('visibility-off');
    document.querySelector('.js-output-container').classList.remove('visibility-off');
    document.querySelector('.js-input').value = '';
    document.querySelector('.js-output-container').innerHTML = `
      <div class="output-container">
          <div class="user-question">
            <img class="user-image" src="https://lh3.googleusercontent.com/a/ACg8ocIt6zK9K8Mbhag_fzcDlhr9o0U8BnkXHVh5v_fJN39SErQhZ64=s64-c" alt="">
            <p class="question"><img class="loading-image" src="images/Animation - 1719798943044.gif" alt=""></p>
          </div>
          <div class="ai-response">
            <img class="ai-image" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png" alt="">
            <p class="response">
              <img class="loading-image" src="images/Animation - 1719798943044.gif" alt="">
            </p>
          </div>
      </div>
    `
  })
})
