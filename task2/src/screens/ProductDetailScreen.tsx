import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Product } from '../data/products';

type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
};

type ProductDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'ProductDetail'>;
};

export function ProductDetailScreen({ route }: ProductDetailScreenProps) {
  const { product } = route.params;

  const categoryColors: { [key: string]: string } = {
    Electronics: '#e6f0ff',
    Sports: '#e6ffed',
    Home: '#fff8e6',
    Office: '#f3e6ff',
  };

  const categoryTextColors: { [key: string]: string } = {
    Electronics: '#0066cc',
    Sports: '#00aa44',
    Home: '#cc8800',
    Office: '#7700cc',
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageBanner}>
        <Text style={styles.imageEmoji}>🛍️</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.topRow}>
          <View style={[styles.categoryBadge, { backgroundColor: categoryColors[product.category] || '#f0f0f0' }]}>
            <Text style={[styles.categoryText, { color: categoryTextColors[product.category] || '#666' }]}>
              {product.category}
            </Text>
          </View>
          <Text style={styles.rating}>⭐ {product.rating} / 5.0</Text>
        </View>

        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.platformBox}>
          <Text style={styles.platformTitle}>📱 Platform Info</Text>
          <Text style={styles.platformText}>
            OS: {Platform.OS === 'ios' ? '🍎 iOS' : Platform.OS === 'android' ? '🤖 Android' : '🌐 Web'}
          </Text>
          <Text style={styles.platformText}>
            Version: {Platform.Version}
          </Text>
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>🛒 Add to Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.wishlistButton}>
          <Text style={styles.wishlistButtonText}>♡ Add to Wishlist</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
  },
  imageBanner: {
    height: 220,
    backgroundColor: '#e6f0ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageEmoji: {
    fontSize: 80,
  },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: -20,
    padding: 24,
    minHeight: 500,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryBadge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
  },
  rating: {
    fontSize: 14,
    color: '#888',
    fontWeight: '600',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 8,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
  },
  platformBox: {
    backgroundColor: '#f8f9ff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e8eaf6',
  },
  platformTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 8,
  },
  platformText: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#0066cc',
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
    marginBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#0066cc',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  addButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  wishlistButton: {
    backgroundColor: '#f0f4ff',
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#0066cc',
  },
  wishlistButtonText: {
    color: '#0066cc',
    fontSize: 17,
    fontWeight: '600',
  },
});