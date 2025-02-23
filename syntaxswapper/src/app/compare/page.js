"use client";
import { useState, useEffect } from "react";
import Javascript from "./pic/JavaScript-logo.png";
import Python from "./pic/Python.png";
import Java from "./pic/java.png"
import Go from "./pic/go.png"
import Csharp from "./pic/csharp.png"
import Cpp from "./pic/c++.png"
import Php from "./pic/php.png"
import PixelCard from "../components/PixelCard";
import Image from "next/image";
import TypeScript from "./pic/typescript.png"
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

  const toggleLeftPopup = () => setShowLeftPopup(!showLeftPopup);
  const toggleRightPopup = () => setShowRightPopup(!showRightPopup);

  const conciseConversionMap = {
    "console.log()": {
      JavaScript: "console.log()",
      Python: "print()",
      PHP: "echo",
      Java: "System.out.println()",
      "C++": "std::cout <<",
      TypeScript: "console.log()",
    },
    "print()": {
      JavaScript: "console.log()",
      Python: "print()",
      PHP: "echo",
      Java: "System.out.println()",
      "C++": "std::cout <<",
      TypeScript: "console.log()",
    },
    "echo": {
      JavaScript: "console.log()",
      Python: "print()",
      PHP: "echo",
      Java: "System.out.println()",
      "C++": "std::cout <<",
      TypeScript: "console.log()",
    },
    "System.out.println()": {
      JavaScript: "console.log()",
      Python: "print()",
      PHP: "echo",
      Java: "System.out.println()",
      "C++": "std::cout <<",
      TypeScript: "console.log()",
    },
    "std::cout <<": {
      JavaScript: "console.log()",
      Python: "print()",
      PHP: "echo",
      Java: "System.out.println()",
      "C++": "std::cout <<",
      TypeScript: "console.log()",
    },
    "let variable": {
      JavaScript: "let variable",
      Python: "variable =",
      PHP: "$variable =",
      Java: "variable",
      "C++": "variable",
      TypeScript: "let variable",
    },
    "const constant": {
      JavaScript: "const constant",
      Python: "CONSTANT =",
      PHP: "define('CONSTANT', value)",
      Java: "final constant",
      "C++": "const constant",
      TypeScript: "const constant",
    },
    "function name() {}": {
      JavaScript: "function name() {}",
      Python: "def name():",
      PHP: "function name() {}",
      Java: "public static void name() {}",
      "C++": "void name() {}",
      TypeScript: "function name() {}",
    },
    "array.push(element)": {
      JavaScript: "array.push(element)",
      Python: "array.append(element)",
      PHP: "array_push(array, element)",
      Java: "array.add(element)",
      "C++": "array.push_back(element)",
      TypeScript: "array.push(element)",
    },
    "array[index]": {
      JavaScript: "array[index]",
      Python: "array[index]",
      PHP: "array[index]",
      Java: "array.get(index)",
      "C++": "array[index]",
      TypeScript: "array[index]",
    },
    "string.length": {
      JavaScript: "string.length",
      Python: "len(string)",
      PHP: "strlen(string)",
      Java: "string.length()",
      "C++": "string.length()",
      TypeScript: "string.length",
    },
    "string.substring(start, end)": {
      JavaScript: "string.substring(start, end)",
      Python: "string[start:end]",
      PHP: "substr(string, start, length)",
      Java: "string.substring(start, end)",
      "C++": "string.substr(start, length)",
      TypeScript: "string.substring(start, end)",
    },
    "// comment": {
      JavaScript: "// comment",
      Python: "# comment",
      PHP: "// comment",
      Java: "// comment",
      "C++": "// comment",
      TypeScript: "// comment",
    },
    "/* comment */": {
      JavaScript: "/* comment */",
      Python: '""" comment """',
      PHP: "/* comment */",
      Java: "/* comment */",
      "C++": "/* comment */",
      TypeScript: "/* comment */",
    },
    "if (condition) {}": {
      JavaScript: "if (condition) {}",
      Python: "if condition:",
      PHP: "if (condition) {}",
      Java: "if (condition) {}",
      "C++": "if (condition) {}",
      TypeScript: "if (condition) {}",
    },
    "for (let i = 0; i < 10; i++) {}": {
      JavaScript: "for (let i = 0; i < 10; i++) {}",
      Python: "for i in range(10):",
      PHP: "for ($i = 0; $i < 10; $i++) {}",
      Java: "for (int i = 0; i < 10; i++) {}",
      "C++": "for (int i = 0; i < 10; i++) {}",
      TypeScript: "for (let i = 0; i < 10; i++) {}",
    },
    "while (condition) {}": {
      JavaScript: "while (condition) {}",
      Python: "while condition:",
      PHP: "while (condition) {}",
      Java: "while (condition) {}",
      "C++": "while (condition) {}",
      TypeScript: "while (condition) {}",
    },
    "try {} catch (error) {}": {
      JavaScript: "try {} catch (error) {}",
      Python: "try: except Exception as error:",
      PHP: "try {} catch (Exception $error) {}",
      Java: "try {} catch (Exception error) {}",
      "C++": "try {} catch (exception& error) {}",
      TypeScript: "try {} catch (error) {}",
    },
  };

  const mockConversion = (text, fromLang, toLang) => {
    if (fromLang === toLang) return text;
    const key = Object.keys(conciseConversionMap).find(k => conciseConversionMap[k][fromLang] === text);
    if (key && conciseConversionMap[key][toLang]) {
      return conciseConversionMap[key][toLang];
    }
    return `Conversion from ${fromLang} to ${toLang} not available.`;
  };

  const handleConvert = () => {
    setOutputText(mockConversion(inputText, leftLang, rightLang));
  };
  const LanguagePopup = ({ title, onSelectLanguage, closePopup, anchorRef }) => {
    const languages = ["JavaScript", "Python", "C++", "Java", "Go", "PHP", "C#", "TypeScript"];
    const [position, setPosition] = useState({ top: 0, left: 0 });
    useEffect(() => {
      if (anchorRef) {
        const rect = anchorRef.getBoundingClientRect();
        setPosition({
          top: rect.top + rect.height / 2 - 200,
          left: rect.left + rect.width / 2 - 200,
        });
      }
    }, [anchorRef]);return (
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
  }, [animateLeft ,]);

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
              width={150}
              height={150}
              alt={rightLang}
              className={`absolute top-[90px] right-[80px] z-10 lang-logo ${
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