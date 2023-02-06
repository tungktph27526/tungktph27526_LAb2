import { Button, ScrollView, StyleSheet, Modal, Text, TextInput, View, FlatList, Pressable } from 'react-native';
import { useState } from 'react';
import Home from './App';

const QuanLy = (props) => {
    const route = props.route;
    const listData = route.params.list;
    return (
    <View>
        <FlatList data={listData}
            renderItem={({ item }) => <>
            <View >
                <View style={styles.containerQL}>
                    <Text>{item.id}</Text>
                    <Text >{item.nameUser}</Text>
                    <Text >{item.date}</Text>
                </View>
            </View>
            </>} />
    </View>
)
}
export default QuanLy;

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
containerQL: {
    flex: 1,
    margin: 5
  },
 containerQL: {
    flex: 1,
    margin: 5
  },
});
