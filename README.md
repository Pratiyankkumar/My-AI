<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism.min.css">
</head>
<body style="font-family: 'Poppins', sans-serif; line-height: 1.6; padding: 20px; background-color: #f4f4f4;">

<div style="max-width: 800px; margin: auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
  <h1 style="color: #333;">AI Chatbot</h1>

  <p>Welcome to the AI Chatbot project! This project utilizes the Google Generative AI API to create a responsive chatbot that can handle various user prompts. The chatbot is built using JavaScript and features markdown and syntax highlighting for code snippets.</p>

  <h2 style="color: #333;">Table of Contents</h2>
  <ul>
    <li><a href="#features" style="color: #1e90ff;">Features</a></li>
    <li><a href="#demo" style="color: #1e90ff;">Demo</a></li>
    <li><a href="#installation" style="color: #1e90ff;">Installation</a></li>
    <li><a href="#usage" style="color: #1e90ff;">Usage</a></li>
    <li><a href="#technologies-used" style="color: #1e90ff;">Technologies Used</a></li>
    <li><a href="#contributing" style="color: #1e90ff;">Contributing</a></li>
    <li><a href="#license" style="color: #1e90ff;">License</a></li>
  </ul>

  <h2 id="features" style="color: #333;">Features</h2>
  <ul>
    <li>Responsive AI chatbot using Google Generative AI API.</li>
    <li>Handles a variety of user prompts and generates detailed responses.</li>
    <li>Supports markdown formatting and syntax highlighting for code snippets.</li>
    <li>User-friendly interface with dynamic content display.</li>
  </ul>

  <h2 id="demo" style="color: #333;">Demo</h2>
  <p><img src="path/to/demo.gif" alt="AI Chatbot Demo" style="width:100%; border-radius:8px;"></p>

  <h2 id="installation" style="color: #333;">Installation</h2>
  <ol>
    <li><strong>Clone the repository:</strong>
      <pre style="background-color: #272822; color: #f8f8f2; padding: 5px; border-radius: 5px;"><code class="language-sh">git clone https://github.com/your-username/ai-chatbot.git
cd ai-chatbot</code></pre>
    </li>
    <li><strong>Set up the API key:</strong>
      <ul>
        <li>Obtain your API key from the Google Cloud Console.</li>
        <li>Replace the placeholder in <code style="background-color: #272822; color: #f8f8f2; padding: 5px; border-radius: 5px;">script.js</code> with your actual API key.</li>
      </ul>
      <pre style="background-color: #272822; color: #f8f8f2; padding: 5px; border-radius: 5px;"><code class="language-js">const API_KEY = "YOUR_API_KEY_HERE";</code></pre>
    </li>
    <li><strong>Install dependencies:</strong>
      <p>This project uses <code style="background-color: #272822; color: #f8f8f2; padding: 5px; border-radius: 5px;">marked</code> and <code style="background-color: #272822; color: #f8f8f2; padding: 5px; border-radius: 5px;">Prism.js</code> for markdown rendering and syntax highlighting. Ensure you have internet access to fetch these from CDNs as specified in the HTML file.</p>
    </li>
  </ol>

  <h2 id="usage" style="color: #333;">Usage</h2>
  <ol>
    <li><strong>Run the project:</strong>
      <p>Open <code style="background-color: #272822; color: #f8f8f2; padding: 5px; border-radius: 5px;">index.html</code> in your preferred web browser.</p>
    </li>
    <li><strong>Interact with the chatbot:</strong>
      <ul>
        <li>Enter your prompt in the input field and click the send icon.</li>
        <li>The chatbot will display responses with markdown formatting and syntax highlighting.</li>
      </ul>
    </li>
  </ol>

  <h2 id="technologies-used" style="color: #333;">Technologies Used</h2>
  <ul>
    <li><strong>JavaScript:</strong> Core scripting language for functionality.</li>
    <li><strong>HTML/CSS:</strong> Markup and styling for the interface.</li>
    <li><strong>Google Generative AI API:</strong> Backend AI service for generating responses.</li>
    <li><strong>Marked:</strong> Library for converting markdown to HTML.</li>
    <li><strong>Prism.js:</strong> Library for syntax highlighting.</li>
  </ul>

  <h2 id="contributing" style="color: #333;">Contributing</h2>
  <p>Contributions are welcome! Please follow these steps:</p>
  <ol>
    <li><strong>Fork the repository.</strong></li>
    <li><strong>Create a new branch:</strong>
      <pre style="background-color: #272822; color: #f8f8f2; padding: 5px; border-radius: 5px;"><code class="language-sh">git checkout -b feature-branch</code></pre>
    </li>
    <li><strong>Make your changes.</strong></li>
    <li><strong>Commit your changes:</strong>
      <pre style="background-color: #272822; color: #f8f8f2; padding: 5px; border-radius: 5px;"><code class="language-sh">git commit -m "Description of changes"</code></pre>
    </li>
    <li><strong>Push to the branch:</strong>
      <pre style="background-color: #272822; color: #f8f8f2; padding: 5px; border-radius: 5px;"><code class="language-sh">git push origin feature-branch</code></pre>
    </li>
    <li><strong>Create a pull request.</strong></li>
  </ol>

  <h2 id="license" style="color: #333;">License</h2>
  <p>This project is licensed under the MIT License. See the <a href="LICENSE" style="color: #1e90ff;">LICENSE</a> file for details.</p>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/components/prism-javascript.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/components/prism-shell-session.min.js"></script>

</body>
</html>
