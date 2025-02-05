import { styles } from '@/styles/commonStyle';
import React from 'react';
import { View, StyleSheet, useWindowDimensions, Text, TouchableOpacity, TextInput, Alert } from 'react-native';

interface PasswordContainerProps {
    title: string;
    account: string;
    height?: number;
    onPress?: () => void;
}

interface InfoElementProps{
    title: string;
    info?: string;
}

export const BlankContainer = ({ size = 100, width }: { size?: number; width?: number }) => {
    return (
        <View style={[Localstyles.blankContainer, { height: size, width }]} />
    );
};

export const PasswordContainer: React.FC<PasswordContainerProps> = ({ 
    title, 
    account, 
    height = 100, 
    onPress}) => {
    const { width } = useWindowDimensions();
    return (
        <>
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                <View style={[Localstyles.PasswordContainer, { height, width: width - 30 }]}>
                    <View style={[Localstyles.CircleContainer]} />
                    <View style={Localstyles.TitleAndUser}>
                        <Text style={Localstyles.PassTitle}>{title}</Text>
                        <Text style={Localstyles.PassAccount}>{account}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={Localstyles.divider} />
        </>
    );
};

export const PasswordInfoContainer: React.FC<InfoElementProps> = ({ 
    title, 
    info }) => {
    return (
        <View style={[Localstyles.container]}>
            <Text style={Localstyles.GreyTitle_16}>{title}</Text>
                <TextInput
                    style={styles.textInput}
                    value={info}
                    placeholderTextColor="#D9D9D9"
                />
        </View>

    );
};

export const ConfirmDialog = (p0: string, p1: string, p2: () => void, p3: () => void, { title, message, onConfirm, onCancel }: { title: string; message: string; onConfirm: () => void; onCancel: () => void; }) => {
    return (
        Alert.alert(title, message, [
            {
                text: 'Cancel',
                style: 'cancel',
                onPress: onCancel,
            },
            {
                text: 'Confirm',
                onPress: onConfirm,
            },
        ])
    );
}

const Localstyles = StyleSheet.create({
    blankContainer: {
        alignSelf: 'center',
    },
    PasswordContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '##F6F6F6',
        borderRadius: 15,
        margin: 8,
        padding: 10,
        alignItems: 'center',
        gap: 10,
    },
    CircleContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'black',
        marginRight: 10,
    },
    TitleAndUser: {
        marginTop: 10,
        flexDirection: 'column',
        width: 300,
        height: 70,
        justifyContent: 'space-between',
    },
    PassTitle:{
        alignSelf: 'flex-start',
        flex: 1,
        fontSize: 24,
        fontWeight: '600',
        paddingLeft: 10,
    },
    PassAccount:{
        alignSelf: 'flex-start',
        flex: 1,
        fontSize: 16,
        fontWeight: '400',
        color: '#A49C9C',
        paddingLeft: 10,
    },
    divider: {
        height: 1, 
        backgroundColor: '#E8DBDB', 
        marginHorizontal: 30, 
    },
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 15,
      },
    GreyTitle_16:{
        fontSize: 16,
        fontWeight: '400',
        color: '#A49C9C',
    },
});
