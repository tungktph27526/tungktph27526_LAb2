import { Button, ScrollView, StyleSheet, Modal, Text, TextInput, View, FlatList, Pressable } from 'react-native';
import { useState } from 'react';
import Home from './App';
const About = (props) => {
    const route = props.route
  return (
    <View >
      <View style={styles.ttcanhan}>
        <Text >Họ và tên: </Text>
        <Text >
          {route.params.name}
        </Text>
      </View>

      <View style={styles.ttcanhan}>
        <Text >Ngày sinh: </Text>
        <Text >
          {route.params.date}
        </Text>
      </View>


    </View>
  )
}
export default About;
const styles = StyleSheet.create({
    ttcanhan: {
        flexDirection: 'row'
      },
})