import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronDownIcon } from "react-native-heroicons/solid";
import {
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon as SearchIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShow: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white ">
      {/* header */}

      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <SearchIcon color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body */}

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FeatureRow
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="Featured"
        />
        {/* Tasty Discount */}
        <FeatureRow
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
          featuredCategory="discount"
        />
        {/* Offers near you */}
        <FeatureRow
          title="Offer near you!"
          description="why not support your local restaurant tonight"
          featuredCategory="offers"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
