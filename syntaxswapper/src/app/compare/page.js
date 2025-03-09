"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Javascript from "./pic/JavaScript-logo.png";
import Python from "./pic/Python.png";
import Java from "./pic/java.png";
import Go from "./pic/go.png";
import Csharp from "./pic/csharp.png";
import Cpp from "./pic/c++.png";
import Php from "./pic/php.png";
import TypeScript from "./pic/typescript.png";

const conciseConversionMap = {
  "console.log()": {
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
    Java: "int variable",
    "C++": "int variable",
    TypeScript: "let variable",
  },
  "const constant": {
    JavaScript: "const constant",
    Python: "CONSTANT =",
    PHP: "define('CONSTANT', value)",
    Java: "final int constant",
    "C++": "const int constant",
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
  "try {} catch (error) {}": {
    JavaScript: "try {} catch (error) {}",
    Python: "try: except Exception as error:",
    PHP: "try {} catch (Exception $error) {}",
    Java: "try {} catch (Exception error) {}",
    "C++": "try {} catch (exception& error) {}",
    TypeScript: "try {} catch (error) {}",
  },
};

function Compare() {
  const [leftLang, setLeftLang] = useState("JavaScript");
  const [rightLang, setRightLang] = useState("Python");
  const [selectedSyntax, setSelectedSyntax] = useState("");
  const [outputText, setOutputText] = useState("Your converted code will appear here");
  const [showLeftPopup, setShowLeftPopup] = useState(false);
  const [showRightPopup, setShowRightPopup] = useState(false);
  const [leftLangSelected, setLeftLangSelected] = useState(false); // เพื่อควบคุม Animation การ์ดซ้าย
  const [rightLangSelected, setRightLangSelected] = useState(false); // เพื่อควบคุม Animation การ์ดขวา

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
    JavaScript: "#f7df1e",
    Python: "#3572A5",
    "C++": "#004482",
    Java: "#B07219",
    Go: "#00ADD8",
    PHP: "#787CB5",
    "C#": "#178600",
    TypeScript: "#3178C6",
  };

  const syntaxOptions = Object.keys(conciseConversionMap);

  const convertSyntax = (syntax, fromLang, toLang) => {
    if (fromLang === toLang) return syntax;
    const conversion = conciseConversionMap[syntax]?.[toLang];
    return conversion || `No conversion available for ${fromLang} to ${toLang}.`;
  };

  const handleSyntaxSelect = (syntax) => {
    setSelectedSyntax(syntax);
    setOutputText(convertSyntax(syntax, leftLang, rightLang));
  };

  // คอมโพเนนต์ Custom Card
  const LanguageCard = ({ lang, color, logo, isSelected, onClick }) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="h-64 w-full bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl cursor-pointer transition-all duration-300 shadow-lg relative overflow-hidden"
        style={{ border: `4px solid ${color}` }}
        onClick={onClick}
      >
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: 1, duration: 0.8 }}
                className="mb-4"
              >
                <Image src={logo} width={100} height={100} alt={lang} className="drop-shadow-lg" />
              </motion.div>
              <h2 className="text-xl font-bold text-white drop-shadow-md bg-gray-900 bg-opacity-70 px-4 py-2 rounded-full">
                {lang}
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
        {!isSelected && (
          <div className="h-full flex items-center justify-center">
            <p className="text-white text-lg font-semibold opacity-50">Click to select</p>
          </div>
        )}
      </motion.div>
    );
  };

  const LanguagePopup = ({ title, onSelectLanguage, closePopup }) => {
    const languages = ["JavaScript", "Python", "C++", "Java", "Go", "PHP", "C#", "TypeScript"];
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 w-full max-w-lg shadow-2xl border border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-white text-center">{title}</h2>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang) => (
                <motion.button
                  key={lang}
                  whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${languageColor[lang]}` }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSelectLanguage(lang)}
                  className="p-4 bg-gray-800 rounded-lg text-white hover:text-black hover:bg-white transition-all duration-300"
                  style={{ border: `2px solid ${languageColor[lang]}` }}
                >
                  {lang}
                </motion.button>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
              onClick={closePopup}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-700"
      >
        <h1 className="text-4xl font-extrabold text-center text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Syntax Converter
        </h1>

        <div className="flex items-center justify-between gap-8">
          {/* Left Language */}
          <div className="flex-1">
            <LanguageCard
              lang={leftLang}
              color={languageColor[leftLang]}
              logo={languageLogos[leftLang]}
              isSelected={leftLangSelected}
              onClick={() => setShowLeftPopup(true)}
            />
          </div>

          {/* Converter */}
          <div className="flex-1 flex flex-col gap-6">
            <motion.select
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="w-full p-4 bg-gray-800 text-white rounded-xl border border-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-300"
              value={selectedSyntax}
              onChange={(e) => handleSyntaxSelect(e.target.value)}
            >
              <option value="" className="bg-gray-900">
                Choose a Syntax
              </option>
              {syntaxOptions.map((syntax) => (
                <option key={syntax} value={syntax} className="bg-gray-900">
                  {syntax} ({leftLang})
                </option>
              ))}
            </motion.select>

            <motion.textarea
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              rows={6}
              className="w-full p-4 bg-gray-800 text-white rounded-xl border border-gray-600 resize-none focus:outline-none focus:ring-4 focus:ring-purple-500 transition-all duration-300 font-mono"
              value={outputText}
              readOnly
            />
          </div>

          {/* Right Language */}
          <div className="flex-1">
            <LanguageCard
              lang={rightLang}
              color={languageColor[rightLang]}
              logo={languageLogos[rightLang]}
              isSelected={rightLangSelected}
              onClick={() => setShowRightPopup(true)}
            />
          </div>
        </div>

        {/* Popups */}
        {showLeftPopup && (
          <LanguagePopup
            title="Select Source Language"
            onSelectLanguage={(lang) => {
              setLeftLang(lang);
              setLeftLangSelected(true); 
              setShowLeftPopup(false);
              if (selectedSyntax) setOutputText(convertSyntax(selectedSyntax, lang, rightLang));
            }}
            closePopup={() => setShowLeftPopup(false)}
          />
        )}
        {showRightPopup && (
          <LanguagePopup
            title="Select Target Language"
            onSelectLanguage={(lang) => {
              setRightLang(lang);
              setRightLangSelected(true);
              setShowRightPopup(false);
              if (selectedSyntax) setOutputText(convertSyntax(selectedSyntax, leftLang, lang));
            }}
            closePopup={() => setShowRightPopup(false)}
          />
        )}
      </motion.div>
    </div>
  );
}

export default Compare;