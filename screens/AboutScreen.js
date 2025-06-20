import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View className="flex-1 bg-[#0A0033] items-center justify-center px-4">
      {/* Ambulance Image */}
      <Image
        source={require('../assets/ambu.png')} // ✅ Make sure path is correct
        className="w-100 h-80 mb-10 ml-80 mr-40 gradient-to-r from-[#0A0033] to-[#0A0F47]"
        resizeMode="contain"
      />

      {/* Sign Up Button */}
      <TouchableOpacity
        className="bg-white rounded-full w-full py-3 mb-4 flex-row items-center justify-center"
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text className="text-black font-semibold text-lg">🚑 Sign Up</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity
        className="bg-white rounded-full w-full py-3 flex-row items-center justify-center"
        onPress={() => navigation.navigate('Login')}
      >
        <Text className="text-black font-semibold text-lg">👤 Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
