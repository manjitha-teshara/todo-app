/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Main from './android/app/Components/Main'
import Note from './android/app/Components/Note'


export default class App extends React.Component{
  render(){
    return(
     <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}> -NOTED- </Text>
      </View>

      <ScrollView style={styles.ScrollView}>
        <Text>Tudo App</Text>
       
      </ScrollView>

      <View style={styles.footer}>
        <TextInput 
                   style={styles.TextInput}
                   placeholder='note'
                   placeholderTextColoer='white'
                   underlineColorAndroid='transparent'>
        </TextInput>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

     </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    backgroundColor:'#172f1e',
    alignItems:'center',
    borderBottomWidth:10,
    borderBottomColor:'#6cac7f',
  },
  scrollContainer:{
    flex:1,
    marginBottom:100,
  },
  footer:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    zIndex:10,
  },
  TextInput:{
    alignSelf:'stretch',
    color:'#fff',
    padding:20,
    backgroundColor:'#172f1e',
    borderTopWidth:2,
    borderTopColor:'#ededed',
  },
  addButtonText:{
    color:'#9de50e',
    fontSize:50,
  },
  addButton:{
    position:'absolute',
    zIndex:11,
    right:20,
    bottom:90,
    backgroundColor:'#5d6f39',
    width:50,
    height:50,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    elevation:8,
  }
});

