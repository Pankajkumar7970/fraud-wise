import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Shield, Brain, Award, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const features = [
    {
      icon: Shield,
      title: "Fraud Protection",
      description: "Learn to identify and avoid common scams including phishing, identity theft, investment fraud, and more."
    },
    {
      icon: Brain,
      title: "Financial Literacy",
      description: "Master budgeting, saving, investing, and other essential financial skills for long-term success."
    },
    {
      icon: Award,
      title: "Track Progress",
      description: "Earn badges, track scores, and monitor your learning progress across all quiz categories with detailed analytics."
    }
  ];

  const stats = [
    {
      icon: BookOpen,
      number: "23+",
      label: "Expert-Created Quizzes",
      description: "Comprehensive coverage of fraud and financial topics"
    },
    {
      icon: Users,
      number: "10K+",
      label: "Protected Users",
      description: "Join thousands who've strengthened their knowledge"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      description: "Users report feeling more confident about fraud detection"
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.logoContainer}>
            <Shield size={48} color="#ffffff" />
          </View>
          <Text style={styles.heroTitle}>Master Fraud Prevention & Financial Literacy</Text>
          <Text style={styles.heroSubtitle}>
            Build essential skills to protect your finances and make informed decisions. 
            From basic budgeting to advanced fraud detection - we've got you covered.
          </Text>
          
          {/* Personal Progress Preview */}
          {completedCount > 0 && (
            <View style={styles.progressPreview}>
              <Text style={styles.progressPreviewTitle}>Your Progress</Text>
              <View style={styles.progressStats}>
                <View style={styles.progressStat}>
                  <Text style={styles.progressStatNumber}>{completedCount}</Text>
                  <Text style={styles.progressStatLabel}>Completed</Text>
                </View>
                <View style={styles.progressStat}>
                  <Text style={styles.progressStatNumber}>{averageScore}%</Text>
                  <Text style={styles.progressStatLabel}>Avg Score</Text>
                </View>
              </View>
            </View>
          )}
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.primaryButton} 
              onPress={() => navigation.navigate('Quizzes' as never)}
            >
              <Text style={styles.primaryButtonText}>
                {completedCount > 0 ? 'Continue Learning' : 'Start Learning'}
              </Text>
              <ArrowRight size={20} color="#1a4b8c" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.secondaryButton}
              onPress={() => navigation.navigate('Resources' as never)}
            >
              <Text style={styles.secondaryButtonText}>View Resources</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Comprehensive Protection & Education</Text>
          <Text style={styles.sectionSubtitle}>
            Our platform combines cutting-edge fraud detection education with practical 
            financial literacy skills to give you complete protection.
          </Text>
          
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <View key={index} style={styles.featureCard}>
                <View style={styles.featureIconContainer}>
                  <IconComponent size={32} color="#1a4b8c" />
                </View>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            );
          })}
        </View>

        {/* Statistics Section */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Trusted by Thousands</Text>
          <View style={styles.statsGrid}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <View key={index} style={styles.statCard}>
                  <IconComponent size={32} color="#1a4b8c" />
                  <Text style={styles.statNumber}>{stat.number}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                  <Text style={styles.statDescription}>{stat.description}</Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* Call to Action */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Protect Yourself?</Text>
          <Text style={styles.ctaSubtitle}>
            Join our community of informed users who've taken control of their financial security.
            Start with our beginner-friendly quizzes and work your way up to expert level.
          </Text>
          
          <View style={styles.benefitsList}>
            <View style={styles.benefitItem}>
              <CheckCircle size={16} color="#ffffff" />
              <Text style={styles.benefitText}>23+ comprehensive quizzes</Text>
            </View>
            <View style={styles.benefitItem}>
              <CheckCircle size={16} color="#ffffff" />
              <Text style={styles.benefitText}>Beginner to advanced levels</Text>
            </View>
            <View style={styles.benefitItem}>
              <CheckCircle size={16} color="#ffffff" />
              <Text style={styles.benefitText}>Progress tracking & badges</Text>
            </View>
            <View style={styles.benefitItem}>
              <CheckCircle size={16} color="#ffffff" />
              <Text style={styles.benefitText}>100% free forever</Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.ctaButton} 
            onPress={() => navigation.navigate('Quizzes' as never)}
          >
            <Text style={styles.ctaButtonText}>
              {completedCount > 0 ? 'Continue Your Journey' : 'Start Your First Quiz'}
            </Text>
            <ArrowRight size={20} color="#1a4b8c" />
          </TouchableOpacity>
        </View>

        {/* Navigation Menu */}
        <View style={styles.navigationMenu}>
          <TouchableOpacity 
            style={styles.navItem} 
            onPress={() => navigation.navigate('Quizzes' as never)}
          >
            <Text style={styles.navItemText}>Quizzes</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.navItem} 
            onPress={() => navigation.navigate('Resources' as never)}
          >
            <Text style={styles.navItemText}>Resources</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.navItem} 
            onPress={() => navigation.navigate('Contact' as never)}
          >
            <Text style={styles.navItemText}>Contact</Text>
          </TouchableOpacity>
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
  heroSection: {
    backgroundColor: '#1a4b8c',
    padding: 24,
    alignItems: 'center',
    paddingBottom: 32,
  },
  logoContainer: {
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#e5e7eb',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  progressPreview: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    width: '100%',
  },
  progressPreviewTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
  progressStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  progressStat: {
    alignItems: 'center',
  },
  progressStatNumber: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  progressStatLabel: {
    color: '#e5e7eb',
    fontSize: 12,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    gap: 8,
  },
  primaryButtonText: {
    color: '#1a4b8c',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  featuresSection: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 12,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#1a4b8c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  featureIconContainer: {
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  statsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    backgroundColor: '#f8fafc',
  },
  statsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 24,
  },
  statsGrid: {
    gap: 16,
  },
  statCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#1a4b8c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a4b8c',
    marginVertical: 8,
  },
  statLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 4,
  },
  statDescription: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 16,
  },
  ctaSection: {
    backgroundColor: '#1a4b8c',
    padding: 24,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
  },
  ctaSubtitle: {
    fontSize: 16,
    color: '#e5e7eb',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  benefitsList: {
    marginBottom: 24,
    gap: 12,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  benefitText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
  },
  ctaButton: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    gap: 8,
  },
  ctaButtonText: {
    color: '#1a4b8c',
    fontSize: 16,
    fontWeight: '600',
  },
  navigationMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 24,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  navItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  navItemText: {
    color: '#1a4b8c',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;