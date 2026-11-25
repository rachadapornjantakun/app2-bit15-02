import { Image, StyleSheet, Text, View } from 'react-native';

type CardProps = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export default function Card({ name, image, price }: CardProps) {
  return (
    <View style={cardStyle.box}>
      <Image source={{ uri: image }} style={cardStyle.image} />
      <Text style={cardStyle.text}>{name}</Text>
      <Text style={cardStyle.price}>{price}</Text>
    </View>
  );
}

const cardStyle = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'lightblue',
    gap: 10,
    margin: 10,
    padding: 10,
    borderRadius: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  text: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(239, 165, 238, 0.96)',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fae',
    backgroundColor: '#75d0ee',
    padding: 10,
    borderRadius: 20,
    overflow: 'hidden', 
  },
});