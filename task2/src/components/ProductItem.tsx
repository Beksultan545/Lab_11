import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '../data/products';

interface ProductItemProps {
  product: Product;
  onPress: (product: Product) => void;
}

export function ProductItem({ product, onPress }: ProductItemProps) {
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
    <TouchableOpacity style={styles.container} onPress={() => onPress(product)}>
      <View style={styles.imageBox}>
        <Text style={styles.emoji}>🛍️</Text>
      </View>
      <View style={styles.info}>
        <View style={styles.topRow}>
          <View style={[styles.categoryBadge, { backgroundColor: categoryColors[product.category] || '#f0f0f0' }]}>
            <Text style={[styles.categoryText, { color: categoryTextColors[product.category] || '#666' }]}>
              {product.category}
            </Text>
          </View>
          <Text style={styles.rating}>⭐ {product.rating}</Text>
        </View>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <View style={styles.arrowBtn}>
            <Text style={styles.arrowText}>→</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 14,
    marginHorizontal: 16,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  imageBox: {
    width: 70,
    height: 70,
    borderRadius: 14,
    backgroundColor: '#f0f4ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  emoji: {
    fontSize: 32,
  },
  info: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: '600',
  },
  rating: {
    fontSize: 12,
    color: '#888',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: '#999',
    lineHeight: 17,
    marginBottom: 8,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  arrowBtn: {
    backgroundColor: '#0066cc',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});