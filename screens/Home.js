import { View, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Divider from 'react-native-divider';

import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import BottomTabs from '../components/home/BottomTabs';
import  RestaurantItems, { localRestaurants, } from '../components/home/RestaurantItems';

export const YELP_API_KEY = "peVSxo2PDw0AVDIZcznTAYsa0UVhtIwLB5VCcIIb12IjKeGY__KGNbhMThfLoNrm0prTKJnbGuh3PhU0D0cISpxUgNsiBaWCFU9o27LuwB_mO9ddRgn4NBuJA3FSXXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('San Francisco');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantsFromYelp = () => {
  const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  }

  return fetch(yelpUrl, apiOptions)
  .then((res) => res.json())
  .then((json) => setRestaurantData(json.businesses
  .filter((business) => business.transactions.includes(activeTab.toLowerCase()))))
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
      <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView showHorizontalIndicator={false}>
      <Categories />
      <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  )
}