"use client";

import { useState } from "react";
import AssessmentSection from "./AssessmentSection";
import MyGoalsSection from "./MyGoalsSection";
import PreferencesSection from "./PreferencesSection";
import questions from "../data/assessmentQuestions.json";

interface GoalsAssessmentProps {
  onSectionChange?: (section: string) => void;
}

export default function GoalsAssessment({ onSectionChange }: GoalsAssessmentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(Array(questions.length).fill(""));

  const handleOptionChange = (option: string) => {
    const updated = [...selectedOptions];
    updated[currentIndex] = option;
    setSelectedOptions(updated);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <style>{`
        .goals-assessment-page {
          flex: 1;
          padding: 30px 40px;
          max-width: 100%;
          transition: max-width 0.3s ease;
          overflow-y: auto;
          width: 100%;
        }
      `}</style>
      <div className="goals-assessment-page">
        <AssessmentSection
          question={questions[currentIndex].question}
          options={questions[currentIndex].options}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedOption={selectedOptions[currentIndex]}
          setSelectedOption={handleOptionChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
          isFirst={currentIndex === 0}
          isLast={currentIndex === questions.length - 1}
          onSectionChange={onSectionChange}
        />
        <MyGoalsSection />
        <PreferencesSection />
      </div>
    </>
  );
}
