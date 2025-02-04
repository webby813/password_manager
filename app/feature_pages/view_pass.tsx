import { PasswordInfoContainer } from '@/components/Containers';
import { styles } from '@/styles/commonStyle';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Alert, TouchableOpacity, Text, TextInput, View, ScrollView, StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

export default function view_pass() {
  const handleSwipe = () => {
    Alert.alert('Delete', 'Are you sure you want to delete this item?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => Alert.alert('Deleted', 'Item has been deleted'),
      },
    ]);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appbar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Save", "Password saved!")} style={Localstyles.action_button1}>
          <Ionicons name="save" size={28} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Archive", "Archived Successful!")} style={Localstyles.action_button2}>
          <Ionicons name="archive" size={28} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Archive", "Archived Successful!")} style={Localstyles.action_button3}>
          <Ionicons name="trash" size={28} color="red" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <PasswordInfoContainer title="Account email/user" info="hhhhhh"/>
        <PasswordInfoContainer title="Password" info="A1234567890"/>
        <PasswordInfoContainer title="Description" info="Testing"/>
        <PasswordInfoContainer title="Website" info="https://facebook.com"/>
      </ScrollView>

      {/* Swipeable Container
      <Swipeable onSwipeableOpen={handleSwipe}>
        <View style={Localstyles.swiperContainer}>
          <Text style={styles.subTitle}>Swipe to delete</Text>
        </View>
      </Swipeable> */}
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
  // swiperContainer: {
  //   padding: 15,
  //   marginHorizontal: 20,
  //   marginBottom: 20,
  //   height: 60,
  //   borderRadius: 10,
  //   backgroundColor: '#f1f1f1',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.3,
  //   shadowRadius: 3,
  // },
});
