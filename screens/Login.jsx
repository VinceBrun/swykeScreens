import { View, Text,TouchableOpacity, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, {useEffect, useRef, useState} from 'react'
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";



const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
      if (email && password) {
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
          console.log("got error", error.message);
        }
      }
    };

  
   
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#877dfa" }}>
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-white font-bold text-4xl text-center">Swyke</Text>
        {/* <View className="flex-row justify-center">
          <LottieView
            style={{ width: 125, height: 125, alignItems: "center" }}
            source={require("../assets/animations/team.json")}
            autoPlay
            loop
          />
        </View> */}
        <View
          className="flex-1 bg-white px-8 pt-8"
          style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        >
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              value=""
              placeholder="Enter Email"
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              value=""
              placeholder="Enter Password"
            />
            <TouchableOpacity className="flex items-end mb-5">
              <Text className="text-gray-700">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl">
              <Text className="font-xl font-bold text-center text-gray-700">
                Login
              </Text>
            </TouchableOpacity>
            <Text className="text-xl text-gray-700 font-bold text-center py-5">
              Or
            </Text>
            <View className="flex-row justify-center space-x-8">
              <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image
                  source={require("../assets/icons/google.png")}
                  className="w-10 h-10"
                />
              </TouchableOpacity>
              <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image
                  source={require("../assets/icons/apple.png")}
                  className="w-10 h-10"
                />
              </TouchableOpacity>
              <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image
                  source={require("../assets/icons/facebook.png")}
                  className="w-10 h-10"
                />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center space-x-2">
              <Text className="text-gray-700 font-semibold">
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text className="font-semibold text-yellow-400">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login