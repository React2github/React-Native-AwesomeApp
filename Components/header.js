import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
    <View style={styles.container}>
    <Text style={styles.title}>Shopping List</Text>
    </View>
    )};


const styles = StyleSheet.create({
container: {
    backgroundColor: 'orange',
    height: 80,
},
title: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF'
}
});