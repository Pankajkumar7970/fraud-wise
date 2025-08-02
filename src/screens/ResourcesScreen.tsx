import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Phone, Shield, FileText, AlertTriangle, ExternalLink } from 'lucide-react-native';

const ResourcesScreen = () => {
  const resources = [
    {
      title: "Federal Trade Commission (FTC)",
      description: "Report fraud and get consumer protection resources",
      url: "https://www.ftc.gov/",
      icon: Shield,
      category: "Government"
    },
    {
      title: "Consumer Financial Protection Bureau",
      description: "Financial education and complaint submission",
      url: "https://www.consumerfinance.gov/",
      icon: FileText,
      category: "Government"
    },
    {
      title: "AARP Fraud Watch Network",
      description: "Fraud prevention resources and alerts",
      url: "https://www.aarp.org/money/scams-fraud/",
      icon: AlertTriangle,
      category: "Nonprofit"
    },
    {
      title: "FBI Internet Crime Complaint Center",
      description: "Report internet-related crimes",
      url: "https://www.ic3.gov/",
      icon: Shield,
      category: "Government"
    }
  ];

  const emergencyContacts = [
    {
      name: "FTC Fraud Hotline",
      number: "1-877-FTC-HELP",
      description: "Report fraud and identity theft"
    },
    {
      name: "Social Security Fraud Hotline",
      number: "1-800-269-0271",
      description: "Report Social Security fraud"
    },
    {
      name: "IRS Identity Theft Hotline",
      number: "1-800-908-4490",
      description: "Report tax-related identity theft"
    }
  ];

  const handleOpenURL = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "Cannot open this URL");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to open URL");
    }
  };

  const handleCall = (number: string) => {
    const phoneNumber = `tel:${number}`;
    Linking.openURL(phoneNumber);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Fraud Prevention Resources</Text>
          <Text style={styles.subtitle}>
            Access trusted resources, report fraud, and get help when you need it most.
          </Text>
        </View>

        {/* Emergency Contacts */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Phone size={24} color="#ef4444" />
            <Text style={styles.sectionTitle}>Emergency Contacts</Text>
          </View>
          
          {emergencyContacts.map((contact, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.contactCard}
              onPress={() => handleCall(contact.number)}
            >
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.contactDescription}>{contact.description}</Text>
              <Text style={styles.contactNumber}>{contact.number}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Official Resources */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Official Resources & Reporting</Text>
          
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <View key={index} style={styles.resourceCard}>
                <View style={styles.resourceHeader}>
                  <View style={styles.resourceInfo}>
                    <IconComponent size={24} color="#1a4b8c" />
                    <View style={styles.resourceText}>
                      <Text style={styles.resourceTitle}>{resource.title}</Text>
                      <Text style={styles.resourceCategory}>{resource.category}</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.resourceDescription}>{resource.description}</Text>
                <TouchableOpacity 
                  style={styles.resourceButton}
                  onPress={() => handleOpenURL(resource.url)}
                >
                  <Text style={styles.resourceButtonText}>Visit Website</Text>
                  <ExternalLink size={16} color="#1a4b8c" />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        {/* Quick Tips */}
        <View style={styles.tipsSection}>
          <Text style={styles.tipsTitle}>Quick Safety Tips</Text>
          
          <View style={styles.tipsContainer}>
            <View style={styles.tipColumn}>
              <Text style={styles.tipColumnTitle}>If You're Being Scammed:</Text>
              <Text style={styles.tipText}>• Stop all communication immediately</Text>
              <Text style={styles.tipText}>• Don't send money or personal information</Text>
              <Text style={styles.tipText}>• Document everything (emails, calls, messages)</Text>
              <Text style={styles.tipText}>• Report to authorities using contacts above</Text>
            </View>
            
            <View style={styles.tipColumn}>
              <Text style={styles.tipColumnTitle}>Prevention Best Practices:</Text>
              <Text style={styles.tipText}>• Verify caller/sender identity independently</Text>
              <Text style={styles.tipText}>• Never give personal info over phone/email</Text>
              <Text style={styles.tipText}>• Use strong, unique passwords</Text>
              <Text style={styles.tipText}>• Monitor accounts and credit reports regularly</Text>
            </View>
          </View>
        </View>

        {/* Educational Materials */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Educational Materials</Text>
          
          <View style={styles.materialCard}>
            <Text style={styles.materialTitle}>Fraud Alert Guidelines</Text>
            <Text style={styles.materialDescription}>
              Learn how to place and manage fraud alerts on your credit reports
            </Text>
            <TouchableOpacity style={styles.materialButton}>
              <Text style={styles.materialButtonText}>Download PDF</Text>
              <FileText size={16} color="#1a4b8c" />
            </TouchableOpacity>
          </View>

          <View style={styles.materialCard}>
            <Text style={styles.materialTitle}>Identity Theft Recovery</Text>
            <Text style={styles.materialDescription}>
              Step-by-step guide to recovering from identity theft
            </Text>
            <TouchableOpacity style={styles.materialButton}>
              <Text style={styles.materialButtonText}>Download PDF</Text>
              <FileText size={16} color="#1a4b8c" />
            </TouchableOpacity>
          </View>

          <View style={styles.materialCard}>
            <Text style={styles.materialTitle}>Safe Online Banking</Text>
            <Text style={styles.materialDescription}>
              Best practices for secure online and mobile banking
            </Text>
            <TouchableOpacity style={styles.materialButton}>
              <Text style={styles.materialButtonText}>Download PDF</Text>
              <FileText size={16} color="#1a4b8c" />
            </TouchableOpacity>
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
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  contactCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#1a4b8c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ef4444',
    marginBottom: 4,
  },
  contactDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  contactNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  resourceCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#1a4b8c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resourceHeader: {
    marginBottom: 12,
  },
  resourceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  resourceText: {
    flex: 1,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  resourceCategory: {
    fontSize: 12,
    color: '#6b7280',
  },
  resourceDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
    lineHeight: 20,
  },
  resourceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    gap: 8,
  },
  resourceButtonText: {
    color: '#1a4b8c',
    fontSize: 14,
    fontWeight: '500',
  },
  tipsSection: {
    backgroundColor: '#1a4b8c',
    margin: 24,
    padding: 24,
    borderRadius: 12,
  },
  tipsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  tipsContainer: {
    gap: 20,
  },
  tipColumn: {
    marginBottom: 16,
  },
  tipColumnTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#e5e7eb',
    marginBottom: 4,
    lineHeight: 20,
  },
  materialCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#1a4b8c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  materialTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  materialDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
    lineHeight: 20,
  },
  materialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    gap: 8,
  },
  materialButtonText: {
    color: '#1a4b8c',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ResourcesScreen;