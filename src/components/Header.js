import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const initialName = () => {
    let initial = props.name[0];
    const words = props.name.split(" ");
    if (words.length > 0) initial += words[1][0];
    return initial.toUpperCase();
  };

  return (
    <View className="w-full flex-row items-center justify-between mt-8">
      <View className="w-1/12">
        {!props.isMainScreen && (
          <TouchableOpacity>
            <FontAwesomeIcon icon={faChevronLeft} />
          </TouchableOpacity>
        )}
      </View>
      <View className="flex-row justify-center items-center gap-2">
        <View
          className="
            w-8
            h-8
            flex
            justify-center
            items-center
            rounded-full
            border
            border-green-600
          "
        >
          <Text className="font-semibold text-green-600">{initialName()}</Text>
        </View>
        <Text className="font-bold">Master : {props.name}</Text>
      </View>
      <View className="w-1/12"></View>
    </View>
  );
};

export default Header;
