import React, { useState, useEffect } from 'react';

const AuthImagePattern = ({ title, subtitle }) => {
  const [activeMessage, setActiveMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    { text: "Hey there! 👋", sender: "user", delay: 0 },
    { text: "Welcome to our chat!", sender: "bot", delay: 1000 },
    { text: "Ready to connect?", sender: "user", delay: 2000 },
    { text: "Let's start chatting! 💬", sender: "bot", delay: 3000 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
        setActiveMessage((prev) => (prev + 1) % messages.length);
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-12 min-h-screen">
      <div className="max-w-md text-center">
        {/* Animated Chat Interface */}
        <div className="relative w-80 h-80 mx-auto mb-8 bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white/40 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Chat Assistant</h3>
                <div className="flex items-center space-x-1 text-xs opacity-90">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-64 overflow-hidden relative">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                } transition-all duration-700 transform ${
                  index <= activeMessage 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 0.3}s`
                }}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-md'
                      : 'bg-gray-100 text-gray-800 rounded-bl-md'
                  } animate-bounce-in`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start mb-3">
                <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-2 animate-pulse">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Floating Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-30 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            {title}
          </h2>
          <p className="text-gray-600 text-lg animate-fade-in-delay">
            {subtitle}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% { transform: scale(0.3) rotate(-15deg); opacity: 0; }
          50% { transform: scale(1.05) rotate(5deg); }
          70% { transform: scale(0.95) rotate(-2deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out 0.5s both;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.8s both;
        }
      `}</style>
    </div>
  );
};

export default AuthImagePattern;