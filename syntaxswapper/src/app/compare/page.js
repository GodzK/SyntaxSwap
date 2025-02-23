"use client";
import { useState, useEffect } from "react";
import Javascript from "./pic/JavaScript-logo.png";
import Python from "./pic/Python.png";
import PixelCard from "../components/PixelCard";
import Image from "next/image";

function Compare() {
  const [leftLang, setLeftLang] = useState("JavaScript");
  const [rightLang, setRightLang] = useState("Python");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("Your Output is here");
  const [showLeftPopup, setShowLeftPopup] = useState(false);
  const [showRightPopup, setShowRightPopup] = useState(false);
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  const languageLogos = {
    JavaScript: Javascript,
    Python: Python,
    "C++": "/cpp-logo.png",
    Java: "/java-logo.png",
    Go: "/go-logo.png",
    Ruby: "/ruby-logo.png",
    Swift: "/swift-logo.png",
    PHP: "/php-logo.png",
    "C#": "/csharp-logo.png",
    TypeScript: "/typescript-logo.png",
  };

  const toggleLeftPopup = () => setShowLeftPopup(!showLeftPopup);
  const toggleRightPopup = () => setShowRightPopup(!showRightPopup);

  const conversionMap = {
    JavaScript: {
      Python: {
        "console.log": "print",
        "let ": "",
        "const ": "",
        "var ": "",
        ";": "",
        "function ": "def ",
        "{": ":",
        "}": "",
        "prompt\\((.*?)\\)": "input(\\1)",
      },
    },
    Python: {
      JavaScript: {
        print: "console.log",
        "def ": "function ",
        ":": " {",
        "input\\((.*?)\\)": "prompt(\\1)",
      },
    },
  };

  const mockConversion = (text, fromLang, toLang) => {
    if (fromLang === toLang) return text;
    if (conversionMap[fromLang] && conversionMap[fromLang][toLang]) {
      let convertedText = text;
      Object.entries(conversionMap[fromLang][toLang]).forEach(([key, value]) => {
        const regex = new RegExp(key, "g");
        convertedText = convertedText.replace(regex, value);
      });
      return convertedText;
    }
    return `Conversion from ${fromLang} to ${toLang} not available.`;
  };

  const handleConvert = () => {
    setOutputText(mockConversion(inputText, leftLang, rightLang));
  };
  const LanguagePopup = ({ title, onSelectLanguage, closePopup, anchorRef }) => {
    const languages = ["JavaScript", "Python", "C++", "Java", "Go", "Ruby", "Swift", "PHP", "C#", "TypeScript"];
    const [position, setPosition] = useState({ top: 0, left: 0 });
    useEffect(() => {
      if (anchorRef) {
        const rect = anchorRef.getBoundingClientRect();
        setPosition({
          top: rect.top + rect.height / 2 - 200, // ปรับ 200 เพื่อให้อยู่กึ่งกลางแนวตั้ง
          left: rect.left + rect.width / 2 - 200, // ปรับ 200 เพื่อให้อยู่กึ่งกลางแนวนอน
        });
      }
    }, [anchorRef]);
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <div className="grid grid-cols-2 gap-4">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  onSelectLanguage(lang);
                  closePopup();
                }}
                className="p-4 border rounded-lg hover:bg-gray-100 transition-colors"
              >
                {lang}
              </button>
            ))}
          </div>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            onClick={closePopup}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  const handleLanguageSelect = (lang, isLeft) => {
    if (isLeft) {
      setLeftLang(lang);
      setAnimateLeft(true);
    } else {
      setRightLang(lang);
      setAnimateRight(true);
    }
  };

  // Reset animation after it completes
  useEffect(() => {
    if (animateLeft) {
      const timer = setTimeout(() => setAnimateLeft(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animateLeft]);

  useEffect(() => {
    if (animateRight) {
      const timer = setTimeout(() => setAnimateRight(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animateRight]);

  return (
    <div className="">
      <div className=" rounded-lg shadow-lg p-6 w-full max-w-8xl">
        <div className="flex gap-4 relative">
          {/* Left Language Selection */}
          <button onClick={toggleLeftPopup} className="relative">
            <Image
              src={languageLogos[leftLang]}
              width={100}
              height={100}
              alt={leftLang}
              className={`absolute top-[90px] left-[90px] z-10 ${
                animateLeft ? "animate-bounce" : ""
              }`}
            />
            <PixelCard
              className="cursor-pointer transition-transform duration-300 hover:scale-105"
              style={{
                backgroundImage: `url(${languageLogos[leftLang].src})`,
                backgroundSize: "cover",
              }}
            >
              <div className="p-4 bg-opacity-75 bg-black text-white rounded-lg">
                {leftLang}
              </div>
            </PixelCard>
          </button>

          {/* Converter */}
          <div className="flex-1 flex flex-col gap-4">
            <textarea
              rows={3}
              cols={3}
              className="w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Place Your Syntax Here ..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              onClick={handleConvert}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Convert
            </button>
            <textarea
              rows={4}
              className="w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={outputText}
              readOnly
            />
          </div>

          {/* Right Language Selection */}
          <button onClick={toggleRightPopup} className="relative">
            <Image
              src={languageLogos[rightLang]}
              width={100}
              height={100}
              alt={rightLang}
              className={`absolute top-[90px] right-[90px] z-10 ${
                animateRight ? "animate-bounce" : ""
              }`}
            />
            <PixelCard
              className="cursor-pointer transition-transform duration-300 hover:scale-105"
              style={{
                backgroundImage: `url(${languageLogos[rightLang].src})`,
                backgroundSize: "cover",
              }}
            >
              <div className="p-4 bg-opacity-75 bg-black text-white rounded-lg">
                {rightLang}
              </div>
            </PixelCard>
          </button>
        </div>
      </div>
      {showLeftPopup && (
        <LanguagePopup
          title="Select Left Language"
          onSelectLanguage={(lang) => handleLanguageSelect(lang, true)}
          closePopup={toggleLeftPopup}
          className="lang-img"
        />
      )}
      {showRightPopup && (
        <LanguagePopup
          title="Select Right Language"
          onSelectLanguage={(lang) => handleLanguageSelect(lang, false)}
          closePopup={toggleRightPopup}
        />
      )}
    </div>
  );
}

export default Compare;