import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // Icons for bottom nav

export default function EmergencyScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>Emergency</Text>

        {/* Emergency Button */}
        <TouchableOpacity style={styles.emergencyButton}>
          <Text style={styles.emergencyButtonText}>Click</Text>
        </TouchableOpacity>
      
        {/* Buttons */}
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoButtonText}>
            Now care takers also available
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoButtonText}>
            Ambulance Booking
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={24} color="#333" />
        <FontAwesome name="ambulance" size={24} color="#333" />
        <Ionicons name="person" size={24} color="#333" />
        <Ionicons name="chatbubble-ellipses" size={24} color="#333" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0033', // solid dark blue
    justifyContent: 'flex-start',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  title: {
    color: '#DC2626', // Tailwind red-600
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  emergencyButton: {
    backgroundColor: '#DC2626',
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  emergencyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  infoButton: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    marginBottom: 16,
  },
  infoButtonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB', // Tailwind gray-200
  },
});