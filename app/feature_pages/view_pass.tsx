import { ConfirmDialog, PasswordInfoContainer } from '@/components/Containers';
import { styles } from '@/styles/commonStyle';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Alert, TouchableOpacity, Text, TextInput, View, ScrollView, StyleSheet } from 'react-native';

export default function view_pass() {

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appbar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            ConfirmDialog(
              "Delete",
              "Are you sure you want to save this password?",
              () => console.log("Confirmed Save"),
              () => console.log("Canceled Save"),
              { title: "Save Password", message: "Save this password?", onConfirm: () => console.log("Saved"), onCancel: () => console.log("Canceled") }
            )
          }
          style={Localstyles.action_button1}
        >
          <Ionicons name="save" size={28} color="green" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            ConfirmDialog(
              "Delete",
              "Are you sure you want to archive this password?",
              () => console.log("Confirmed Archive"),
              () => console.log("Canceled Archive"),
              { title: "Archive Confirmation", message: "Archive this password?", onConfirm: () => console.log("Archived"), onCancel: () => console.log("Canceled") }
            )
          }
          style={Localstyles.action_button2}
        >
          <Ionicons name="archive" size={28} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            ConfirmDialog(
              "Delete",
              "Are you sure you want to delete this password?",
              () => console.log("Confirmed Delete"),
              () => console.log("Canceled Delete"),
              { title: "Delete Confirmation", message: "Delete this password?", onConfirm: () => console.log("Deleted"), onCancel: () => console.log("Canceled") }
            )
          }
          style={Localstyles.action_button3}
        >
          <Ionicons name="trash" size={28} color="red" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <PasswordInfoContainer title="Account email/user" info="hhhhhh"/>
        <PasswordInfoContainer title="Password" info="A1234567890"/>
        <PasswordInfoContainer title="Description" info="Testing"/>
        <PasswordInfoContainer title="Website" info="https://facebook.com"/>
      </ScrollView>
    </View>
  );
}

const Localstyles = StyleSheet.create({
  action_button1: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  action_button2: {
    position: 'absolute',
    top: 15,
    right: 60,
  },
  action_button3: {
    position: 'absolute',
    top: 15,
    right: 105,
  },
});
