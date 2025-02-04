import React, { useState } from 'react';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';
import { styles } from '@/styles/commonStyle';
import { useRoute } from '@react-navigation/native';

export default function _layout() {
    const [searchText, setSearchText] = useState('');
    const route = useRoute();

    const shouldShowSearch = () => {
        const currentRoute = route.name;
        return currentRoute === 'home' || currentRoute === 'archived';
    };

    return (
        <Drawer
            screenOptions={({ route }) => ({
                drawerLabelStyle: { marginLeft: 10 },
                headerStyle: {
                    backgroundColor: '#6A80B9',
                },
                headerTintColor: 'white',
                headerRight: () => {
                    if (route.name === 'home' || route.name === 'archived') {
                        return (
                            <View style={styles.SearchBarContainer}>
                                <Ionicons 
                                    name="search" 
                                    size={24} 
                                    color="white" 
                                    style={{ marginRight: 10 }} 
                                />
                                <TextInput
                                    style={styles.SearchField}
                                    placeholder="Search"
                                    placeholderTextColor="white"
                                    value={searchText}
                                    onChangeText={setSearchText}
                                    maxLength={24}
                                />
                            </View>
                        );
                    }
                    return null;
                },
            })}
        >
            <Drawer.Screen 
                name="home" 
                options={{
                    drawerLabel: 'All Password',
                    title: ' ',
                    drawerIcon: () => (<Ionicons name="home" size={24} color="black" />),
                }} 
            />

            <Drawer.Screen 
                name="archived" 
                options={{
                    drawerLabel: 'Archived',
                    title: 'Archived Password',
                    drawerIcon: () => (<Ionicons name="archive" size={24} color="black" />),
                }} 
            />
                
            <Drawer.Screen 
                name="export" 
                options={{
                    drawerLabel: 'Export',
                    title: 'Export Passwords',
                    drawerIcon: () => (<Ionicons name="download" size={24} color="black" />),
                }}
            />

            <Drawer.Screen 
                name="safety" 
                options={{
                    drawerLabel: 'Safety',
                    title: 'Safety',
                    drawerIcon: () => (<Ionicons name="shield" size={24} color="black" />),
                }} 
            />
        </Drawer>
        
    );
}