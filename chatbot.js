

const API_KEY = "AQ.Ab8RN6LG0E_9GJFv2Q_Za3PDStx3U4xBKzBbszDSgk4w6iS6cQ";

const SYSTEM_PROMPT = `
You are the personal AI Assistant for Sahan Madhushanka's portfolio website.

Answer politely, professionally and briefly.

Information about Sahan:

- Software Developer
- Data Science Undergraduate at SLTC Research University
- Sri Lanka

Skills:
Python
Java
JavaScript
HTML
CSS
SQL
Pandas
Arduino
Adobe Photoshop

Projects:
- Hotel Booking System
- 3D Virtual Try-On System
- Portfolio Website

Services:
- Web Development
- Data Analysis
- Photoshop Editing

If someone asks for contact information, tell them to visit the Contact page.

Keep answers under 3 sentences.
`;

document.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.getElementById("chatbot-toggle-btn");
    const closeBtn = document.getElementById("chatbot-close-btn");
    const chatBox = document.querySelector(".chatbot-box");

    const sendBtn = document.getElementById("chat-send-btn");
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");

    if (!toggleBtn || !chatBox) return;

    toggleBtn.onclick = () => chatBox.classList.toggle("hidden");
    closeBtn.onclick = () => chatBox.classList.add("hidden");

    function appendMessage(text, className) {

        const div = document.createElement("div");
        div.className = `message ${className}`;
        div.textContent = text;

        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        return div;
    }

    let WORKING_MODEL = null;

    async function findWorkingModel() {

        if (WORKING_MODEL) return WORKING_MODEL;

        try {

            const res = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`
            );

            const data = await res.json();

            console.log("Models:", data);

            if (!data.models) {
                throw new Error("Cannot load models.");
            }

            for (const model of data.models) {

                if (
                    model.supportedGenerationMethods &&
                    model.supportedGenerationMethods.includes("generateContent")
                ) {

                    WORKING_MODEL = model.name.replace("models/", "");
                    console.log("Using Model:", WORKING_MODEL);

                    return WORKING_MODEL;
                }
            }

            throw new Error("No generateContent model found.");

        } catch (err) {

            console.error(err);
            throw err;

        }
    console.log(JSON.stringify(model, null, 2));

    }

    async function fetchGemini(userMessage) {

        try {

            const model = await findWorkingModel();

            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        text:
                                            SYSTEM_PROMPT +
                                            "\n\nUser: " +
                                            userMessage
                                    }
                                ]
                            }
                        ]
                    })
                }
            );

            const data = await response.json();

            console.log(data);

            if (!response.ok) {

                return "API Error: " + data.error.message;

            }

            if (
                data.candidates &&
                data.candidates.length > 0
            ) {

                return data.candidates[0].content.parts[0].text;

            }

            return "No response received.";

        } catch (err) {

            console.error(err);

            return "Unable to connect to Gemini API.";

        }

    }

    async function handleSend() {

        const message = chatInput.value.trim();

        if (!message) return;

        appendMessage(message, "user-message");

        chatInput.value = "";

        const thinking = appendMessage(
            "Thinking...",
            "bot-message"
        );

        const reply = await fetchGemini(message);

        thinking.textContent = reply;

    }

    sendBtn.addEventListener("click", handleSend);

    chatInput.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            handleSend();

        }

    });

});
console.log(model);