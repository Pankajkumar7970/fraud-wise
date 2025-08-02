import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Shield, DollarSign, CircleCheck as CheckCircle, Clock, Star } from 'lucide-react-native';
import { Quiz, getUserProgress } from '../data/quizData';

interface QuizCardProps {
  quiz: Quiz;
  onPress: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz, onPress }) => {
  const progress = getUserProgress();
  const isCompleted = progress[quiz.id]?.completed || false;
  const score = progress[quiz.id]?.score || 0;
  const attempts = progress[quiz.id]?.attempts || 0;

  const CategoryIcon = quiz.category === "fraud" ? Shield : DollarSign;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '#22c55e';
      case 'intermediate': return '#f59e0b';
      case 'advanced': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getDifficultyBg = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '#dcfce7';
      case 'intermediate': return '#fef3c7';
      case 'advanced': return '#fee2e2';
      default: return '#f3f4f6';
    }
  };
  return (
    <TouchableOpacity style={[styles.card, isCompleted && styles.completedCard]} onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.categoryContainer}>
          <CategoryIcon size={20} color="#1a4b8c" />
          <View style={[
            styles.badge, 
            quiz.category === "fraud" ? styles.fraudBadge : styles.financialBadge
          ]}>
            <Text style={[styles.badgeText, quiz.category === "fraud" ? styles.fraudBadgeText : styles.financialBadgeText]}>
              {quiz.category === "fraud" ? "Fraud Awareness" : "Financial Literacy"}
            </Text>
          </View>
        </View>
        {isCompleted && (
          <View style={styles.completedContainer}>
            <CheckCircle size={16} color="#22c55e" />
            <Text style={styles.scoreText}>{score}/5</Text>
            {attempts > 1 && (
              <Text style={styles.attemptsText}>({attempts} attempts)</Text>
            )}
          </View>
        )}
      </View>
      
      <Text style={styles.title}>{quiz.title}</Text>
      <Text style={styles.description}>{quiz.description}</Text>
      
      <View style={styles.metaInfo}>
        <View style={styles.metaItem}>
          <View style={[
            styles.difficultyBadge, 
            { backgroundColor: getDifficultyBg(quiz.difficulty) }
          ]}>
            <Star size={12} color={getDifficultyColor(quiz.difficulty)} />
            <Text style={[
              styles.difficultyText, 
              { color: getDifficultyColor(quiz.difficulty) }
            ]}>
              {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
            </Text>
          </View>
        </View>
        <View style={styles.metaItem}>
          <Clock size={12} color="#6b7280" />
          <Text style={styles.timeText}>{quiz.estimatedTime} min</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          5 Questions • {isCompleted ? `Best Score: ${score}/5` : "Not Started"}
        </Text>
        <View style={[
          styles.button, 
          isCompleted && styles.completedButton
        ]}>
            isCompleted && styles.completedButtonText
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
    borderWidth: 1,
    borderColor: 'transparent',
  },
  completedCard: {
    borderColor: '#22c55e',
    borderWidth: 1,
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
    gap: 6,
  },
  scoreText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#22c55e',
  },
  attemptsText: {
    fontSize: 12,
    color: '#6b7280',
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
    marginBottom: 12,
    lineHeight: 20,
  },
  metaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  difficultyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: '500',
  },
  timeText: {
    fontSize: 12,
    color: '#6b7280',
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
  completedButton: {
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  completedButtonText: {
    color: '#1a4b8c',
  },
});

export default QuizCard;