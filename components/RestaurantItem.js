import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const localRestaurants = [
  {
    name: "Beach Side",
    image_url: "https://www.gannett-cdn.com/media/2018/07/31/USATODAY/usatsports/247WallSt.com-247WS-482802-restaurant.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5
  },
  {
    name: "Benihana",
    image_url: "https://i.pinimg.com/originals/22/40/b8/2240b85d37ab7c0dc79afe79b61dfe7e.jpg",
    categories: ["cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.5
  },
  {
    name: "India's Grill",
    image_url: "https://static01.nyt.com/images/2021/08/03/dining/03rest-cadence4/merlin_191497908_c8e5752b-757f-41c0-95b3-11231292e59e-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9
  }
];

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
        {
        localRestaurants.map((restaurant, index) => (
          <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
        </View>
        ))
        }
    </TouchableOpacity>
  )
};

const RestaurantImage = (props) => {
  return (
  <>
    <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
    <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }}>
    <MaterialCommunityIcons name="heart-outline" size={40} color="white" />
    </TouchableOpacity>
  </>
  );
};

const RestaurantInfo = (props) => {
  return (
    <View 
    style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-between',
       alignItems: 'center',
        marginTop: 10 
        }}>
      <View>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: 'grey' }}>30-45 . min</Text>
      </View>
      <View 
      style={{ 
        backgroundColor: '#eee',
       width: 30,
        height: 30, 
        alignItems: 'center', 
        borderRadius: 15, 
        justifyContent: 'center' 
        }}>
      <Text>{props.rating}</Text>
      </View>
    </View>
  )
}