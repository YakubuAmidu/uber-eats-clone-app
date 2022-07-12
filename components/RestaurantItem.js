import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />
    </View>
  )
};

const RestaurantImage = () => {
  return (
  <>
    <Image source={{ uri: "https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow=" }} style={{ width: '100%', height: 180 }} />
    <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }}>
    <MaterialCommunityIcons name="heart-outline" size={40} color="white" />
    </TouchableOpacity>
  </>
  );
}