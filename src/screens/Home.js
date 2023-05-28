import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import Filter from "../components/Filter";
import OwnerCard from "../components/OwnerCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  const masterName = "Salim Arizi";
  const owners = [
    { id: 1, name: "John Knock", isFavourite: false },
    { id: 2, name: "Salim Arizi", isFavourite: true },
  ];
  return (
    <View className="flex-1 p-4 bg-[#f8f8fe]">
      <Header name={masterName} isMainScreen={true} />
      <Filter />
      <SafeAreaView className="flex-1 mt-4">
        <ScrollView>
          {owners?.map((owner) => (
            <OwnerCard
              name={owner.name}
              isFavourite={owner.isFavourite}
              key={owner.id}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
