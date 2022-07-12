import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
       <View style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}>
      <RestaurantImage />
      <RestaurantInfo />
    </View>
    </TouchableOpacity>
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
};

const RestaurantInfo = () => {
  return (
    <View 
    style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-between',
       alignItems: 'center',
        marginTop: 10 
        }}>
      <View>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Famous thai chicken cuisine</Text>
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
      <Text>4.5</Text>
      </View>
    </View>
  )
}