import { FileText } from "lucide-react";

interface File {
  id: number;
  name: string;
}

const files: File[] = [
  { id: 1, name: "Present Simple.pdf" },
  { id: 2, name: "Past Continuous.pdf" },
  { id: 3, name: "Irregular Verbs List.pdf" },
  { id: 4, name: "Phrasal Verbs.pdf" },
  { id: 5, name: "Common Mistakes.pdf" },
  { id: 6, name: "Grammar Rules.pdf" },
  { id: 7, name: "Vocabulary A2-B1.pdf" },
  { id: 8, name: "Writing Templates.pdf" },
  { id: 9, name: "Listening Exercises.pdf" },
  { id: 10, name: "Speaking Practice.pdf" },
];

export function Useful() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-2">
        {files.map((file) => (
          <button
            key={file.id}
            className="w-full flex items-center px-6 py-4 border border-gray-800 rounded hover:bg-gray-900 transition-colors"
          >
            <FileText className="w-5 h-5 text-gray-500 mr-3" />
            <span className="text-white">{file.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}