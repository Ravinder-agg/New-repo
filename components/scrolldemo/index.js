import { SafeAreaView, ScrollView, StatusBar, StyleSheet,Text } from "react-native"
import React from "react"

const ScrollViewDemo = () =>{
    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView style = {styles.scrollView}>
                <Text style = {styles.text}>
                    Hello bgwdhygdwihdioshuidwhbjwjbdhjwbhjbw
                    Hello bgwdhygdwihdioshuidwhbjwjbdhjwbhjbw
                    Hello bgwdhygdwihdioshuidwhbjwjbdhjwbhjbw
                    Hello bgwdhygdwihdioshuidwhbjwjbdhjwbhjbw
                    Hello bgwdhygdwihdioshuidwhbjwjbdhjwbhjbw
                    Hello bgwdhygdwihdioshuidwhbjwjbdhjwbhjbw
                    Hello bgwdhygdwihdioshuidwhbjwjbdhjwbhjbw
                    Hello bgwdhygdwihdioshuidwhbjwjbdhjwbhjbw
                    Hello bgwdhygdwihdioshuidwhbjwjbdhjwbhjbw
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles =  StyleSheet.create({
    container: {
        // flex:1,
        // paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'skyblue',
        marginHorizontal: 20,
    },
    text: {
        fontSize:40,
    },
})

export default ScrollViewDemo;