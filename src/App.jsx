import { useState } from "react";

const steps = [
  { id: "start", question: "Are you in a calm, distraction-free area?", yes: "rewardMarker", no: "startAdvice" },
  { id: "startAdvice", message: "🛑 If No: Make sure your training area is quiet and free from distractions.", next: "start" },
  { id: "rewardMarker", question: "Does your dog have a reward marker? ('Yes' + Treat)", yes: "engagement", no: "rewardMarkerExplanation" },
  { id: "rewardMarkerExplanation", message: "🔔 Teach your dog a reward marker.", next: "rewardMarker" },
  { id: "engagement", question: "Does your dog willingly make eye contact?", yes: "shaping", no: "engagementExplanation" },
  { id: "engagementExplanation", message: "👀 Encourage eye contact using a high-value treat.", next: "engagement" },
  { id: "shaping", question: "Does your dog move toward you when you step backward?", yes: "naming", no: "shapingExplanation" },
  { id: "shapingExplanation", message: "🐾 Shuffle backward, use a lure, or add excitement in your voice.", next: "shaping" },
  { id: "success", message: "🎉 Success! Reliable Recall Achieved! Keep revisiting this process." }
];

export default function RecallTraining() {
  const [currentStep, setCurrentStep] = useState("start");
  const step = steps.find((s) => s.id === currentStep);

  return (
    <div className="p-4 max-w-xl mx-auto text-center">
      {step.question && <h2 className="text-lg font-bold">{step.question}</h2>}
      {step.message && <p className="text-gray-700">{step.message}</p>}
      <div className="mt-4 space-x-4">
        {step.yes && (
          <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => setCurrentStep(step.yes)}>Yes</button>
        )}
        {step.no && (
          <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => setCurrentStep(step.no)}>No</button>
        )}
        {step.next && (
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setCurrentStep(step.next)}>Try Again</button>
        )}
      </div>
    </div>
  );
}
