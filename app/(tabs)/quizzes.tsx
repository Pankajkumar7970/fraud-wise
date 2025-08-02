import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { router } from 'expo-router';
import { Shield, DollarSign, Trophy, Target, CheckCircle } from 'lucide-react-native';
import { quizzes, getCompletedQuizzesCount, getTotalScore } from '../data/quizData';

export default function QuizzesScreen() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fraud' | 'financial'>('all');
  
  const completedCount = getCompletedQuizzesCount();
  const totalScore = getTotalScore();
  const totalQuizzes = quizzes.length;

  const filteredQuizzes = quizzes.filter(quiz => 
    activeFilter === 'all' || quiz.category === activeFilter
  );

  const fraudQuizzes = quizzes.filter(quiz => quiz.category === 'fraud');
  const financialQuizzes = quizzes.filter(quiz => quiz.category === 'financial');

  const renderQuizCard = ({ item: quiz }) => {
    const progress = { [quiz.id]: { completed: false, score: 0 } }; // Mock progress
    const isCompleted = progress[quiz.id]?.completed || false;
    const score = progress[quiz.id]?.score || 0;

    return (
      <TouchableOpacity
        style={styles.quizCard}
        onPress={() => router.push(`/quiz/${quiz.id}`)}
      >
        <View style={styles.quizHeader}>
          <View style={styles.quizCategory}>
            {quiz.category === 'fraud' ? (
              <Shield color="#dc2626" size={20} />
            ) : (
              <DollarSign color="#0891b2" size={20} />
            )}
            <Text style={[
              styles.categoryBadge,
              { color: quiz.category === 'fraud' ? '#dc2626' : '#0891b2' }
            ]}>
              {quiz.category === 'fraud' ? 'Fraud Awareness' : 'Financial Literacy'}
            </Text>
          </View>
          {isCompleted && (
            <View style={styles.completedBadge}>
              <CheckCircle color="#16a34a" size={16} />
              <Text style={styles.scoreText}>{score}/5</Text>
            </View>
          )}
        </View>
        
        <Text style={styles.quizTitle}>{quiz.title}</Text>
        <Text style={styles.quizDescription}>{quiz.description}</Text>
        
        <View style={styles.quizFooter}>
          <Text style={styles.quizMeta}>
            5 Questions • {isCompleted ? 'Completed' : 'Not Started'}
          </Text>
          <Text style={styles.startButton}>
            {isCompleted ? 'Retake Quiz' : 'Start Quiz'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Fraud & Financial Literacy Quizzes</Text>
        <Text style={styles.subtitle}>
          Test your knowledge and learn to protect yourself from fraud while building financial literacy.
        </Text>
      </View>

      {/* Progress Dashboard */}
      <View style={styles.dashboard}>
        <View style={styles.statCard}>
          <Target color="#1a365d" size={32} />
          <Text style={styles.statNumber}>{completedCount}/{totalQuizzes}</Text>
          <Text style={styles.statLabel}>Quizzes Completed</Text>
        </View>
        
        <View style={styles.statCard}>
          <Trophy color="#eab308" size={32} />
          <Text style={styles.statNumber}>{totalScore}</Text>
          <Text style={styles.statLabel}>Total Score</Text>
        </View>
        
        <View style={styles.statCard}>
          <Shield color="#16a34a" size={32} />
          <Text style={styles.statNumber}>
            {completedCount > 0 ? Math.round((totalScore / (completedCount * 5)) * 100) : 0}%
          </Text>
          <Text style={styles.statLabel}>Average Score</Text>
        </View>
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, activeFilter === 'all' && styles.activeFilter]}
          onPress={() => setActiveFilter('all')}
        >
          <Text style={[styles.filterText, activeFilter === 'all' && styles.activeFilterText]}>
            All Quizzes ({totalQuizzes})
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.filterButton, activeFilter === 'fraud' && styles.activeFilter]}
          onPress={() => setActiveFilter('fraud')}
        >
          <Shield color={activeFilter === 'fraud' ? '#fff' : '#64748b'} size={16} />
          <Text style={[styles.filterText, activeFilter === 'fraud' && styles.activeFilterText]}>
            Fraud ({fraudQuizzes.length})
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.filterButton, activeFilter === 'financial' && styles.activeFilter]}
          onPress={() => setActiveFilter('financial')}
        >
          <DollarSign color={activeFilter === 'financial' ? '#fff' : '#64748b'} size={16} />
          <Text style={[styles.filterText, activeFilter === 'financial' && styles.activeFilterText]}>
            Financial ({financialQuizzes.length})
          </Text>
        </TouchableOpacity>
      </View>

      {/* Quiz List */}
      <FlatList
        data={filteredQuizzes}
        renderItem={renderQuizCard}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        contentContainerStyle={styles.quizList}
      />

      {/* Educational Note */}
      <View style={styles.educationalNote}>
        <Text style={styles.noteTitle}>Why Take These Quizzes?</Text>
        <Text style={styles.noteText}>
          Financial fraud costs Americans billions of dollars each year. These interactive quizzes 
          help you recognize warning signs, understand prevention strategies, and build the knowledge 
          needed to protect yourself and your loved ones from financial scams.
        </Text>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 22,
  },
  dashboard: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 8,
    marginBottom: 24,
  },
  filterButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 4,
  },
  activeFilter: {
    backgroundColor: '#1a365d',
    borderColor: '#1a365d',
  },
  filterText: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  activeFilterText: {
    color: '#fff',
  },
  quizList: {
    paddingHorizontal: 24,
    gap: 16,
  },
  quizCard: {
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quizHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  quizCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  categoryBadge: {
    fontSize: 12,
    fontWeight: '600',
  },
  completedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  scoreText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#16a34a',
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  quizDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 16,
  },
  quizFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quizMeta: {
    fontSize: 12,
    color: '#64748b',
  },
  startButton: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a365d',
  },
  educationalNote: {
    backgroundColor: '#1a365d',
    margin: 24,
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  noteText: {
    fontSize: 16,
    color: '#e2e8f0',
    textAlign: 'center',
    lineHeight: 22,
  },
});