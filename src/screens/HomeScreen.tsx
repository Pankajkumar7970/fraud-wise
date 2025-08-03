import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Shield, Brain, Award, ArrowRight, CircleCheck as CheckCircle, BookOpen, Users, TrendingUp, Sparkles, Target, Zap } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { getUserProgress } from '../data/quizData';

const HomeScreen = () => {
  const navigation = useNavigation();
  const progress = getUserProgress();
  const completedCount = Object.values(progress).filter(p => p.completed).length;
  const totalScore = Object.values(progress).reduce((sum, p) => sum + (p.score || 0), 0);
  const averageScore = completedCount > 0 ? Math.round(totalScore / completedCount) : 0;

  const features = [
    {
      icon: Shield,
      title: "Fraud Protection",
      description: "Master the art of spotting scams with our comprehensive fraud detection training",
      gradient: ['#667eea', '#764ba2'],
      iconColor: '#ffffff'
    },
    {
      icon: Brain,
      title: "Financial Mastery",
      description: "Build wealth with expert-level budgeting, investing, and financial planning skills",
      gradient: ['#f093fb', '#f5576c'],
      iconColor: '#ffffff'
    },
    {
      icon: Award,
      title: "Achievement System",
      description: "Unlock badges, track milestones, and celebrate your learning journey",
      gradient: ['#4facfe', '#00f2fe'],
      iconColor: '#ffffff'
    }
  ];

  const stats = [
    {
      icon: BookOpen,
      number: "25+",
      label: "Expert Quizzes",
      description: "Comprehensive fraud & finance coverage",
      gradient: ['#fa709a', '#fee140']
    },
    {
      icon: Users,
      number: "50K+",
      label: "Protected Users",
      description: "Join our growing community",
      gradient: ['#a8edea', '#fed6e3']
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Success Rate",
      description: "Users feel more confident",
      gradient: ['#ffecd2', '#fcb69f']
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section with Gradient */}
        <View style={styles.heroSection}>
          <View style={styles.heroGradient}>
            <View style={styles.heroContent}>
              <View style={styles.logoContainer}>
                <View style={styles.logoBackground}>
                  <Shield size={32} color="#ffffff" />
                </View>
                <Sparkles size={20} color="#fbbf24" style={styles.sparkle1} />
                <Sparkles size={16} color="#f59e0b" style={styles.sparkle2} />
              </View>
              
              <Text style={styles.heroTitle}>
                Master Financial{'\n'}
                <Text style={styles.heroTitleAccent}>Security & Wealth</Text>
              </Text>
              
              <Text style={styles.heroSubtitle}>
                Transform your financial future with expert-level fraud protection 
                and wealth-building strategies designed for the modern world.
              </Text>
              
              {/* Personal Progress Card */}
              {completedCount > 0 && (
                <View style={styles.progressCard}>
                  <View style={styles.progressCardGradient}>
                    <View style={styles.progressHeader}>
                      <Target size={20} color="#ffffff" />
                      <Text style={styles.progressTitle}>Your Journey</Text>
                    </View>
                    <View style={styles.progressStats}>
                      <View style={styles.progressStat}>
                        <Text style={styles.progressNumber}>{completedCount}</Text>
                        <Text style={styles.progressLabel}>Completed</Text>
                      </View>
                      <View style={styles.progressDivider} />
                      <View style={styles.progressStat}>
                        <Text style={styles.progressNumber}>{averageScore}%</Text>
                        <Text style={styles.progressLabel}>Avg Score</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
              
              <View style={styles.heroButtons}>
                <TouchableOpacity 
                  style={styles.primaryButton} 
                  onPress={() => navigation.navigate('Quizzes' as never)}
                >
                  <View style={styles.primaryButtonGradient}>
                    <Zap size={18} color="#1a365d" />
                    <Text style={styles.primaryButtonText}>
                      {completedCount > 0 ? 'Continue Learning' : 'Start Your Journey'}
                    </Text>
                    <ArrowRight size={18} color="#1a365d" />
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.secondaryButton}
                  onPress={() => navigation.navigate('Resources' as never)}
                >
                  <Text style={styles.secondaryButtonText}>Explore Resources</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Why Choose FraudWise?</Text>
            <Text style={styles.sectionSubtitle}>
              Cutting-edge education meets practical protection in our comprehensive platform
            </Text>
          </View>
          
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <View key={index} style={styles.featureCard}>
                <View style={[styles.featureCardGradient, { 
                  backgroundColor: feature.gradient[0] 
                }]}>
                  <View style={styles.featureIconContainer}>
                    <IconComponent size={28} color={feature.iconColor} />
                  </View>
                  <View style={styles.featureContent}>
                    <Text style={styles.featureTitle}>{feature.title}</Text>
                    <Text style={styles.featureDescription}>{feature.description}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        {/* Statistics Section */}
        <View style={styles.statsSection}>
          <Text style={styles.statsTitle}>Trusted Worldwide</Text>
          <View style={styles.statsGrid}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <View key={index} style={styles.statCard}>
                  <View style={[styles.statCardGradient, { 
                    backgroundColor: stat.gradient[0] 
                  }]}>
                    <IconComponent size={24} color="#1f2937" />
                    <Text style={styles.statNumber}>{stat.number}</Text>
                    <Text style={styles.statLabel}>{stat.label}</Text>
                    <Text style={styles.statDescription}>{stat.description}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        {/* Call to Action */}
        <View style={styles.ctaSection}>
          <View style={styles.ctaGradient}>
            <View style={styles.ctaContent}>
              <Text style={styles.ctaTitle}>Ready to Become Unstoppable?</Text>
              <Text style={styles.ctaSubtitle}>
                Join thousands who've transformed their financial security and built lasting wealth
              </Text>
              
              <View style={styles.benefitsList}>
                {[
                  "25+ comprehensive learning modules",
                  "Beginner to expert progression",
                  "Achievement badges & rewards",
                  "100% free, forever"
                ].map((benefit, index) => (
                  <View key={index} style={styles.benefitItem}>
                    <CheckCircle size={16} color="#10b981" />
                    <Text style={styles.benefitText}>{benefit}</Text>
                  </View>
                ))}
              </View>

              <TouchableOpacity 
                style={styles.ctaButton} 
                onPress={() => navigation.navigate('Quizzes' as never)}
              >
                <View style={styles.ctaButtonGradient}>
                  <Sparkles size={18} color="#1a365d" />
                  <Text style={styles.ctaButtonText}>
                    {completedCount > 0 ? 'Continue Your Journey' : 'Start Learning Now'}
                  </Text>
                  <ArrowRight size={18} color="#1a365d" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity 
            style={styles.navItem} 
            onPress={() => navigation.navigate('Quizzes' as never)}
          >
            <View style={styles.navItemContent}>
              <BookOpen size={20} color="#667eea" />
              <Text style={styles.navItemText}>Quizzes</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.navItem} 
            onPress={() => navigation.navigate('Resources' as never)}
          >
            <View style={styles.navItemContent}>
              <Shield size={20} color="#f093fb" />
              <Text style={styles.navItemText}>Resources</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.navItem} 
            onPress={() => navigation.navigate('Contact' as never)}
          >
            <View style={styles.navItemContent}>
              <Users size={20} color="#4facfe" />
              <Text style={styles.navItemText}>Contact</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    minHeight: 500,
  },
  heroGradient: {
    flex: 1,
    backgroundColor: '#667eea',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  heroContent: {
    padding: 32,
    alignItems: 'center',
    paddingTop: 40,
  },
  logoContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  logoBackground: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  sparkle1: {
    position: 'absolute',
    top: -8,
    right: -8,
  },
  sparkle2: {
    position: 'absolute',
    bottom: -4,
    left: -4,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 40,
  },
  heroTitleAccent: {
    color: '#fbbf24',
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
    paddingHorizontal: 8,
  },
  progressCard: {
    width: '100%',
    marginBottom: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  progressCardGradient: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  progressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    gap: 8,
  },
  progressTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  progressStats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressStat: {
    alignItems: 'center',
    flex: 1,
  },
  progressDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 20,
  },
  progressNumber: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
  },
  progressLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    fontWeight: '500',
  },
  heroButtons: {
    width: '100%',
    gap: 16,
  },
  primaryButton: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  primaryButtonGradient: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
    gap: 8,
  },
  primaryButtonText: {
    color: '#1a365d',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  featuresSection: {
    padding: 32,
  },
  sectionHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1a202c',
    textAlign: 'center',
    marginBottom: 12,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#718096',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 16,
  },
  featureCard: {
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  featureCardGradient: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 20,
  },
  statsSection: {
    backgroundColor: '#f7fafc',
    paddingVertical: 40,
    paddingHorizontal: 32,
  },
  statsTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1a202c',
    textAlign: 'center',
    marginBottom: 32,
  },
  statsGrid: {
    gap: 16,
  },
  statCard: {
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  statCardGradient: {
    padding: 24,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1a202c',
    marginVertical: 8,
  },
  statLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3748',
    textAlign: 'center',
    marginBottom: 4,
  },
  statDescription: {
    fontSize: 12,
    color: '#718096',
    textAlign: 'center',
    lineHeight: 16,
  },
  ctaSection: {
    margin: 32,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 12,
  },
  ctaGradient: {
    backgroundColor: '#1a202c',
    background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
  },
  ctaContent: {
    padding: 32,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
  },
  ctaSubtitle: {
    fontSize: 16,
    color: '#e2e8f0',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  benefitsList: {
    marginBottom: 32,
    gap: 16,
    alignSelf: 'stretch',
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  benefitText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
  },
  ctaButton: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  ctaButtonGradient: {
    backgroundColor: '#10b981',
    background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
    gap: 8,
  },
  ctaButtonText: {
    color: '#1a365d',
    fontSize: 16,
    fontWeight: '700',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navItemContent: {
    alignItems: 'center',
    gap: 8,
  },
  navItemText: {
    color: '#4a5568',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default HomeScreen;