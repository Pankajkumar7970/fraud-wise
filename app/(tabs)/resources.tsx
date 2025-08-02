import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
} from 'react-native';
import { ExternalLink, Phone, Shield, FileText, TriangleAlert as AlertTriangle } from 'lucide-react-native';

export default function ResourcesScreen() {
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
      number: "1-877-382-4357",
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

  const handleCall = (number: string) => {
    const phoneNumber = `tel:${number}`;
    Linking.canOpenURL(phoneNumber)
      .then((supported) => {
        if (supported) {
          Linking.openURL(phoneNumber);
        } else {
          Alert.alert('Error', 'Phone calls are not supported on this device');
        }
      })
      .catch((err) => console.error('Error opening phone app:', err));
  };

  const handleOpenURL = (url: string) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Error', 'Cannot open this URL');
        }
      })
      .catch((err) => console.error('Error opening URL:', err));
  };

  return (
    <ScrollView style={styles.container}>
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
          <Phone color="#dc2626" size={24} />
          <Text style={styles.sectionTitle}>Emergency Contacts</Text>
        </View>
        
        {emergencyContacts.map((contact, index) => (
          <TouchableOpacity
            key={index}
            style={styles.contactCard}
            onPress={() => handleCall(contact.number)}
          >
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.contactDescription}>{contact.description}</Text>
              <Text style={styles.contactNumber}>{contact.number}</Text>
            </View>
            <Phone color="#dc2626" size={20} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Official Resources */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Official Resources & Reporting</Text>
        
        {resources.map((resource, index) => {
          const IconComponent = resource.icon;
          return (
            <TouchableOpacity
              key={index}
              style={styles.resourceCard}
              onPress={() => handleOpenURL(resource.url)}
            >
              <View style={styles.resourceHeader}>
                <IconComponent color="#1a365d" size={32} />
                <View style={styles.resourceInfo}>
                  <Text style={styles.resourceTitle}>{resource.title}</Text>
                  <Text style={styles.resourceCategory}>{resource.category}</Text>
                </View>
              </View>
              <Text style={styles.resourceDescription}>{resource.description}</Text>
              <View style={styles.resourceFooter}>
                <Text style={styles.visitText}>Visit Website</Text>
                <ExternalLink color="#1a365d" size={16} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Quick Tips */}
      <View style={styles.tipsSection}>
        <Text style={styles.tipsTitle}>Quick Safety Tips</Text>
        
        <View style={styles.tipsGrid}>
          <View style={styles.tipColumn}>
            <Text style={styles.tipHeader}>If You're Being Scammed:</Text>
            <Text style={styles.tipText}>• Stop all communication immediately</Text>
            <Text style={styles.tipText}>• Don't send money or personal information</Text>
            <Text style={styles.tipText}>• Document everything (emails, calls, messages)</Text>
            <Text style={styles.tipText}>• Report to authorities using contacts above</Text>
          </View>
          
          <View style={styles.tipColumn}>
            <Text style={styles.tipHeader}>Prevention Best Practices:</Text>
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
        
        <View style={styles.materialsGrid}>
          <View style={styles.materialCard}>
            <Text style={styles.materialTitle}>Fraud Alert Guidelines</Text>
            <Text style={styles.materialDescription}>
              Learn how to place and manage fraud alerts on your credit reports
            </Text>
            <TouchableOpacity style={styles.downloadButton}>
              <Text style={styles.downloadText}>Download PDF</Text>
              <FileText color="#1a365d" size={16} />
            </TouchableOpacity>
          </View>

          <View style={styles.materialCard}>
            <Text style={styles.materialTitle}>Identity Theft Recovery</Text>
            <Text style={styles.materialDescription}>
              Step-by-step guide to recovering from identity theft
            </Text>
            <TouchableOpacity style={styles.downloadButton}>
              <Text style={styles.downloadText}>Download PDF</Text>
              <FileText color="#1a365d" size={16} />
            </TouchableOpacity>
          </View>

          <View style={styles.materialCard}>
            <Text style={styles.materialTitle}>Safe Online Banking</Text>
            <Text style={styles.materialDescription}>
              Best practices for secure online and mobile banking
            </Text>
            <TouchableOpacity style={styles.downloadButton}>
              <Text style={styles.downloadText}>Download PDF</Text>
              <FileText color="#1a365d" size={16} />
            </TouchableOpacity>
          </View>
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  contactCard: {
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 4,
  },
  contactDescription: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  contactNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  resourceCard: {
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resourceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 12,
  },
  resourceInfo: {
    flex: 1,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  resourceCategory: {
    fontSize: 12,
    color: '#64748b',
  },
  resourceDescription: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
    lineHeight: 20,
  },
  resourceFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
  },
  visitText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a365d',
  },
  tipsSection: {
    backgroundColor: '#1a365d',
    padding: 24,
    margin: 24,
    borderRadius: 12,
  },
  tipsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
  },
  tipsGrid: {
    gap: 24,
  },
  tipColumn: {
    gap: 8,
  },
  tipHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#e2e8f0',
    lineHeight: 20,
  },
  materialsGrid: {
    gap: 16,
  },
  materialCard: {
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  materialTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  materialDescription: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
    lineHeight: 20,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
  },
  downloadText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a365d',
  },
});