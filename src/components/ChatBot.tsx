import { useState, useRef, useEffect, type FormEvent } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! 👋 Welcome to Swastik.\n\nAre you looking for queries on AC ?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [chatStep, setChatStep] = useState<'start' | 'askedSanitary' | 'finished'>('start');
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const messageText = input.trim().toLowerCase();
      const isYes = /^(yes|y(es)?|yeah|yup|sure|ok|okay|of course|ya)$/i.test(messageText);
      const isNo = /^(no|n(o)?|nah|nope)$/i.test(messageText);
      let responseText = '';

      if (chatStep === 'start') {
        if (isYes) {
          responseText = 'Great! For AC queries, please call 9108315736.';
          setChatStep('finished');
        } else if (isNo) {
          responseText = 'Are you looking for queries on sanitary items?';
          setChatStep('askedSanitary');
        } else {
          responseText = 'Please answer with yes or no.\n\nAre you looking for queries on AC ?';
        }
      } else if (chatStep === 'askedSanitary') {
        if (isYes) {
          responseText = 'Sure! For sanitary items queries, please call 9036744112.';
          setChatStep('finished');
        } else if (isNo) {
          responseText = 'Okay. For AC queries call 9108315736. For sanitary items call 9036744112.';
          setChatStep('finished');
        } else {
          responseText = 'Please answer with yes or no.\n\nAre you looking for queries on sanitary items?';
        }
      } else {
        responseText = 'For AC queries call 9108315736. For sanitary items call 9036744112.';
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thanks for reaching out! Please call 9108315736 for AC and 9036744112 for sanitary items.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col h-[500px] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand text-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">Swastik Support</h3>
                <p className="text-xs opacity-80">We typically reply instantly</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-brand text-white rounded-br-none'
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-lg rounded-bl-none">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-brand transition-colors"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-brand text-white p-2 rounded-lg hover:bg-brand-dark transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-brand text-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-dark transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}
