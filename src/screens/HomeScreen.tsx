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
      description: "Earn badges, track scores, and monitor your learning progress across all quiz categories."
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
          <Text style={styles.heroTitle}>Protect Yourself from Fraud</Text>
          <Text style={styles.heroSubtitle}>
            Learn to identify scams, build financial literacy, and safeguard your money 
            through interactive quizzes and expert guidance.
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.primaryButton} 
              onPress={() => navigation.navigate('Quizzes' as never)}
            >
              <Text style={styles.primaryButtonText}>Start Learning</Text>
              <ArrowRight size={20} color="#1a4b8c" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Why Choose FraudWise?</Text>
          <Text style={styles.sectionSubtitle}>
            Comprehensive fraud awareness and financial literacy education designed 
            to keep you and your money safe.
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
        <View style={styles.statsSection}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>$5.8B</Text>
            <Text style={styles.statLabel}>Lost to fraud annually in the US</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>15+</Text>
            <Text style={styles.statLabel}>Interactive quiz categories</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>100%</Text>
            <Text style={styles.statLabel}>Free educational content</Text>
          </View>
        </View>

        {/* Call to Action */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Protect Yourself?</Text>
          <Text style={styles.ctaSubtitle}>
            Join thousands of users who have already strengthened their fraud 
            awareness and financial knowledge.
          </Text>
          
          <View style={styles.benefitsList}>
            <View style={styles.benefitItem}>
              <CheckCircle size={16} color="#ffffff" />
              <Text style={styles.benefitText}>Expert-created content</Text>
            </View>
            <View style={styles.benefitItem}>
              <CheckCircle size={16} color="#ffffff" />
              <Text style={styles.benefitText}>Real-world scenarios</Text>
            </View>
            <View style={styles.benefitItem}>
              <CheckCircle size={16} color="#ffffff" />
              <Text style={styles.benefitText}>Immediate feedback</Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.ctaButton} 
            onPress={() => navigation.navigate('Quizzes' as never)}
          >
            <Text style={styles.ctaButtonText}>Start Your First Quiz</Text>
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
  },
  logoContainer: {
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#e5e7eb',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
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
    padding: 24,
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
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#1a4b8c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a4b8c',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
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
    gap: 8,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  benefitText: {
    color: '#ffffff',
    fontSize: 14,
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
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  navItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  navItemText: {
    color: '#1a4b8c',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default HomeScreen;