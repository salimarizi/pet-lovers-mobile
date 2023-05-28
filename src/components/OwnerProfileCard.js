import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarO } from "@fortawesome/free-regular-svg-icons";
import { initialName } from "../util/UtilFunctions";

const OwnerProfileCard = (props) => {
  return (
    <View
      className="
        w-full
        flex-row
        justify-between
        items-center
        mt-4
        mx-auto
        bg-white p-4
        rounded-lg
        shadow-sm
      "
    >
      <View className="flex-row">
        <View className="w-3/12 flex-row justify-center items-center mr-2">
          <View
            className="w-16
            h-16
            flex
            justify-center
            items-center
            rounded-full
            bg-gray-400
          "
          >
            <Text className="font-semibold text-white text-2xl">
              {initialName(props.firstName, props.lastName)}
            </Text>
          </View>
        </View>
        <View className="w-8/12 gap-1">
          <Text className="text-gray-400">First Name</Text>
          <Text>{props.firstName}</Text>
          <Text className="text-gray-400">Last Name</Text>
          <Text>{props.lastName}</Text>
        </View>
        <View className="w-1/12 flex-row items-center">
          <FontAwesomeIcon
            icon={props.isFavourite ? faStar : faStarO}
            color={props.isFavourite ? "#7445f6" : ""}
            size={20}
          />
        </View>
      </View>
    </View>
  );
};

export default OwnerProfileCard;
