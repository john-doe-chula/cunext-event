import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  StyleSheet
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { schedulePushNotification } from "../hooks/schedulePushNotification";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from "react-native-element-dropdown";
import DropDownPicker from "react-native-dropdown-picker";
import ImagePickerExample from "../components/ImagePickerComponent";

export default function CreateEvent() {
  const [eventName, setEventName] = useState("");
  const [eventStartTime, setEventStartTime] = useState(null);
  const [eventEndTime, setEventEndTime] = useState(null);
  const [priceEntry, setPriceEntry] = useState("");
  const [maxAttendee, setMaxAttendee] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  // Dropdown menu
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([ 
    {label: 'Academic', value: 'academic'},
    {label: 'Concert', value: 'concert'},
    {label: 'Sport', value: 'sport'},
    {label: 'Volunteer', value: 'volunteer'},
    {label: 'MeetUp', value: 'meetup'}

  ]);

  return (
    <View className="w-screen h-screen bg-background">
      <ScrollView className="">
        <View className="flex-1 items-center space-y-[5%] w-full h-full px-[2%]">
          <View className="w-full aspect-square mt-16">
            {/* <Image
              className="w-full h-full rounded-3xl bg-white"
              resizeMethod="resize"
              source={null}
              /> */}
            <ImagePickerExample/>
          </View>

          <View className="bg-white w-full rounded-3xl p-4 flex flex-col gap-y-3">
            <View>
              <Text className="font-semibold text-md">Event Name</Text>
              <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="Type your event name here"
                value={eventName}
                onChangeText={setEventName}
              />
            </View>
            <View>
              <Text className="font-semibold text-md">Start Time</Text>
              <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="When is the start time?"
                value={eventStartTime}
                onChangeText={setEventStartTime}
              />
              {/* <DateTimePicker 
                  value={eventStartTime || new Date()}
                  onChange={(e, date) => setEventStartTime(date)}
              /> */}
            </View>
            <View>
              <Text className="font-semibold text-md">End Time</Text>
              <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="When is the end time?"
                value={eventEndTime}
                onChangeText={setEventEndTime}
              />
              {/* <DateTimePicker 
                  value={eventEndTime || new Date()}
                  onChange={(e, date) => setEventEndTime(date)}
              /> */}
            </View>
            <View>
              <Text className="font-semibold text-md">Price Entry</Text>
              <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="Is there any price for entry? "
                value={priceEntry}
                onChangeText={setPriceEntry}
              />
            </View>
            <View>
              <Text className="font-semibold text-md">Max Attendee</Text>
              <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="Is your event has limits for attendees ?"
                value={maxAttendee}
                onChangeText={setMaxAttendee}
              />
            </View>
            <View>
              <Text className="font-semibold text-md">Category</Text>

              <Dropdown
                style={styles.dropdown}
                data={items}
                maxHeight={300}
                labelField={"label"}
                valueField={"value"}
                placeholder="Academic"
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(value) => {
                  setValue(value);
                  setIsFocus(false);
                }}
              />

              {/* <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="Type your category name here"
                value={eventCategory}
                onChangeText={setEventCategory}
              /> */}
            </View>
          </View>
          <View className="bg-white w-full rounded-3xl p-4 flex flex-col gap-y-3">
            <View>
              <Text className="font-semibold text-md">Event Description</Text>
              <TextInput
                className="h-20 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="Type your category name here"
                value={eventDescription}
                onChangeText={setEventDescription}
              />
            </View>
            <View>
              <Text className="font-semibold text-md">Location</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="bg-white w-full h-28 shadow-md rounded-2xl flex justify-center items-center">
        <LinearGradient
          colors={["#FD297B", "#FF5864", "#FF655B"]}
          start={{ x: 0, y: 0 }}
          locations={[0, 0.6, 1]}
          end={{ x: 1, y: 0 }}
          className="h-10 w-72 rounded-3xl items-center justify-center"
        >
          <Text className="text-white font-bold" onPress={() => {schedulePushNotification({title: "New Event Created", body:`${eventName} is created`, seconds: 1})}}>Create Event</Text>
        </LinearGradient>
      </View>
    </View>
  );
}

 const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginTop: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
