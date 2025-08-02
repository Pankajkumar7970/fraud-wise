import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react-native';

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    
    // In a real app, this would send the message
    Alert.alert(
      "Message Sent!",
      "Thank you for contacting us. We'll get back to you soon.",
      [{ text: "OK" }]
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Contact Us</Text>
          <Text style={styles.subtitle}>
            Have questions about fraud prevention or need help with our platform? 
            We're here to assist you.
          </Text>
        </View>

        {/* Contact Form */}
        <View style={styles.formSection}>
          <View style={styles.formHeader}>
            <MessageSquare size={24} color="#1a4b8c" />
            <Text style={styles.formTitle}>Send us a Message</Text>
          </View>
          <Text style={styles.formSubtitle}>
            Fill out the form below and we'll respond within 24 hours
          </Text>
          
          <View style={styles.form}>
            <View style={styles.inputRow}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Full Name</Text>
                <TextInput
                  style={styles.textInput}
                  value={formData.name}
                  onChangeText={(value) => handleChange('name', value)}
                  placeholder="Enter your full name"
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email Address</Text>
                <TextInput
                  style={styles.textInput}
                  value={formData.email}
                  onChangeText={(value) => handleChange('email', value)}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Subject</Text>
              <TextInput
                style={styles.textInput}
                value={formData.subject}
                onChangeText={(value) => handleChange('subject', value)}
                placeholder="Enter subject"
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Message</Text>
              <TextInput
                style={[styles.textInput, styles.textArea]}
                value={formData.message}
                onChangeText={(value) => handleChange('message', value)}
                placeholder="Describe your question or concern..."
                multiline
                numberOfLines={5}
                textAlignVertical="top"
              />
            </View>
            
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Send Message</Text>
              <Mail size={16} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Contact Information */}
        <View style={styles.contactInfo}>
          <View style={styles.contactCard}>
            <View style={styles.contactHeader}>
              <Phone size={20} color="#1a4b8c" />
              <Text style={styles.contactTitle}>Support Hotline</Text>
            </View>
            <Text style={styles.contactNumber}>1-800-FRAUD-HELP</Text>
            <Text style={styles.contactDescription}>
              Available Monday-Friday, 9 AM - 6 PM EST
            </Text>
          </View>

          <View style={styles.contactCard}>
            <View style={styles.contactHeader}>
              <Mail size={20} color="#1a4b8c" />
              <Text style={styles.contactTitle}>Email Support</Text>
            </View>
            <Text style={styles.contactEmail}>support@fraudwise.com</Text>
            <Text style={styles.contactDescription}>
              We typically respond within 24 hours
            </Text>
          </View>

          <View style={styles.contactCard}>
            <View style={styles.contactHeader}>
              <MapPin size={20} color="#1a4b8c" />
              <Text style={styles.contactTitle}>Office Location</Text>
            </View>
            <Text style={styles.contactOffice}>FraudWise Education Center</Text>
            <Text style={styles.contactAddress}>
              123 Security Boulevard{'\n'}
              Washington, DC 20001{'\n'}
              United States
            </Text>
          </View>

          {/* FAQ Section */}
          <View style={styles.faqCard}>
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
  formSection: {
    backgroundColor: '#ffffff',
    margin: 24,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#1a4b8c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  formSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 20,
  },
  form: {
    gap: 16,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 12,
  },
  inputContainer: {
    flex: 1,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#1a4b8c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 8,
    gap: 8,
    marginTop: 8,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  contactInfo: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    gap: 16,
  },
  contactCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#1a4b8c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  contactNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  contactEmail: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  contactOffice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  contactAddress: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  contactDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
  faqCard: {
    backgroundColor: '#1a4b8c',
    padding: 20,
    borderRadius: 12,
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  faqItem: {
    marginBottom: 16,
  },
  faqQuestion: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  faqAnswer: {
    fontSize: 12,
    color: '#e5e7eb',
    lineHeight: 18,
  },
});

export default ContactScreen;