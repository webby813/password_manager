import { PasswordContainer } from '@/components/Containers';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '@/styles/commonStyle';
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View, ScrollView } from 'react-native';

export default function HomeScreen() {
  const router = useRouter(); // Hook for navigation

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>  
        <PasswordContainer 
          title="Facebook" 
          account="johny.walker@example.com" 
          onPress={() => router.push('/feature_pages/view_pass')}
        />
        <PasswordContainer 
          title="Twitter" 
          account="@johndoe" 
          onPress={() => alert('Twitter Pressed!')}
        />
        <PasswordContainer 
          title="LinkedIn" 
          account="John Doe" 
          onPress={() => alert('LinkedIn Pressed!')} 
        />
      </ScrollView>

      <View style={styles.bottomRightWidget}>
        <TouchableOpacity onPress={() => router.push('/feature_pages/add_pass')}>
          <Ionicons name="bag-add-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
