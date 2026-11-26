import { Image, StyleSheet, Text, View } from 'react-native';

type CardProps = {
  id: number;
  name: string;
  image: string;
  price: number;
  category : string;
  stock : number;
};

export default function Card({ name, image, price ,stock, category}: CardProps) {
  return (
    <View style={cardStyle.box}>
      <Image source={{ uri: image }} style={cardStyle.image} />
      <Text style={cardStyle.text}>{name}</Text>
      <Text style={cardStyle.stock}>{stock}</Text>
      <Text style={cardStyle.price}>{price}</Text>
      
      <Text style={cardStyle.category}>{category}</Text>
      

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
    borderRadius: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(239, 165, 238, 0.96)',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgb(35, 30, 197)',
    backgroundColor: '#54bace',
    padding: 10,
    borderRadius: 20,
    overflow: 'hidden', 
  },
  stock: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(185, 0, 182, 0.96)',
  },
  category :{
    

  }

  


});