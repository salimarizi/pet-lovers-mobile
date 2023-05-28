import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarO } from "@fortawesome/free-regular-svg-icons";

const OwnerCard = (props) => {
  const initialName = () => {
    let initial = props.name[0];
    const words = props.name.split(" ");
    if (words.length > 0) initial += words[1][0];
    return initial.toUpperCase();
  };

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
      <View className="flex-row items-center gap-2">
        <View
          className="w-8
            h-8
            flex
            justify-center
            items-center
            rounded-full
            bg-gray-400
          "
        >
          <Text className="font-semibold text-white">{initialName()}</Text>
        </View>
        <Text>{props.name}</Text>
      </View>
      <View className="flex-row items-center gap-2">
        <TouchableOpacity>
          <FontAwesomeIcon
            icon={props.isFavourite ? faStar : faStarO}
            color={props.isFavourite ? "#7445f6" : ""}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faChevronRight} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OwnerCard;