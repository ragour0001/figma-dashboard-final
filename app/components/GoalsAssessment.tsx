"use client";

import { useState } from "react";
import AssessmentSection from "./AssessmentSection";
import MyGoalsSection from "./MyGoalsSection";
import PreferencesSection from "./PreferencesSection";

export default function GoalsAssessment() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <div className="goals-assessment-page">
      <AssessmentSection
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <MyGoalsSection />
      <PreferencesSection />
    </div>
  );
}
