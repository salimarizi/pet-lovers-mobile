import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import OwnerProfileCard from "../components/OwnerProfileCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import CatCard from "../components/CatCard";

const Owner = () => {
  const masterName = "Salim Arizi";
  const cats = [
    { id: 1, name: "Snowball", dob: "2014-08-02" },
    { id: 2, name: "Blackly", dob: "2023-03-05" },
  ];
  return (
    <View className="flex-1 p-4 bg-[#f8f8fe]">
      <Header name={masterName} isMainScreen={false} />
      <Text className="text-gray-500 mt-4">Owner Card</Text>
      <OwnerProfileCard firstName="Salim" lastName="Arizi" isFavourite={true} />
      <SafeAreaView className="flex-1 mt-4">
        <Text className="text-gray-500">Cats</Text>
        <ScrollView>
          {cats?.map((cat) => (
            <CatCard name={cat.name} dob={cat.dob} key={cat.id} />
          ))}
        </ScrollView>
        <View className="flex-row justify-center">
          <TouchableOpacity
            className="
              w-10/12
              rounded-lg
              bg-green-600
              py-3
            "
          >
            <Text
              className="
                text-white
                text-center
                text-lg
                font-semibold
              "
            >
              Make a Master
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Owner;
