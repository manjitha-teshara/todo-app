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
import Note from './Note';
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
      <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}> -NOTES- </Text>
      </View>

      <ScrollView style={styles.scrollContainer}>        
        {notes}
      </ScrollView>

      <View style={styles.footer}>
        <TextInput 
                   style={styles.TextInput}
                   onChangeText={(noteText)=>this.setState({noteText})}
                   value={this.state.noteText}
                   placeholder='note...'
                   placeholderTextColoer='white'
                   underlineColorAndroid='transparent'>
        </TextInput>
      </View>

      <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

     </View>
    );
  }
  addNote(){
    
    if(this.state.noteText){
      //alert('are you sure');
      var d = new Date();
      this.state.noteArray.push({
        'date':d.getFullYear()+
        "/"+(d.getMonth()+1)+
        "/"+d.getDate(),
        'note':this.state.noteText
      });
      this.setState({noteArray:this.state.noteArray});
      this.setState({noteText:''});
    }
  }

  deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray:this.state.noteArray})
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  headerText:{
    color:"#3ab522",
    fontSize:20
    
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
    color:'#c7d00f',
    padding:20,
    backgroundColor:'#172f1e',
    borderTopWidth:2,
    borderTopColor:'#ededed',
    fontSize:15
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
