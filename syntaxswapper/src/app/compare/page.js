"use client";
import { useState, useEffect } from "react";
import Javascript from "./pic/JavaScript-logo.png";
import Python from "./pic/Python.png";
import Java from "./pic/java.png";
import Go from "./pic/go.png";
import { motion } from "framer-motion";
import Csharp from "./pic/csharp.png";
import Cpp from "./pic/c++.png";
import Php from "./pic/php.png";
import PixelCard from "../components/PixelCard";
import Image from "next/image";
import "./styles.css";
import TypeScript from "./pic/typescript.png";
import conciseConversionMap from "../components/data/conversionMap";
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
    "C++": Cpp,
    Java: Java,
    Go: Go,
    PHP: Php,
    "C#": Csharp,
    TypeScript: TypeScript,
  };
  const languageColor = {
    JavaScript: "yellow",
    Python: "blue",
    "C++": "blue",
    Java: "red",
    Go: "blue",
    PHP: "purple",
    "C#": "blue",
    TypeScript: "blue",
  };
  const toggleLeftPopup = () => setShowLeftPopup(!showLeftPopup);
  const toggleRightPopup = () => setShowRightPopup(!showRightPopup);

  const mockConversion = (text, fromLang, toLang) => {
    if (fromLang === toLang) return text;
    const key = Object.keys(conciseConversionMap).find(
      (k) => conciseConversionMap[k][fromLang] === text
    );
    if (key && conciseConversionMap[key][toLang]) {
      return conciseConversionMap[key][toLang];
    }
    return `Conversion from ${fromLang} to ${toLang} not available may be wrong syntax.`;
  };

  const handleConvert = () => {
    setOutputText(mockConversion(inputText, leftLang, rightLang));
  };
  const LanguagePopup = ({
    title,
    onSelectLanguage,
    closePopup,
    anchorRef,
  }) => {
    const languages = [
      "JavaScript",
      "Python",
      "C++",
      "Java",
      "Go",
      "PHP",
      "C#",
      "TypeScript",
    ];
    const [position, setPosition] = useState({ top: 0, left: 0 });
    useEffect(() => {
      if (anchorRef) {
        const rect = anchorRef.getBoundingClientRect();
        setPosition({
          top: rect.top + rect.height / 2 - 200,
          left: rect.left + rect.width / 2 - 200,
        });
      }
    }, [anchorRef]);
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-black rounded-lg p-6 w-full max-w-md ">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <div className="grid grid-cols-2 gap-4">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  onSelectLanguage(lang);
                  closePopup();
                }}
                className="p-4 border rounded-lg hover:bg-gray-100 transition-colors hover:text-black"
              >
                {lang}
              </button>
            ))}
          </div>
          <button
            className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
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
    <div className="mt-16">
      <div className=" rounded-lg shadow-lg p-6 w-full max-w-8xl">
        <div className="flex gap-4 relative">
          <button onClick={toggleLeftPopup} className="relative">
            <Image
              src={languageLogos[leftLang]}
              width={150} // ขนาดที่ต้องการ
              height={150}
              alt={leftLang}
              className={`absolute top-[90px] right-[80px] z-10 lang-logo ${
                animateRight ? "animate-bounce" : ""
              }`}
            />
            <motion.div
              className="box"
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
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
            </motion.div>
            <h1
              className={`p-4 ${
                leftLang === "JavaScript" ? "text-black" : "text-white"
              } rounded-lg z-10`}
              style={{
                backgroundColor: languageColor[leftLang],
              }}
            >
              {leftLang}
            </h1>
          </button>

          {/* Converter */}
          <div className="flex-1 flex flex-col gap-4">
            <motion.div
              className="box"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 2.5 }}
            >
              <textarea
                rows={3}
                cols={3}
                className="w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Place Your Syntax Here ..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />

              <textarea
                rows={7}
                className="w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={outputText}
                readOnly
              />
              <button onClick={handleConvert} className="button-compare">
                Convert
              </button>
            </motion.div>
          </div>

          {/* Right Language Selection */}
          <button onClick={toggleRightPopup} className="relative">
            <Image
              src={languageLogos[rightLang]}
              width={150}
              height={150}
              alt={rightLang}
              className={`absolute top-[90px] right-[80px] z-10 lang-logo ${
                animateRight ? "animate-bounce" : ""
              }`}
            />
            <motion.div
              className="box"
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <PixelCard
                className="cursor-pointer transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundImage: `url(${languageLogos[rightLang].src})`,
                  backgroundSize: "cover",
                }}
              ></PixelCard>
            </motion.div>
            <h1
              className={`p-4 rounded-lg z-10 bg-black ${
                rightLang === "JavaScript" ? "text-black" : "text-white"
              }`}
              style={{ backgroundColor: languageColor[rightLang] }}
            >
              {rightLang}
            </h1>
          </button>
        </div>
      </div>
      {showLeftPopup && (
        <LanguagePopup
          title="Select Left Language"
          onSelectLanguage={(lang) => handleLanguageSelect(lang, true)}
          closePopup={toggleLeftPopup}
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
