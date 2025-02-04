import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles/commonStyle";
import React from "react";
import { Alert, TouchableOpacity, TextInput, View, ScrollView } from "react-native";
import { router } from "expo-router";

export default function add_pass() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appbar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Save", "Password saved!")}>
          <Ionicons name="save-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 60 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Title"
          placeholderTextColor="#D9D9D9"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Account email/user"
          placeholderTextColor="#D9D9D9"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#D9D9D9"
          secureTextEntry
        />
        <TextInput
          style={styles.textInput}
          placeholder="Description"
          placeholderTextColor="#D9D9D9"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Website"
          placeholderTextColor="#D9D9D9"
        />
      </ScrollView>
    </View>
  );
}
