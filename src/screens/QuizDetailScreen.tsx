import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckCircle, XCircle, RotateCcw, Home, Award } from 'lucide-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { quizzes, saveQuizResult } from '../data/quizData';

const QuizDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { quizId } = route.params as { quizId: string };
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const quiz = quizzes.find(q => q.id === quizId);

  useEffect(() => {
    if (!quiz) {
      navigation.goBack();
    }
  }, [quiz, navigation]);

  if (!quiz) {
    return null;
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
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
      
      saveQuizResult(quiz.id, score);
      setShowResults(true);
      
      Alert.alert(
        "Quiz Completed!",
        `You scored ${score} out of ${quiz.questions.length}`,
        [{ text: "OK" }]
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
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.resultsContainer}>
            <View style={styles.resultsHeader}>
              <Award size={64} color="#f59e0b" />
              <Text style={styles.resultsTitle}>Quiz Completed!</Text>
              <View style={styles.scoreContainer}>
                <View style={[styles.scoreBadge, styles.scoreBadgeSecondary]}>
                  <Text style={styles.scoreBadgeText}>Score: {score}/{quiz.questions.length}</Text>
                </View>
                <View style={[
                  styles.scoreBadge, 
                  percentage >= 80 ? styles.scoreBadgeSuccess : 
                  percentage >= 60 ? styles.scoreBadgeSecondary : styles.scoreBadgeError
                ]}>
                  <Text style={styles.scoreBadgeText}>{percentage}%</Text>
                </View>
              </View>
            </View>
            
            <View style={styles.resultsContent}>
              <Text style={styles.quizTitle}>{quiz.title}</Text>
              <Text style={styles.scoreMessage}>{getScoreMessage(score)}</Text>

              <View style={styles.reviewSection}>
                <Text style={styles.reviewTitle}>Review Your Answers:</Text>
                {quiz.questions.map((question, index) => (
                  <View key={question.id} style={styles.reviewItem}>
                    <View style={styles.reviewHeader}>
                      {answers[index] === question.correctAnswer ? (
                        <CheckCircle size={20} color="#22c55e" />
                      ) : (
                        <XCircle size={20} color="#ef4444" />
                      )}
                      <View style={styles.reviewContent}>
                        <Text style={styles.reviewQuestion}>{question.question}</Text>
                        <Text style={styles.reviewAnswer}>
                          Your answer: {question.options[answers[index]]}
                        </Text>
                        {answers[index] !== question.correctAnswer && (
                          <Text style={styles.reviewCorrect}>
                            Correct: {question.options[question.correctAnswer]}
                          </Text>
                        )}
                      </View>
                    </View>
                  </View>
                ))}
              </View>

              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.secondaryButton} onPress={restartQuiz}>
                  <RotateCcw size={16} color="#1a4b8c" />
                  <Text style={styles.secondaryButtonText}>Retake Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.primaryButton} 
                  onPress={() => navigation.navigate('Quizzes' as never)}
                >
                  <Home size={16} color="#ffffff" />
                  <Text style={styles.primaryButtonText}>Back to Quizzes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.quizTitle}>{quiz.title}</Text>
          <View style={styles.progressInfo}>
            <Text style={styles.progressText}>
              Question {currentQuestion + 1} of {quiz.questions.length}
            </Text>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryBadgeText}>
                {quiz.category === "fraud" ? "Fraud Awareness" : "Financial Literacy"}
              </Text>
            </View>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>

        {/* Question Card */}
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
                <Text style={styles.optionLabel}>
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
                <CheckCircle size={20} color="#22c55e" />
              ) : (
                <XCircle size={20} color="#ef4444" />
              )}
              <Text style={[
                styles.explanationResult,
                selectedAnswer === question.correctAnswer ? styles.correctResult : styles.incorrectResult
              ]}>
                {selectedAnswer === question.correctAnswer ? "Correct!" : "Incorrect"}
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
            onPress={() => navigation.goBack()}
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
                {currentQuestion < quiz.questions.length - 1 ? "Next Question" : "Finish Quiz"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 24,
  },
  quizTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressText: {
    fontSize: 14,
    color: '#6b7280',
  },
  categoryBadge: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  categoryBadgeText: {
    fontSize: 12,
    color: '#6b7280',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1a4b8c',
  },
  questionCard: {
    backgroundColor: '#ffffff',
    margin: 24,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#1a4b8c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 20,
    lineHeight: 26,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  selectedOption: {
    backgroundColor: '#1a4b8c',
    borderColor: '#1a4b8c',
  },
  disabledOption: {
    opacity: 0.6,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginRight: 12,
    minWidth: 24,
  },
  optionText: {
    fontSize: 16,
    color: '#1f2937',
    flex: 1,
    lineHeight: 22,
  },
  selectedOptionText: {
    color: '#ffffff',
  },
  explanationCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 24,
    marginBottom: 24,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#1a4b8c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  explanationResult: {
    fontSize: 16,
    fontWeight: '600',
  },
  correctResult: {
    color: '#22c55e',
  },
  incorrectResult: {
    color: '#ef4444',
  },
  explanationText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 8,
  },
  correctAnswerText: {
    fontSize: 14,
    color: '#22c55e',
    lineHeight: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingBottom: 24,
    gap: 12,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#1a4b8c',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  secondaryButtonText: {
    color: '#1a4b8c',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.5,
  },
  resultsContainer: {
    padding: 24,
  },
  resultsHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  resultsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginVertical: 16,
  },
  scoreContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  scoreBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  scoreBadgeSecondary: {
    backgroundColor: '#f3f4f6',
  },
  scoreBadgeSuccess: {
    backgroundColor: '#dcfce7',
  },
  scoreBadgeError: {
    backgroundColor: '#fee2e2',
  },
  scoreBadgeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  resultsContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#1a4b8c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scoreMessage: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  reviewSection: {
    marginBottom: 24,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  reviewItem: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  reviewContent: {
    flex: 1,
  },
  reviewQuestion: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 4,
  },
  reviewAnswer: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 2,
  },
  reviewCorrect: {
    fontSize: 12,
    color: '#22c55e',
  },
});

export default QuizDetailScreen;