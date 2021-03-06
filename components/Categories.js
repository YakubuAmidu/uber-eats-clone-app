import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react';

const items = [
  {
    image: require('../assets/images/shopping-bag.png'),
    text: "Pick-up"
  },
  {
    image: require('../assets/images/soft-drink.png'),
    text: "Soft drinks"
  },
  {
    image: require('../assets/images/bread.png'),
    text: "Bakery items"
  },
  {
    image: require('../assets/images/fast-food.png'),
    text: "Fast foods"
  },
  {
    image: require('../assets/images/deals.png'),
    text: "Deals"
  },
  {
    image: require('../assets/images/coffee.png'),
    text: "Coffee & tea"
  }
];

export default function Categories() {
  return (
    <View style={{
      marginTop: 5,
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingLeft: 20
    }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
           <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
           <Image
            source={item.image}
            style={{ 
             width: 50,
             height: 40,
             resizeMode: 'contain',
            }}
            />
            <Text style={{ fontSize: 13, fontWeight: '900' }}>{items[0].text}</Text>
           </View>
      ))}
    </ScrollView>
    </View>
  )
}