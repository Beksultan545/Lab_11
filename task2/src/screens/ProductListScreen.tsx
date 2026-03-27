import React, { useState, useCallback } from 'react';
import { View, FlatList, Text, RefreshControl, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProductItem } from '../components/ProductItem';
import { products, Product } from '../data/products';

type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
};

type ProductListScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProductList'>;
};

export function ProductListScreen({ navigation }: ProductListScreenProps) {
  const [refreshing, setRefreshing] = useState(false);

  const handleProductPress = useCallback((product: Product) => {
    navigation.navigate('ProductDetail', { product });
  }, [navigation]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setRefreshing(false);
  }, []);

  const renderItem = useCallback(({ item }: { item: Product }) => (
    <ProductItem product={item} onPress={handleProductPress} />
  ), [handleProductPress]);

  const keyExtractor = useCallback((item: Product) => item.id, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>🛒 Product Catalog</Text>
            <Text style={styles.headerSubtitle}>{products.length} items available</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
  },
  listContent: {
    paddingVertical: 8,
    paddingBottom: 24,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});