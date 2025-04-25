import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ isOpen, onClose, questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [showAnswerFeedback, setShowAnswerFeedback] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      // Shuffle all questions and select 5 random ones
      const shuffled = [...questions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
      setShuffledQuestions(shuffled);
      setCurrentQuestionIndex(0);
      setSelectedAnswers([]);
      setScore(null);
      setShowAnswerFeedback(false);
    }
  }, [isOpen, questions]);

  const handleAnswerSelect = (optionIndex: number) => {
    if (score !== null) return; // Don't allow answering after quiz is complete
    
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
    setShowAnswerFeedback(true);

    // Wait for 1 second before moving to next question
    setTimeout(() => {
      setShowAnswerFeedback(false);
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Calculate score
        const correctAnswers = shuffledQuestions.reduce((acc, question, index) => {
          return acc + (newSelectedAnswers[index] === question.correctAnswer ? 1 : 0);
        }, 0);
        setScore(correctAnswers);
      }
    }, 1000);
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-lg w-full mx-4 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-6 h-6" />
            </button>

            {score === null ? (
              <>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {currentQuestion?.question}
                </p>
                <div className="space-y-3">
                  {currentQuestion?.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrectAnswer = index === currentQuestion.correctAnswer;
                    let buttonClass = 'w-full p-3 rounded-lg text-left transition-colors ';

                    if (showAnswerFeedback) {
                      if (isSelected) {
                        buttonClass += isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
                      } else if (isCorrectAnswer) {
                        buttonClass += 'bg-green-500 text-white';
                      } else {
                        buttonClass += 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
                      }
                    } else {
                      buttonClass += isSelected
                        ? 'bg-quantum-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700';
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={buttonClass}
                        disabled={showAnswerFeedback}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Quiz Complete!
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Your score: {score} out of {shuffledQuestions.length}
                </p>
                <Button onClick={onClose}>
                  Close
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Quiz; 