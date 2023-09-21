import { View, Text, Image } from 'react-native';
import React from 'react';
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from '@react-navigation/native';



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
      onSkip={() => navigation.replace("Home")}
      onDone={() => navigation.replace("Home")}
      DotComponent={DotComponent}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={{
                uri: "https://cdn.cliqueinc.com/posts/285925/most-popular-fashion-items-285925-1685657985591-main.700x0c.jpg",
              }}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Welcome to Swyke",
          subtitle:
            "Swyke is a web3 mobile application that offers custom-fitted outfits and virtual designs available as NFTs.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={{
                uri: "https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "3D Imaging and Measurements",
          subtitle:
            "Clients can use their smartphones for body scanning, promoting collaboration between designers and clients.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={{
                uri: "https://i0.wp.com/fashionretail.blog/wp-content/uploads/2018/04/ai-fashion-retail-digital-retail.png?resize=556%2C299&ssl=1",
              }}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Tail AI",
          subtitle:
            'It features an AI fashion assistant, "Tail", that can transform images of dresses into lay plans or sewing patterns.',
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image 
              source={{
                uri: "https://holrmagazine.com/wp-content/uploads/2021/09/eAcD3xCM00fWpL2txre4zA_b.jpg",
              }}
              className="object-contain w-72 h-72"
            />
          ),
          title: "Happy Shopping",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ]}
    />
  );
};



export default OnBoardingScreen