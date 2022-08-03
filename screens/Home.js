import { View, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import  RestaurantItems, { localRestaurants, } from '../components/RestaurantItems';
import { YELP_API_KEY, yelpUrl } from '../yelpApi/yelpApi';

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  const getRestaurantsFromYelp = () => {

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  }

  return fetch(yelpUrl, apiOptions).then((res) => res.json()).then((json) => setRestaurantData(json.businesses))
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
      <HeaderTabs />
      <SearchBar />
      </View>
      <ScrollView showHorizontalIndicator={false}>
      <Categories />
      <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  )
}