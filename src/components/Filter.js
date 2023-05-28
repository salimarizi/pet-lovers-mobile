import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [sorter, selectedSorter] = useState("name");
  const [items, setItems] = useState([
    { label: "Name", value: "name" },
    { label: "Cats", value: "cats" },
  ]);

  return (
    <View className="w-full flex-row justify-between items-center mt-4">
      <Text className="text-gray-500">Owner List</Text>
      <View className="flex-row ml-56">
        <Text className="text-gray-500">Sort By:</Text>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Text>{items.find((item) => item.value === sorter)?.label}</Text>
        </TouchableOpacity>
        <DropDownPicker
          open={open}
          value={sorter}
          items={items}
          setOpen={setOpen}
          setValue={selectedSorter}
          setItems={setItems}
          style={{ display: open ? "block" : "none" }}
          listMode="MODAL"
        />
      </View>
    </View>
  );
};

export default Filter;