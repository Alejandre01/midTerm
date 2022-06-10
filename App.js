import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react';

export default function App() {
  const [numberText, setNumberText] = useState('');
  const [message, setMessage] = useState('');
  
  
 function getSum() {
  const total = parseInt(numberBox1) + parseInt(numberBox2);
  const boxMin1 = 10;
  const boxMax1 = 20;
  const boxMin2 = 100;
  const boxMax2 = 200;

    if ( (numberBox1 < boxMin1 || numberBox1 > boxMax1) && (numberBox2 < boxMin2 || numberBox2> boxMax2) ) {
      setMessage('numberBox1 has to be between [10, 20] numberBox1 has to be between [100, 200]')
    } else if ( numberBox1 < boxMin1 || numberBox1 > boxMax1 ){
      setMessage('numberBox1 has to be between [10, 20]')
    } else if ( number2 < boxMin2 || boxMax2 > max2 ){
      setMessage('numberBox2 has to be between[100, 200]')
      
      setMessage(total.toString())
    }
  }  
  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.header}>IS657 Midterm</Text>
      </View>
        <View style={styles.inputOne}>
          <Text style={styles.fisrtsNumber}> Number1 [10 to 20]</Text>
            <TextInput style={styles.textBox1} />
        </View>
          <View style={styles.inputSecond}>
            <Text style={styles.secondNumber}>Number2 [10 to 20]</Text>
            <TextInput style={styles.textBox2} />
          </View>
            <View style={styles.input3}>
               <Pressable style={styles.pressable}>
                <Text>CALCULATE SUM</Text>
                </Pressable>
             <TextInput style={styles.textBox3} />
            </View>
        
          <StatusBar style="auto" />
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  headerBox: {
  borderWidth: 1,
  width: 300,
  height: 150,
  backgroundColor: (`#008b8b`),
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 5,
  
},
  header: {
    color: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
fisrtsNumber: {
  width: 300,
  height: 25,  
},
secondNumber: {
  width: 290,
  height: 25,
   
},
inputOne: {
  flexDirection: 'row',
  alignItems: 'center',
  width: 300,
  
},

inputSecond: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: 300, 
},
textBox1: {
    borderWidth: 1,
    width: 50,
    marginVertical: 50,
    justifyContent: 'space-evenly',        
},

textBox2: {
    borderWidth: 1,
    width: 50,
    marginVertical: 50,
    justifyContent: 'space-around',  
},

PressableInput: {
  flexDirection: 'row',
  alignItems: 'center',
  width: 300,
},

pressable: {
  marginVertical: 10,
  borderWidth: 2,
  padding: 5,
  backgroundColor: (`#00ffff`),
  marginRight: 150,
},


input3: {
  flexDirection: 'row',
  alignItems: 'center',
  width: 300,
},
textBox3: {
  flexDirection: 'row',
  


},

});
