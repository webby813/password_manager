import {styles} from '@/styles/commonStyle';
import { BlankContainer } from '@/components/Containers';
import React from 'react';

import {
  Alert, 
  Text, 
  TextInput, 
  View, 
  ScrollView
} from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <BlankContainer size={230} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Password Manager</Text>
      </View>

      <View style={styles.stepContainer}>
        <Text style={styles.subTitle}>Enter your master password.</Text>
      </View>

      <View style={styles.stepContainer}>
        <TextInput 
          style={styles.LoginInput} 
          placeholder='Enter your password' 
          secureTextEntry={true} 
          maxLength={24} 
        />
      </View>

      <View style={styles.stepContainer}>
        <TextInput 
          style={styles.LoginInput} 
          placeholder='Confirm your password' 
          secureTextEntry={true} 
          maxLength={24} 
        />
      </View>

      <View style={styles.buttonContainer}>
        <Link href="/pages/home" style={styles.button}>
          Confirm
        </Link>
      </View>
    </ScrollView>
  );
}


