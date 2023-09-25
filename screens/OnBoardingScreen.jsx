import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React, {useEffect, useRef } from 'react';
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from '@react-navigation/native';

import LottieView from 'lottie-react-native';



const {width, height} = Dimensions.get("window");

const OnBoardingScreen = () => {
    const navigation = useNavigation();



    const DotComponent = ({ selected }) => {
        return (
            <View className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full
            ${selected? "border border-red-400": ""} p-2`}>
                <View className= {`w-2 h-2 ${selected ? "bg-red-400" : "bg-red-200"} rounded-full`}></View>
            </View>
        )

    }
  return (
    <Onboarding
      style={styles.container}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.replace("Login")}
      DotComponent={DotComponent}
      pages={[
        {
          backgroundColor: "#013220",
          image: (
            <View style={styles.lottie}>
              <LottieView
                style={{ flex: 1 }}
                source={require("../assets/animations/nft_3.json")}
                autoPlay
                loop
              />
            </View>
          ),
          title: "Welcome to Swyke",
          subtitle:
            "Swyke is a web3 mobile application that offers custom-fitted outfits and virtual designs available as NFTs.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <View style={styles.lottie}>
              <LottieView
                style={{ flex: 1 }}
                source={require("../assets/animations/nft_2.json")}
                autoPlay
                loop
              />
            </View>
          ),
          title: "3D Imaging and Measurements",
          subtitle:
            "Clients can use their smartphones for body scanning, promoting collaboration between designers and clients.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <View style={styles.lottie}>
              <LottieView
                style={{ flex: 1 }}
                source={require("../assets/animations/nft_2.json")}
                autoPlay
                loop
              />
            </View>
          ),
          title: "Tail AI",
          subtitle:
            'It features an AI fashion assistant, "Tail", that can transform images of dresses into lay plans or sewing patterns.',
        },
        {
          backgroundColor: "#fff",
          image: (
            <View style={styles.lottie}>
              <LottieView
                style={{ flex: 1 }}
                source={require("../assets/animations/nft_2.json")}
                autoPlay
                loop
              />
            </View>
          ),
          title: "Happy Shopping",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ]}
    />
  );
};



export default OnBoardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    lottie: {
        width: 200,
        height: 200,
    }
})