import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function ContactSection() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && phone && message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Me</Text>
      <Text style={styles.subtitle}>Fill in the form below to get in touch</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>📧 Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="your@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#bbb"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>📞 Phone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="+7 777 123 4567"
          keyboardType="phone-pad"
          placeholderTextColor="#bbb"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>💬 Message</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={message}
          onChangeText={setMessage}
          placeholder="Write your message here..."
          multiline
          numberOfLines={4}
          placeholderTextColor="#bbb"
        />
      </View>

      <TouchableOpacity
        style={[styles.button, (!email || !phone || !message) && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={!email || !phone || !message}
      >
        <Text style={styles.buttonText}>
          {submitted ? '✅ Sent!' : 'Send Message →'}
        </Text>
      </TouchableOpacity>

      {submitted && (
        <View style={styles.successMessage}>
          <Text style={styles.successText}>🎉 Message sent successfully!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#aaa',
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f8f9ff',
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    color: '#333',
    borderWidth: 1.5,
    borderColor: '#e8eaf6',
  },
  textArea: {
    height: 110,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    backgroundColor: '#c5d5ea',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  successMessage: {
    backgroundColor: '#e8f5e9',
    borderRadius: 12,
    padding: 14,
    marginTop: 16,
    alignItems: 'center',
  },
  successText: {
    color: '#2e7d32',
    fontSize: 14,
    fontWeight: '600',
  },
});