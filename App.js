import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';



export default class App extends Component {

  displayAlert1(){
alert('Jackie Robinson was a great baseball player!')
  }

  displayAlert2(){
alert('Lizzo is a celebrity who is also famously known for her ability to play the flute')
  }

  displayAlert3(){
alert('Miley Cyrus is the daughter of the famous country singer Billy Ray Cyrus')
  }
   
  displayAlert4(){
alert('Ariana Grande has started off her career as an actor')
   }
  render() {
    return (
      <View style={{marginTop: 100}}>
        
     <Button title = "Jackie Robinson" color ="yellow" onPress={this.displayAlert1}/>
     <Button title = "Lizzo" color = "red" onPress={this.displayAlert2}/>
     <Button title = "Miley Cyrus" color = "green" onPress={this.displayAlert3}/>
     <Button title = "Ariana Grande" color = "#EC5766" onPress={this.displayAlert4}/>

    
     
      </View>
    );
  }
}