"use client";
import { useState } from "react";
import Compare from "../compare/page"; 
import { motion } from "framer-motion";
import "./example.css"
function Example() {
  const [step, setStep] = useState(1); 

  const steps = [
    {
      title: "Step 1: เลือกภาษาต้นทาง (Left Language)",
      description:
        "กดที่ด้านซ้ายเพื่อเลือกภาษาที่คุณต้องการเริ่มต้น (เช่น JavaScript) ซึ่งจะเป็นภาษาที่คุณจะใส่ Syntax ต้นฉบับ",
      action: "ลองกดด้านซ้ายในเครื่องมือด้านล่าง แล้วเลือก 'JavaScript'",
    },
    {
      title: "Step 2: เลือกภาษาปลายทาง (Right Language)",
      description:
        "กดที่ด้านขวาเพื่อเลือกภาษาที่คุณต้องการแปลงไป (เช่น Python) ซึ่งจะเป็นผลลัพธ์หลังการแปลง",
      action: "ลองกดด้านขวา แล้วเลือก 'Python'",
    },
    {
      title: "Step 3: เลือก Syntax ที่ต้องการเปรียบเทียบ",
      description:
        "เลือก Syntax จาก Dropdown ตรงกลาง เช่น 'console.log()' เพื่อดูว่า Syntax นี้ถูกแปลงเป็นภาษาปลายทางอย่างไร",
      action: "ลองเลือก 'console.log()' จาก Dropdown",
    },
    {
      title: "Step 4: ดูผลลัพธ์",
      description:
        "ผลลัพธ์จะปรากฏในช่องด้านล่างทันที โดยแสดง Syntax ที่แปลงแล้ว เช่น จาก 'console.log()' ใน JavaScript เป็น 'print()' ใน Python",
      action: "สังเกตผลลัพธ์ในช่องด้านล่างหลังจากเลือก Syntax",
    },
  ];

  // ฟังก์ชันเปลี่ยนขั้นตอน
  const handleNext = () => {
    if (step < steps.length) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="example-container">
      <h1 className="text-4xl font-bold text-center mb-8">เรียนรู้การใช้เครื่องมือเปรียบเทียบ Syntax</h1>

      {/* ขั้นตอนการสอน */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">{steps[step - 1].title}</h2>
          <p className="text-lg mb-4">{steps[step - 1].description}</p>
          <p className="text-md italic text-blue-600 mb-4">{steps[step - 1].action}</p>
        </motion.div>

        {/* ปุ่มควบคุม */}
        <div className="flex justify-between">
          <button
            className={`px-4 py-2 rounded-lg ${step === 1 ? "bg-gray-300" : "bg-blue-500 text-white hover:bg-blue-600"}`}
            onClick={handlePrev}
            disabled={step === 1}
          >
            Previous
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${step === steps.length ? "bg-gray-300" : "bg-blue-500 text-white hover:bg-blue-600"}`}
            onClick={handleNext}
            disabled={step === steps.length}
          >
            Next
          </button>
        </div>
      </div>

      {/* เครื่องมือ Compare */}
      <div className="max-w-8xl mx-auto">
        <h3 className="text-xl font-bold mb-4 text-center">ลองใช้งานจริงที่นี่!</h3>
        <Compare />
      </div>
    </div>
  );
}

export default Example;