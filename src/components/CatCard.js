import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { countAge } from "../util/UtilFunctions";

const CatCard = (props) => {
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
      <View className="w-full flex-row justify-between items-center gap-2">
        <View className="flex gap-2">
          <Text className="font-bold">{props.name}</Text>
          <Text className="text-gray-400">Age: {countAge(props.dob)}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faChevronRight} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CatCard;
