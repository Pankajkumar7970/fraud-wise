import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Shield, DollarSign, Trophy, Target } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import QuizCard from '../components/QuizCard';
import { quizzes, getCompletedQuizzesCount, getTotalScore } from '../data/quizData';

const QuizzesScreen = () => {
  const navigation = useNavigation();
  const [activeFilter, setActiveFilter] = useState<"all" | "fraud" | "financial">("all");
  
  const completedCount = getCompletedQuizzesCount();
  const totalScore = getTotalScore();
  const totalQuizzes = quizzes.length;

  const filteredQuizzes = quizzes.filter(quiz => 
    activeFilter === "all" || quiz.category === activeFilter
  );

  const fraudQuizzes = quizzes.filter(quiz => quiz.category === "fraud");
  const financialQuizzes = quizzes.filter(quiz => quiz.category === "financial");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Fraud & Financial Literacy Quizzes</Text>
          <Text style={styles.subtitle}>
            Test your knowledge and learn to protect yourself from fraud while building financial literacy.
            Each quiz contains practical tips and real-world scenarios.
          </Text>
        </View>

        {/* Progress Dashboard */}
        <View style={styles.progressSection}>
          <View style={styles.progressCard}>
            <Target size={24} color="#1a4b8c" />
            <Text style={styles.progressNumber}>{completedCount}/{totalQuizzes}</Text>
            <Text style={styles.progressLabel}>Quizzes Completed</Text>
          </View>
          
          <View style={styles.progressCard}>
            <Trophy size={24} color="#f59e0b" />
            <Text style={styles.progressNumber}>{totalScore}</Text>
            <Text style={styles.progressLabel}>Total Score</Text>
          </View>
          
          <View style={styles.progressCard}>
            <Shield size={24} color="#22c55e" />
            <Text style={styles.progressNumber}>
              {completedCount > 0 ? Math.round((totalScore / (completedCount * 5)) * 100) : 0}%
            </Text>
            <Text style={styles.progressLabel}>Average Score</Text>
          </View>
        </View>

        {/* Filter Buttons */}
        <View style={styles.filterSection}>
          <TouchableOpacity
            style={[styles.filterButton, activeFilter === "all" && styles.activeFilterButton]}
            onPress={() => setActiveFilter("all")}
          >
            <Text style={[styles.filterButtonText, activeFilter === "all" && styles.activeFilterButtonText]}>
              All Quizzes ({totalQuizzes})
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.filterButton, activeFilter === "fraud" && styles.activeFilterButton]}
            onPress={() => setActiveFilter("fraud")}
          >
            <Shield size={16} color={activeFilter === "fraud" ? "#ffffff" : "#1a4b8c"} />
            <Text style={[styles.filterButtonText, activeFilter === "fraud" && styles.activeFilterButtonText]}>
              Fraud ({fraudQuizzes.length})
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.filterButton, activeFilter === "financial" && styles.activeFilterButton]}
            onPress={() => setActiveFilter("financial")}
          >
            <DollarSign size={16} color={activeFilter === "financial" ? "#ffffff" : "#1a4b8c"} />
            <Text style={[styles.filterButtonText, activeFilter === "financial" && styles.activeFilterButtonText]}>
              Financial ({financialQuizzes.length})
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quiz List */}
        <View style={styles.quizList}>
          {filteredQuizzes.map((quiz) => (
            <QuizCard 
              key={quiz.id} 
              quiz={quiz} 
              onPress={() => navigation.navigate('QuizDetail' as never, { quizId: quiz.id } as never)}
            />
          ))}
        </View>

        {/* Educational Note */}
        <View style={styles.educationalNote}>
          <Text style={styles.educationalTitle}>Why Take These Quizzes?</Text>
          <Text style={styles.educationalText}>
            Financial fraud costs Americans billions of dollars each year. These interactive quizzes 
            help you recognize warning signs, understand prevention strategies, and build the knowledge 
            needed to protect yourself and your loved ones from financial scams.
          </Text>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  progressSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  progressCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#1a4b8c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  progressNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginVertical: 4,
  },
  progressLabel: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
  filterSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
    gap: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1a4b8c',
    gap: 4,
  },
  activeFilterButton: {
    backgroundColor: '#1a4b8c',
  },
  filterButtonText: {
    color: '#1a4b8c',
    fontSize: 14,
    fontWeight: '500',
  },
  activeFilterButtonText: {
    color: '#ffffff',
  },
  quizList: {
    paddingHorizontal: 24,
  },
  educationalNote: {
    backgroundColor: '#1a4b8c',
    margin: 24,
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  educationalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
  },
  educationalText: {
    fontSize: 14,
    color: '#e5e7eb',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default QuizzesScreen;