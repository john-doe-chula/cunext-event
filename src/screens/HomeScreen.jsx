import { View, Text, Button, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import EventCard from "../components/EventCard";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation()
  const navigateToEvent = () => {
    navigation.navigate("AllEvent");
  }
  const eventData = [
    {
      id: 1,
      date: "15 Feb 2020",
      name: "Chula Engineering Fair",
      location: "ตึก 100 ปี วิศวะ",
      size: 100,
      price: 0,
      imageSource: require("../../assets/event.jpeg"),
    },
    {
      id: 2,
      date: "20 Mar 2020",
      name: "Science Exhibition",
      location: "ห้องประชุมสุรศักดิ์",
      size: 200,
      price: 100,
      imageSource: require("../../assets/event.jpeg"),
    },
    {
      id: 3,
      date: "10 Apr 2020",
      name: "Art Festival",
      location: "สนามกีฬา",
      size: 0,
      price: 0,
      imageSource: require("../../assets/event.jpeg"),
    },
  ];

  return (
    <View className="flex flex-col w-screen h-screen bg-background">
      <ScrollView className="">
        <LinearGradient
          colors={["#FD297B", "#FF5864", "#FF655B"]}
          start={{ x: 0, y: 0 }}
          locations={[0, 0.6, 1]}
          end={{ x: 1, y: 0 }}
          className="h-72 w-full rounded-3xl flex-col justify-between pb-4"
        >
          <View className="flex flex-row justify-between">
            <View className="mt-16">
              <Text className="text-5xl text-white font-bold pl-5">
                Event at
              </Text>
              <Text className="text-5xl text-white font-bold pl-5 pt-2">
                Chula.
              </Text>
            </View>
            <View className="mt-16 absolute top-0 right-0 mr-4 p-3 bg-white rounded-full shadow">
              <Icon name="notifications-outline" size={24} color="black" />
            </View>
          </View>
          <View className="mx-4 h-10 bg-white rounded-3xl">
            <Button
              title="Search"
              onPress={() => navigation.navigate("Event")}
            />
          </View>
        </LinearGradient>

        <View className="flex flex-row justify-between">
          <Text className="font-bold text-xl mx-4 mt-6">
            Recommended For You
          </Text>
          <Text className="text-lg items-center mx-4 mt-6 text-red" onPress={()=> navigateToEvent()}>
            See All
          </Text>
        </View>
        <ScrollView
          className="flex flex-row ml-4 mt-6"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {eventData.map((event,index) => (
            <EventCard
              props={event}
              key={index}
            />
          ))}
        </ScrollView>
        <View className="flex flex-row justify-between">
          <Text className="font-bold text-xl mx-4 mt-6 mb-6">New Event</Text>
        </View>
        <View className="mx-4 mb-8">
          {/* {eventData.map((event) => (
            <Card
              key={event.id}
              date={event.date}
              name={event.name}
              location={event.location}
              imageSource={event.imageSource}
            />
          ))} */}
        </View>
      </ScrollView>
    </View>
  );
}
