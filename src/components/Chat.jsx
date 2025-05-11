import React, { useState, useEffect } from 'react';
import { FaCommentAlt } from 'react-icons/fa';
import axios from 'axios';

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [inactivityTimer, setInactivityTimer] = useState(null);

  const toggleChatWindow = () => {
    setIsChatOpen((prev) => !prev);
  };

  const hardcodedResponses = {
    'hi': 'Hello! How can I assist you today?',
    'hello': 'Hi there! Need any help?',
    'hey': 'Hey! How can I help you today?',
    'how are you?': "I'm just a bot, but I'm here and ready to help you!",
    'what is your name?': "I'm your friendly assistant bot. You can call me ChatBuddy!",
    'what do you do?': "I'm here to assist you with questions about our services and guide you through the process.",
    'thank you': "You're welcome! 😊 Let me know if you need anything else.",
    'thanks': "Glad to help!",
    'bye': "Goodbye! Have a great day!",
    'goodbye': "Take care! Come back if you have more questions.",
    'how do i sell my license?': 'To sell your license, you need to submit the details of the unused software license. We will provide you with a valuation and assist with the transfer process.',
    'what is the process for selling?': 'First, upload your license details, then we will evaluate it and provide a competitive quote. Once you accept the offer, payment is processed quickly.',
    'what are your business hours?': 'Our business hours are from 9 AM to 6 PM, Monday to Friday.',
    'how can i contact customer support?': 'You can contact our customer support at support@company.com or call us at 123-456-7890.',
    'do you offer any discounts?': 'Yes, we have seasonal discounts. Please subscribe to our newsletter for updates.',
  };

  const handleSendMessage = async () => {
    if (userInput.trim()) {
      const normalizedInput = userInput.trim().toLowerCase();
      const newMessages = [...messages, { text: userInput, sender: 'user' }];
      setMessages(newMessages);
      setUserInput('');

      if (hardcodedResponses[normalizedInput]) {
        setMessages((prev) => [...prev, { text: hardcodedResponses[normalizedInput], sender: 'bot' }]);
      } else {
        setLoading(true);
        try {
          const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
            {
              contents: [{ parts: [{ text: userInput }] }],
            },
            {
              headers: { 'Content-Type': 'application/json' },
            }
          );

          const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
          setMessages((prev) => [
            ...prev,
            { text: reply || 'Sorry, I could not get a proper answer.', sender: 'bot' },
          ]);
        } catch (error) {
          console.error('Gemini API Error:', error);
          setMessages((prev) => [
            ...prev,
            {
              text: 'Sorry, I am having trouble retrieving information. Please try again later.',
              sender: 'bot',
            },
          ]);
        } finally {
          setLoading(false);
        }
      }
    }
  };

  // Auto-close chat after 1 min of inactivity
  useEffect(() => {
    if (isChatOpen) {
      if (inactivityTimer) clearTimeout(inactivityTimer);

      const timer = setTimeout(() => {
        setIsChatOpen(false);
      }, 60000); // 1 min

      setInactivityTimer(timer);
    }

    return () => {
      if (inactivityTimer) clearTimeout(inactivityTimer);
    };
  }, [messages, isChatOpen]);

  return (
    <div>
      {/* Floating Chat Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={toggleChatWindow}
          className="bg-[#F95738] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
          title="Chat with us"
        >
          <FaCommentAlt className="text-2xl" />
        </button>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-16 left-4 w-80 bg-white shadow-lg rounded-xl p-4 z-50">
          <div className="max-h-60 overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : ''}`}>
                <div
                  className={`p-2 rounded-xl ${
                    msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-center text-gray-500">Bot is typing...</div>}
          </div>

          <div className="flex">
            <input
              type="text"
              className="flex-grow p-2 border rounded-md"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 p-2 bg-blue-500 text-white rounded-full"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
