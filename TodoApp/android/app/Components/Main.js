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
} from 'react-native';
import Note from './Note'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { validate } from '../../../node_modules/@babel/types';

export default class Main extends React.Component{

constructor(props){
  super(props);
  this.state={
    noteArray:[],
    noteText:'',

  }

}

  render(){
    let notes=this.state.noteArray.map((val,key)=>{
      return <Note key={key} keyval={key} val={val}
        deleteMethod={()=>this.deleteNote(key)} />
    });
    return(
      <>
      <View>
      <Text>React Native Testing</Text>
      <Text>Main js</Text>
      </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  
});

