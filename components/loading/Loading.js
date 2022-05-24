import React from 'react'
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.loading}>
            <ActivityIndicator size="large" />
            <StatusBar style="auto" />
        </View>
    )
}


const styles = StyleSheet.create({

  loading: {
      flex: 1,
      backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: '100%',
      justifyContent: 'center',
    }
  });