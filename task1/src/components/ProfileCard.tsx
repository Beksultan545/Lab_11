import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ProfileCardProps {
  name: string;
  role: string;
  avatar?: string;
  bio: string;
}

export function ProfileCard({ name, role, avatar, bio }: ProfileCardProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.banner} />
      <View style={styles.card}>
        <Image
          source={{ uri: avatar || 'https://i.pravatar.cc/150' }}
          style={styles.avatar}
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{role}</Text>
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.bio}>{bio}</Text>
        <View style={styles.divider} />
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statNumber}>5★</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statNumber}>3yr</Text>
            <Text style={styles.statLabel}>Experience</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  banner: {
    height: 80,
    backgroundColor: '#0066cc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    paddingBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 4,
    borderColor: '#fff',
    marginTop: -45,
  },
  badge: {
    backgroundColor: '#e6f0ff',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
    marginTop: 10,
  },
  badgeText: {
    color: '#0066cc',
    fontSize: 12,
    fontWeight: '600',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginTop: 8,
  },
  bio: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 8,
    marginHorizontal: 24,
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    width: '90%',
    marginTop: 20,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: 16,
    paddingHorizontal: 20,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 16,
  },
});