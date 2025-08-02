import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { CheckCircle, XCircle, RotateCcw, Home, Award } from 'lucide-react-native';
import { quizzes, saveQuizResult } from '../data/quizData';

export default function QuizDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const quiz = quizzes.find(q => q.id === id);

  useEffect(() => {
    if (!quiz) {
      Alert.alert('Error', 'Quiz not found', [
        { text: 'OK', onPress: () => router.back() }
      ]);
    }
  }, [quiz]);

  if (!quiz) {
    return null;
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = async () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Quiz completed
      const score = newAnswers.reduce((total, answer, index) => {
        return total + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
      }, 0);
      
      await saveQuizResult(quiz.id, score);
      setShowResults(true);
      
      Alert.alert(
        'Quiz Completed!',
        `You scored ${score} out of ${quiz.questions.length}`
      );
    }
  };

  const handleShowExplanation = () => {
    setShowExplanation(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const calculateScore = () => {
    return answers.reduce((total, answer, index) => {
      return total + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const getScoreMessage = (score: number) => {
    const percentage = (score / quiz.questions.length) * 100;
    if (percentage >= 80) return "Excellent! You're well-prepared to identify and avoid these threats.";
    if (percentage >= 60) return "Good job! Review the explanations to strengthen your knowledge.";
    return "Keep learning! Review the material and try again to improve your protection skills.";
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / quiz.questions.length) * 100);
    
    return (
      <ScrollView style={styles.container}>
        <View style={styles.resultsContainer}>
          <View style={styles.resultsHeader}>
            <Award color="#eab308" size={64} />
            <Text style={styles.resultsTitle}>Quiz Completed!</Text>
            
            <View style={styles.scoreContainer}>
              <View style={styles.scoreBadge}>
                <Text style={styles.scoreText}>Score: {score}/{quiz.questions.length}</Text>
              </View>
              <View style={[
                styles.percentageBadge,
                { backgroundColor: percentage >= 80 ? '#16a34a' : percentage >= 60 ? '#0891b2' : '#dc2626' }
              ]}>
                <Text style={styles.percentageText}>{percentage}%</Text>
              </View>
            </View>
          </View>

          <View style={styles.resultsContent}>
            <Text style={styles.quizTitle}>{quiz.title}</Text>
            <Text style={styles.scoreMessage}>{getScoreMessage(score)}</Text>

            <Text style={styles.reviewTitle}>Review Your Answers:</Text>
            {quiz.questions.map((question, index) => (
              <View key={question.id} style={styles.reviewItem}>
                <View style={styles.reviewHeader}>
                  {answers[index] === question.correctAnswer ? (
                    <CheckCircle color="#16a34a" size={20} />
                  ) : (
                    <XCircle color="#dc2626" size={20} />
                  )}
                  <Text style={styles.reviewQuestion}>{question.question}</Text>
                </View>
                <Text style={styles.reviewAnswer}>
                  Your answer: {question.options[answers[index]]}
                </Text>
                {answers[index] !== question.correctAnswer && (
                  <Text style={styles.correctAnswer}>
                    Correct: {question.options[question.correctAnswer]}
                  </Text>
                )}
              </View>
            ))}

            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.secondaryButton} onPress={restartQuiz}>
                <RotateCcw color="#1a365d" size={20} />
                <Text style={styles.secondaryButtonText}>Retake Quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.primaryButton} 
                onPress={() => router.push('/quizzes')}
              >
                <Home color="#fff" size={20} />
                <Text style={styles.primaryButtonText}>Back to Quizzes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{quiz.title}</Text>
        <View style={styles.progressInfo}>
          <Text style={styles.progressText}>
            Question {currentQuestion + 1} of {quiz.questions.length}
          </Text>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>
              {quiz.category === 'fraud' ? 'Fraud Awareness' : 'Financial Literacy'}
            </Text>
          </View>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
      </View>

      {/* Question */}
      <View style={styles.questionCard}>
        <Text style={styles.questionText}>{question.question}</Text>
        
        <View style={styles.optionsContainer}>
          {question.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswer === index && styles.selectedOption,
                showExplanation && styles.disabledOption
              ]}
              onPress={() => handleAnswerSelect(index)}
              disabled={showExplanation}
            >
              <Text style={styles.optionLetter}>
                {String.fromCharCode(65 + index)}.
              </Text>
              <Text style={[
                styles.optionText,
                selectedAnswer === index && styles.selectedOptionText
              ]}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Explanation */}
      {showExplanation && (
        <View style={styles.explanationCard}>
          <View style={styles.explanationHeader}>
            {selectedAnswer === question.correctAnswer ? (
              <CheckCircle color="#16a34a" size={24} />
            ) : (
              <XCircle color="#dc2626" size={24} />
            )}
            <Text style={[
              styles.explanationTitle,
              { color: selectedAnswer === question.correctAnswer ? '#16a34a' : '#dc2626' }
            ]}>
              {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect'}
            </Text>
          </View>
          <Text style={styles.explanationText}>{question.explanation}</Text>
          {selectedAnswer !== question.correctAnswer && (
            <Text style={styles.correctAnswerText}>
              Correct answer: {String.fromCharCode(65 + question.correctAnswer)}. {question.options[question.correctAnswer]}
            </Text>
          )}
        </View>
      )}

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.back()}
        >
          <Text style={styles.secondaryButtonText}>Back to Quizzes</Text>
        </TouchableOpacity>
        
        {!showExplanation ? (
          <TouchableOpacity
            style={[styles.primaryButton, selectedAnswer === null && styles.disabledButton]}
            onPress={handleShowExplanation}
            disabled={selectedAnswer === null}
          >
            <Text style={styles.primaryButtonText}>Show Explanation</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleNextQuestion}
          >
            <Text style={styles.primaryButtonText}>
              {currentQuestion < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressText: {
    fontSize: 14,
    color: '#64748b',
  },
  categoryBadge: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  categoryText: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '500',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1a365d',
    borderRadius: 4,
  },
  questionCard: {
    backgroundColor: '#f8fafc',
    margin: 24,
    padding: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 24,
    lineHeight: 24,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#fff',
  },
  selectedOption: {
    backgroundColor: '#1a365d',
    borderColor: '#1a365d',
  },
  disabledOption: {
    opacity: 0.6,
  },
  optionLetter: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#64748b',
    marginRight: 12,
    minWidth: 20,
  },
  optionText: {
    fontSize: 16,
    color: '#1e293b',
    flex: 1,
    lineHeight: 22,
  },
  selectedOptionText: {
    color: '#fff',
  },
  explanationCard: {
    backgroundColor: '#f8fafc',
    margin: 24,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  explanationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  explanationText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 12,
  },
  correctAnswerText: {
    fontSize: 14,
    color: '#16a34a',
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    padding: 24,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#1a365d',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    flexDirection: 'row',
    gap: 8,
  },
  disabledButton: {
    opacity: 0.5,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#1a365d',
    fontSize: 16,
    fontWeight: '600',
  },
  resultsContainer: {
    padding: 24,
  },
  resultsHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  resultsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 16,
    marginBottom: 16,
  },
  scoreContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  scoreBadge: {
    backgroundColor: '#0891b2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  scoreText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  percentageBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  percentageText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultsContent: {
    gap: 16,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
  },
  scoreMessage: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 8,
  },
  reviewItem: {
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
  reviewQuestion: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
    flex: 1,
  },
  reviewAnswer: {
    fontSize: 12,
    color: '#64748b',
    marginLeft: 28,
    marginBottom: 4,
  },
  correctAnswer: {
    fontSize: 12,
    color: '#16a34a',
    marginLeft: 28,
  },
});