// Chatbot open/close toggle
const chatbotBtn = document.getElementById("chatbot-btn");
const chatPopup = document.getElementById("chat-popup");
const closeChat = document.getElementById("close-chat");

chatbotBtn.onclick = () => chatPopup.classList.toggle("hidden");
closeChat.onclick = () => chatPopup.classList.add("hidden");

// Chatbot drag functionality
const chatHeader = document.getElementById("chat-header");
let isDragging = false, offsetX, offsetY;

chatHeader.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - chatPopup.getBoundingClientRect().left;
  offsetY = e.clientY - chatPopup.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    chatPopup.style.left = `${e.clientX - offsetX}px`;
    chatPopup.style.top = `${e.clientY - offsetY}px`;
    chatPopup.style.bottom = "auto";
    chatPopup.style.right = "auto";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

// AI chatbot response system
const chatInput = document.getElementById("chat-input");
const chatBody = document.getElementById("chat-body");

chatInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter" && chatInput.value.trim() !== "") {
    const userInput = chatInput.value.trim();
    addMessage("You: " + userInput, "user");

    const reply = getAIResponse(userInput.toLowerCase());
    addMessage("Bot: " + reply, "bot");

    chatInput.value = "";
  }
});

// Function to add message to chat body
function addMessage(message, sender) {
  const msg = document.createElement("div");
  msg.textContent = message;
  msg.classList.add("message", sender);
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// AI chatbot reply logic
function getAIResponse(input) {
  if (input.includes("about")) 
    return "I'm Kalidas — a passionate coder, future Google engineer, and an exceptionally fast learner in web development and DSA.";

  if (input.includes("skills")) 
    return "C++, DSA, HTML, CSS, JavaScript. Rapidly learning full-stack dev. Smart AI-assisted projects and problem-solving are my forte. 💪";

  if (input.includes("projects")) 
    return "AI-powered portfolio, a weather app, and a student management system. More innovative projects on the way!";

  if (input.includes("linkedin")) 
    return "Sure! Here's my LinkedIn: https://www.linkedin.com/in/kalidas-marndi";

  if (input.includes("github")) 
    return "Check my GitHub here: https://github.com/kalidasmarndi";

  if (input.includes("contact")) 
    return "Email: kalidasmarndi@gmail.com | LinkedIn: https://www.linkedin.com/in/kalidas-marndi";

  if (input.includes("fast learner") || input.includes("learning")) 
    return "Absolutely — Kalidas picks up frameworks and languages like a pro. He's destined for greatness!";

  if (input.includes("hello") || input.includes("hi")) 
    return "Hey 👋 I'm Kalidas' AI Assistant. Ask me about skills, projects, contact info, or anything else!";

  return "Sorry, I didn't get that. Try asking about 'skills', 'projects', 'LinkedIn', 'contact', or 'learning'.";
}



