import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Shield, DollarSign, Trophy, Target, Star, Filter, Award } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import QuizCard from '../components/QuizCard';
import { 
  quizzes, 
  getCompletedQuizzesCount, 
  getTotalScore, 
  getAverageScore,
  getBadges,
  getQuizzesByCategory,
  getQuizzesByDifficulty 
} from '../data/quizData';

const QuizzesScreen = () => {
  const navigation = useNavigation();
  const [activeFilter, setActiveFilter] = useState<"all" | "fraud" | "financial">("all");
  const [difficultyFilter, setDifficultyFilter] = useState<"all" | "beginner" | "intermediate" | "advanced">("all");
  
  const completedCount = getCompletedQuizzesCount();
  const totalScore = getTotalScore();
  const averageScore = getAverageScore();
  const badges = getBadges();
  const totalQuizzes = quizzes.length;

  const filteredQuizzes = quizzes.filter(quiz => {
    const categoryMatch = activeFilter === "all" || quiz.category === activeFilter;
    const difficultyMatch = difficultyFilter === "all" || quiz.difficulty === difficultyFilter;
    return categoryMatch && difficultyMatch;
  });

  const fraudQuizzes = quizzes.filter(quiz => quiz.category === "fraud");
  const financialQuizzes = quizzes.filter(quiz => quiz.category === "financial");
  const beginnerQuizzes = quizzes.filter(quiz => quiz.difficulty === "beginner");
  const intermediateQuizzes = quizzes.filter(quiz => quiz.difficulty === "intermediate");
  const advancedQuizzes = quizzes.filter(quiz => quiz.difficulty === "advanced");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>FraudWise Learning Center</Text>
          <Text style={styles.subtitle}>
            Master fraud prevention and financial literacy through interactive quizzes.
            Build your knowledge with expert-created content and real-world scenarios.
          </Text>
        </View>

        {/* Enhanced Progress Dashboard */}
        <View style={styles.progressSection}>
          <View style={styles.progressCard}>
            <Target size={24} color="#1a4b8c" />
            <Text style={styles.progressNumber}>{completedCount}/{totalQuizzes}</Text>
            <Text style={styles.progressLabel}>Quizzes Completed</Text>
          </View>
          
          <View style={styles.progressCard}>
            <Trophy size={24} color="#f59e0b" />
            <Text style={styles.progressNumber}>{averageScore}%</Text>
            <Text style={styles.progressLabel}>Average Score</Text>
          </View>
          
          <View style={styles.progressCard}>
            <Award size={24} color="#8b5cf6" />
            <Text style={styles.progressNumber}>{badges.length}</Text>
            <Text style={styles.progressLabel}>Badges Earned</Text>
          </View>
        </View>

        {/* Badges Section */}
        {badges.length > 0 && (
          <View style={styles.badgesSection}>
            <Text style={styles.badgesTitle}>Your Achievements</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.badgesScroll}>
              {badges.map((badge, index) => (
                <View key={index} style={styles.badgeCard}>
                  <Award size={20} color="#f59e0b" />
                  <Text style={styles.badgeName}>{badge.name}</Text>
                  <Text style={styles.badgeDescription}>{badge.description}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Filter Buttons */}
        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>Filter by Category</Text>
          <View style={styles.filterRow}>
            <TouchableOpacity
              style={[styles.filterButton, activeFilter === "all" && styles.activeFilterButton]}
              onPress={() => setActiveFilter("all")}
            >
              <Text style={[styles.filterButtonText, activeFilter === "all" && styles.activeFilterButtonText]}>
                All ({totalQuizzes})
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
        </View>

        {/* Difficulty Filter */}
        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>Filter by Difficulty</Text>
          <View style={styles.filterRow}>
            <TouchableOpacity
              style={[styles.filterButton, difficultyFilter === "all" && styles.activeFilterButton]}
              onPress={() => setDifficultyFilter("all")}
            >
              <Text style={[styles.filterButtonText, difficultyFilter === "all" && styles.activeFilterButtonText]}>
                All Levels
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.filterButton, difficultyFilter === "beginner" && styles.activeFilterButton]}
              onPress={() => setDifficultyFilter("beginner")}
            >
              <Star size={16} color={difficultyFilter === "beginner" ? "#ffffff" : "#22c55e"} />
              <Text style={[styles.filterButtonText, difficultyFilter === "beginner" && styles.activeFilterButtonText]}>
                Beginner ({beginnerQuizzes.length})
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.filterButton, difficultyFilter === "intermediate" && styles.activeFilterButton]}
              onPress={() => setDifficultyFilter("intermediate")}
            >
              <Star size={16} color={difficultyFilter === "intermediate" ? "#ffffff" : "#f59e0b"} />
              <Text style={[styles.filterButtonText, difficultyFilter === "intermediate" && styles.activeFilterButtonText]}>
                Intermediate ({intermediateQuizzes.length})
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.filterButton, difficultyFilter === "advanced" && styles.activeFilterButton]}
              onPress={() => setDifficultyFilter("advanced")}
            >
              <Star size={16} color={difficultyFilter === "advanced" ? "#ffffff" : "#ef4444"} />
              <Text style={[styles.filterButtonText, difficultyFilter === "advanced" && styles.activeFilterButtonText]}>
                Advanced ({advancedQuizzes.length})
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Results Count */}
        <View style={styles.resultsSection}>
          <TouchableOpacity
            style={styles.clearFiltersButton}
            onPress={() => {
              setActiveFilter("all");
              setDifficultyFilter("all");
            }}
          >
            <Filter size={16} color="#6b7280" />
            <Text style={styles.clearFiltersText}>Clear Filters</Text>
          </TouchableOpacity>
          <Text style={styles.resultsCount}>
            Showing {filteredQuizzes.length} of {totalQuizzes} quizzes
          </Text>
        </View>

        {/* Quiz List */}
        <View style={styles.quizList}>
          {filteredQuizzes.length > 0 ? (
            filteredQuizzes.map((quiz) => (
              <QuizCard 
                key={quiz.id} 
                quiz={quiz} 
                onPress={() => navigation.navigate('QuizDetail' as never, { quizId: quiz.id } as never)}
              />
            ))
          ) : (
            <View style={styles.noResultsContainer}>
              <Filter size={48} color="#d1d5db" />
              <Text style={styles.noResultsTitle}>No quizzes found</Text>
              <Text style={styles.noResultsText}>
                Try adjusting your filters to see more quizzes
              </Text>
              <TouchableOpacity
                style={styles.resetFiltersButton}
                onPress={() => {
                  setActiveFilter("all");
                  setDifficultyFilter("all");
                }}
              >
                <Text style={styles.resetFiltersText}>Reset Filters</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Learning Path Suggestions */}
        {completedCount > 0 && (
          <View style={styles.suggestionsSection}>
            <Text style={styles.suggestionsTitle}>Recommended Next Steps</Text>
            {averageScore < 70 && (
              <View style={styles.suggestionCard}>
                <Text style={styles.suggestionText}>
                  💡 Consider retaking quizzes where you scored below 4/5 to strengthen your knowledge
                </Text>
              </View>
            )}
            {completedCount < 5 && (
              <View style={styles.suggestionCard}>
                <Text style={styles.suggestionText}>
                  🎯 Complete {5 - completedCount} more quizzes to earn your "Getting Started" badge
                </Text>
              </View>
            )}
            {getQuizzesByDifficulty("beginner").every(quiz => getUserProgress()[quiz.id]?.completed) && 
             !getQuizzesByDifficulty("intermediate").some(quiz => getUserProgress()[quiz.id]?.completed) && (
              <View style={styles.suggestionCard}>
                <Text style={styles.suggestionText}>
                  🚀 You've mastered the basics! Try some intermediate-level quizzes
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Educational Note */}
        <View style={styles.educationalNote}>
          <Text style={styles.educationalTitle}>Why Continuous Learning Matters</Text>
          <Text style={styles.educationalText}>
            Fraud tactics evolve constantly, and financial markets change regularly. 
            Stay protected by regularly updating your knowledge through our comprehensive 
            quiz library. Each quiz is designed by experts and updated to reflect current threats and opportunities.
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
    backgroundColor: '#1a4b8c',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#e5e7eb',
    textAlign: 'center',
    lineHeight: 24,
  },
  progressSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: -20,
    marginBottom: 24,
    zIndex: 1,
  },
  progressCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#1a4b8c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
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
  badgesSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  badgesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  badgesScroll: {
    flexDirection: 'row',
  },
  badgeCard: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 12,
    minWidth: 100,
    shadowColor: '#1a4b8c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  badgeName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1f2937',
    marginTop: 4,
    textAlign: 'center',
  },
  badgeDescription: {
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 2,
  },
  filterSection: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#d1d5db',
    backgroundColor: '#ffffff',
    gap: 4,
  },
  activeFilterButton: {
    backgroundColor: '#1a4b8c',
    borderColor: '#1a4b8c',
  },
  filterButtonText: {
    color: '#1a4b8c',
    fontSize: 14,
    fontWeight: '500',
  },
  activeFilterButtonText: {
    color: '#ffffff',
  },
  resultsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  clearFiltersButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  clearFiltersText: {
    color: '#6b7280',
    fontSize: 14,
  },
  resultsCount: {
    color: '#6b7280',
    fontSize: 14,
  },
  quizList: {
    paddingHorizontal: 24,
  },
  noResultsContainer: {
    alignItems: 'center',
    paddingVertical: 48,
  },
  noResultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 16,
    marginBottom: 8,
  },
  noResultsText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 16,
  },
  resetFiltersButton: {
    backgroundColor: '#1a4b8c',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  resetFiltersText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  suggestionsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  suggestionCard: {
    backgroundColor: '#f0f9ff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#0ea5e9',
  },
  suggestionText: {
    fontSize: 14,
    color: '#0c4a6e',
    lineHeight: 20,
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