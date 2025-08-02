import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react-native';

export default function ContactScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    Alert.alert(
      'Message Sent!',
      'Thank you for contacting us. We\'ll get back to you soon.',
      [{ text: 'OK', onPress: () => setFormData({ name: '', email: '', subject: '', message: '' }) }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.subtitle}>
          Have questions about fraud prevention or need help with our platform? 
          We're here to assist you.
        </Text>
      </View>

      {/* Contact Form */}
      <View style={styles.section}>
        <View style={styles.formHeader}>
          <MessageSquare color="#1a365d" size={24} />
          <Text style={styles.formTitle}>Send us a Message</Text>
        </View>
        <Text style={styles.formSubtitle}>
          Fill out the form below and we'll respond within 24 hours
        </Text>

        <View style={styles.form}>
          <View style={styles.inputRow}>
            <View style={styles.inputHalf}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                value={formData.name}
                onChangeText={(text) => setFormData({ ...formData, name: text })}
                placeholder="Enter your name"
              />
            </View>
            <View style={styles.inputHalf}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={(text) => setFormData({ ...formData, email: text })}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Subject</Text>
            <TextInput
              style={styles.input}
              value={formData.subject}
              onChangeText={(text) => setFormData({ ...formData, subject: text })}
              placeholder="Enter subject"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.message}
              onChangeText={(text) => setFormData({ ...formData, message: text })}
              placeholder="Describe your question or concern..."
              multiline
              numberOfLines={5}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Send Message</Text>
            <Mail color="#fff" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <View style={styles.contactCard}>
          <Phone color="#1a365d" size={24} />
          <Text style={styles.contactTitle}>Support Hotline</Text>
          <Text style={styles.contactNumber}>1-800-FRAUD-HELP</Text>
          <Text style={styles.contactDescription}>
            Available Monday-Friday, 9 AM - 6 PM EST
          </Text>
        </View>

        <View style={styles.contactCard}>
          <Mail color="#1a365d" size={24} />
          <Text style={styles.contactTitle}>Email Support</Text>
          <Text style={styles.contactNumber}>support@fraudwise.com</Text>
          <Text style={styles.contactDescription}>
            We typically respond within 24 hours
          </Text>
        </View>

        <View style={styles.contactCard}>
          <MapPin color="#1a365d" size={24} />
          <Text style={styles.contactTitle}>Office Location</Text>
          <Text style={styles.contactNumber}>FraudWise Education Center</Text>
          <Text style={styles.contactDescription}>
            123 Security Boulevard{'\n'}
            Washington, DC 20001{'\n'}
            United States
          </Text>
        </View>
      </View>

      {/* FAQ Section */}
      <View style={styles.faqSection}>
        <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
        
        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I report a scam?</Text>
          <Text style={styles.faqAnswer}>
            Visit our Resources page for official reporting channels and emergency contacts.
          </Text>
        </View>
        
        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>Are the quizzes really free?</Text>
          <Text style={styles.faqAnswer}>
            Yes! All our educational content is completely free and always will be.
          </Text>
        </View>
        
        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How often is content updated?</Text>
          <Text style={styles.faqAnswer}>
            We regularly update our quizzes and resources to reflect the latest fraud trends.
          </Text>
        </View>
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
  section: {
    padding: 24,
  },
  formHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  formSubtitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 24,
  },
  form: {
    gap: 16,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 12,
  },
  inputHalf: {
    flex: 1,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#1a365d',
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  contactCard: {
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 12,
    marginBottom: 8,
  },
  contactNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 8,
  },
  contactDescription: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
  },
  faqSection: {
    backgroundColor: '#1a365d',
    margin: 24,
    padding: 24,
    borderRadius: 12,
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
  },
  faqItem: {
    marginBottom: 16,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#e2e8f0',
    lineHeight: 20,
  },
});