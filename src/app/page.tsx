"use client";

import { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import { getFullUrl } from '../utils/urlHelper';
import { Bot, Github, Linkedin, Mail, Twitter} from 'lucide-react';

export default function Home() {
  const [url, setUrl] = useState<string>('');

  const handleSubmit = () => {
    if (url) {
      const fullUrl = getFullUrl(url);
      window.location.href = fullUrl;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-between">
      {/* Header */}
      <header className="w-full xl:max-w-5xl p-4 flex flex-row justify-between items-center bg-gray-800">
        <div className="text-2xl font-bold flex items-center justify-center gap-3 xl:max-w-5xl">
          <Bot className='lg:h-8 lg:w-8 h-12 w-12' />
          <span className='hidden md:block'>WebChatAI</span>
        </div>
        <Button 
        onClick={() => window.location.href = "https://usen-obong.vercel.app/"} 
          className=" rounded-full bg-indigo-600 hover:bg-indigo-700 text-white">
            Meet the make
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center mt-10 space-y-8 px-4 sm:px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center">
          Turn Your Website into an AI Chatbox
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 text-center max-w-2xl">
          Enter your website URL below to instantly transform it into an interactive AI chatbox.
        </p>
        
        <div className="flex flex-row space-x-2 ">
          <Input 
            placeholder="Enter your website URL" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)}
            className="w-80 text-white placeholder-gray-400 text-[17px]" 
          />
          <Button onClick={handleSubmit} className="bg-indigo-600 hover:bg-indigo-700 text-white">Submit</Button>
        </div>
      </main>

      {/* Video Preview */}
      <section className="mt-16 w-full max-w-4xl px-4">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="your-video-url-here"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-5 p-4 bg-gray-800 text-center">
        <div className="flex justify-center lg:space-x-6 space-x-3 mb-4">
          <a href="mailto:jabulanietokakpan@gmail.com" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-[1.2]">
            <Mail className="h-6 w-6" />
          </a>
          <a href="https://x.com/jabulaniusen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-[1.2]">
            <Twitter className="h-6 w-6" /> 
          </a>
          <a href="https://github.com/JabulaniUsen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-[1.2]">
            <Github className="h-6 w-6" /> 
          </a>
          <a href="https://www.linkedin.com/in/usenobong-etokakpan-60146a21b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-[1.2]">
            <Linkedin className="h-6 w-6" /> 
          </a>
        </div>
        <p className="text-gray-500">
          © {new Date().getFullYear()} Who tf built this? 
          <a href="https://usen-obong.vercel.app/"
            target="_blank" rel="noopener noreferrer"
            className="text-white hover:text-gray-100 hover:scale-[1.2] ml-[0.50rem] transition-all cursor-pointer"
          >
            Usenobong (Jabulani)
          </a>.
        </p>
      </footer>
    </div>
  );
}