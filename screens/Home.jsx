import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';


export default function Home() {
    const navigation = useNavigation();
    const handleSignOut = async () => {
      await signOut(auth);
    }
  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={{ backgroundColor: "#877dfa" }}
    >
      <View className="flex">
        <Text>Welcome to the Home Page!</Text>
        <TouchableOpacity
          className="py-3 bg-yellow-400 rounded-xl"
          onPress={handleSignOut}
        >
          <Text className="font-xl font-bold text-center text-gray-700">
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}