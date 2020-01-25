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
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Note extends React.Component{
  render(){
    return(
     
      <View key={this.props.keyval} style={styles.note}>         
         <Text style={styles.noteText}>{this.props.val.date}</Text> 
         <Text style={styles.noteText}>{this.props.val.note}</Text> 

         <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>     
           <Text style={styles.noteDeleteText}>D</Text>
          </TouchableOpacity>
      </View>
     
    )
  }
}

const styles = StyleSheet.create({
  note:{
    position:'relative',
    padding:20,
    paddingRight:100,
    borderBottomWidth:2,
    borderBottomColor:'#3ab522',
  },
  noteText:{
    paddingLeft:20,
    borderLeftWidth:10,
    borderLeftColor:'#3ab522',
  },
  noteDelete:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#3ab522',
    padding:10,
    top:10,
    bottom:10,
    right:10,
  }
});

