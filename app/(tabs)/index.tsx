import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { router } from 'expo-router';
import { Shield, Brain, Award, Users, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Protect Yourself from Fraud</Text>
        <Text style={styles.heroSubtitle}>
          Learn to identify scams, build financial literacy, and safeguard your money 
          through interactive quizzes and expert guidance.
        </Text>
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => router.push('/quizzes')}
        >
          <Text style={styles.primaryButtonText}>Start Learning</Text>
          <ArrowRight color="#1a365d" size={20} />
        </TouchableOpacity>
      </View>

      {/* Features Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose FraudWise?</Text>
        <Text style={styles.sectionSubtitle}>
          Comprehensive fraud awareness and financial literacy education designed 
          to keep you and your money safe.
        </Text>

        <View style={styles.featuresGrid}>
          <View style={styles.featureCard}>
            <Shield color="#1a365d" size={48} style={styles.featureIcon} />
            <Text style={styles.featureTitle}>Fraud Protection</Text>
            <Text style={styles.featureDescription}>
              Learn to identify and avoid common scams including phishing, 
              identity theft, investment fraud, and more.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Brain color="#0891b2" size={48} style={styles.featureIcon} />
            <Text style={styles.featureTitle}>Financial Literacy</Text>
            <Text style={styles.featureDescription}>
              Master budgeting, saving, investing, and other essential 
              financial skills for long-term success.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Award color="#eab308" size={48} style={styles.featureIcon} />
            <Text style={styles.featureTitle}>Track Progress</Text>
            <Text style={styles.featureDescription}>
              Earn badges, track scores, and monitor your learning 
              progress across all quiz categories.
            </Text>
          </View>
        </View>
      </View>

      {/* Statistics Section */}
      <View style={styles.statsSection}>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>$5.8B</Text>
            <Text style={styles.statLabel}>Lost to fraud annually in the US</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>15+</Text>
            <Text style={styles.statLabel}>Interactive quiz categories</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>100%</Text>
            <Text style={styles.statLabel}>Free educational content</Text>
          </View>
        </View>
      </View>

      {/* Call to Action */}
      <View style={styles.cta}>
        <Text style={styles.ctaTitle}>Ready to Protect Yourself?</Text>
        <Text style={styles.ctaSubtitle}>
          Join thousands of users who have already strengthened their fraud 
          awareness and financial knowledge.
        </Text>
        
        <View style={styles.ctaFeatures}>
          <View style={styles.ctaFeature}>
            <CheckCircle color="#fff" size={20} />
            <Text style={styles.ctaFeatureText}>Expert-created content</Text>
          </View>
          <View style={styles.ctaFeature}>
            <CheckCircle color="#fff" size={20} />
            <Text style={styles.ctaFeatureText}>Real-world scenarios</Text>
          </View>
          <View style={styles.ctaFeature}>
            <CheckCircle color="#fff" size={20} />
            <Text style={styles.ctaFeatureText}>Immediate feedback</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.ctaButton}
          onPress={() => router.push('/quizzes')}
        >
          <Text style={styles.ctaButtonText}>Start Your First Quiz</Text>
          <ArrowRight color="#1a365d" size={20} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hero: {
    backgroundColor: '#1a365d',
    padding: 32,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#e2e8f0',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  primaryButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  primaryButtonText: {
    color: '#1a365d',
    fontSize: 18,
    fontWeight: '600',
  },
  section: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 16,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
  },
  featuresGrid: {
    gap: 16,
  },
  featureCard: {
    backgroundColor: '#f8fafc',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIcon: {
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
  },
  statsSection: {
    backgroundColor: '#f1f5f9',
    padding: 24,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statCard: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  cta: {
    backgroundColor: '#1a365d',
    padding: 32,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  ctaSubtitle: {
    fontSize: 16,
    color: '#e2e8f0',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  ctaFeatures: {
    gap: 12,
    marginBottom: 32,
  },
  ctaFeature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ctaFeatureText: {
    color: '#fff',
    fontSize: 16,
  },
  ctaButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ctaButtonText: {
    color: '#1a365d',
    fontSize: 18,
    fontWeight: '600',
  },
});