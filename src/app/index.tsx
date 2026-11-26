import { FlatList, StyleSheet, Text, View } from 'react-native';

import Card from '@/components/card';
import products from '../products.json';

export default function App() {
  return (
    <View style={myStyle.container}>
      <Text style={myStyle.header}>🛒 รายการสินค้า 🛒</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={myStyle.listContent}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            category={item.category}
            stock={item.stock}
          />
        )}
      />
    </View>
  );
}

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f9fc',
    paddingTop: 50, // 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e3a5f',
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 24, // 
  },

});