import { View, Text, Image} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = () => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image 
            source={{
              url: "https://unsplash.com/photos/jNKv4QohAk0"
            }} 
            className = "w-72 h-72 object-contain"
          />,
          title: 'Welcome to Swyke',
          subtitle: 'Swyke is a web3 mobile application that offers custom-fitted outfits and virtual designs available as NFTs.',
        },
        {
          backgroundColor: '#fff',
          image: <Image
            source={{
              url: "https://unsplash.com/photos/jNKv4QohAk0"
            }}
            className="w-72 h-72 object-contain"
          />,
          title: '3D Imaging and Measurements',
          subtitle: 'Clients can use their smartphones for body scanning, promoting collaboration between designers and clients.',
        },
        {
          backgroundColor: '#fff',
          image: <Image
            source={{
              url: "https://unsplash.com/photos/jNKv4QohAk0"
            }}
            className="w-72 h-72 object-contain"
          />,
          title: 'Tail AI',
          subtitle: 'It features an AI fashion assistant, "Tail", that can transform images of dresses into lay plans or sewing patterns.',
        },
        {
          backgroundColor: '#fff',
          image: <Image
            source={{
              url: "https://unsplash.com/photos/jNKv4QohAk0"
            }}
            className="w-72 h-72 object-contain"
          />,
          title: 'Happy Shopping',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ]}
    />
  )
};

export default OnboardingScreen