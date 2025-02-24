"use client";
import Image from "next/image";
import JavascriptLogo from "../compare/pic/JavaScript-logo.png";
import PythonLogo from "../compare/pic/Python.png";
import JavaLogo from "../compare/pic/java.png";
import GoLogo from "../compare/pic/go.png";
import CsharpLogo from "../compare/pic/csharp.png";
import CppLogo from "../compare/pic/c++.png";
import PhpLogo from "../compare/pic/php.png";
import TypeScriptLogo from "../compare/pic/typescript.png";
import {motion} from "framer-motion";
const supportedLanguages = [
  { name: "JavaScript", logo: JavascriptLogo },
  { name: "Python", logo: PythonLogo },
  { name: "C++", logo: CppLogo },
  { name: "Java", logo: JavaLogo },
  { name: "Go", logo: GoLogo },
  { name: "PHP", logo: PhpLogo },
  { name: "C#", logo: CsharpLogo },
  { name: "TypeScript", logo: TypeScriptLogo },
];

function SupportLanguages() {
  return (
   <motion.div
    className="box"
    animate={{ x: 0 , opacity:1}}
    initial={{ x: -60 , opacity:0 }}
    transition={{ duration: 0.2  }}
  >  <div className="p-8 mt-12 max-w-5xl mx-auto text-center bg-white-500/10 backdrop-blur-xl border border-white-500/40 rounded-3xl shadow-lg shadow-white-500/50">
       
      <h1 className="text-4xl font-bold mb-8 text-white-700 drop-shadow-lg">
        Supported Languages
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {supportedLanguages.map((lang) => (
          <div
            key={lang.name}
            className="flex flex-col items-center bg-white-200/20 backdrop-blur-lg p-6 rounded-2xl border border-white-300/40 shadow-md shadow-white-300/50 hover:scale-105 transition-transform"
          >
            <Image
              src={lang.logo}
              width={80}
              height={80}
              alt={lang.name}
              className="rounded-lg"
            />
            <p className="mt-3 text-lg font-medium text-white-800 drop-shadow-sm">
              {lang.name}
            </p>
          </div>
        ))}
      </div>
     
    </div> 
    </motion.div>
  );
}

export default SupportLanguages;
