import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ProfileCard } from './src/components/ProfileCard';
import { ContactSection } from './src/components/ContactSection';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <ProfileCard
        name="Бексұлтан"
        role="Frontend Developer"
        avatar="https://i.pravatar.cc/150?img=8"
        bio="React Native бағдарламашысы. Мобильді қосымшалар жасаумен айналысамын."
      />
      <ContactSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
  },
});