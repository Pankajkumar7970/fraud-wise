import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Shield, DollarSign, CheckCircle } from 'lucide-react-native';
import { Quiz, getUserProgress } from '../data/quizData';

interface QuizCardProps {
  quiz: Quiz;
  onPress: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz, onPress }) => {
  const progress = getUserProgress();
  const isCompleted = progress[quiz.id]?.completed || false;
  const score = progress[quiz.id]?.score || 0;

  const CategoryIcon = quiz.category === "fraud" ? Shield : DollarSign;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.categoryContainer}>
          <CategoryIcon size={20} color="#1a4b8c" />
          <View style={[styles.badge, quiz.category === "fraud" ? styles.fraudBadge : styles.financialBadge]}>
            <Text style={[styles.badgeText, quiz.category === "fraud" ? styles.fraudBadgeText : styles.financialBadgeText]}>
              {quiz.category === "fraud" ? "Fraud Awareness" : "Financial Literacy"}
            </Text>
          </View>
        </View>
        {isCompleted && (
          <View style={styles.completedContainer}>
            <CheckCircle size={16} color="#22c55e" />
            <Text style={styles.scoreText}>{score}/5</Text>
          </View>
        )}
      </View>
      
      <Text style={styles.title}>{quiz.title}</Text>
      <Text style={styles.description}>{quiz.description}</Text>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          5 Questions • {isCompleted ? "Completed" : "Not Started"}
        </Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            {isCompleted ? "Retake Quiz" : "Start Quiz"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#1a4b8c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  fraudBadge: {
    backgroundColor: '#fee2e2',
  },
  financialBadge: {
    backgroundColor: '#f3f4f6',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  fraudBadgeText: {
    color: '#dc2626',
  },
  financialBadgeText: {
    color: '#6b7280',
  },
  completedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  scoreText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#22c55e',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#6b7280',
  },
  button: {
    backgroundColor: '#1a4b8c',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default QuizCard;