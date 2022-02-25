import React, {useState, useCallback} from 'react'
import { StyleSheet, Text, View, Pressable, TextInput, Button, Alert } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView, StatusBar } from 'react-native-web';


export default function App() {
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('male');
  const [answer, setAnswer] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);


 

  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ];


  

 

  
  function calculate() {
    parseInt(weight);
    parseInt(bottles);
    parseInt(time);
    let result = 0;
    let vastaus = "";
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;

    const grams_left = grams - burning * time;

    if (weight != 0) {
      if (gender == "male") {
        result = grams_left / (weight * 0.7);
        if (result < 0) {
          result = 0;
          setAnswer(result);
        } else {
          setAnswer(result);
        }
      } else {
        result = grams_left / (weight * 0.6);
        if (result < 0) {
          result = 0;
          setAnswer(result);
        } else {
          setAnswer(result);
        }
      }
    } else {
      alert("Please insert your weight");
    }
    
  }

  function Average(props) {
    return <Text style={styles.result2}>Vastaus: {answer.toFixed(2)}</Text>
  }

  function Over(props) {
    return <Text style={styles.result3}>Vastaus: {answer.toFixed(2)}</Text>
  }




  return (
    <View style={styles.container}>
      
      <View style={styles.field}>
      <Text>Weight</Text>
      <TextInput 
      style={styles.input}
      onChangeText={setWeight} 
      placeholder='Your weight'>
      
      </TextInput>
      </View>
      <Text>Bottles</Text>
      <View style={styles.field}>
      <TextInput 
      style={styles.input}
      onChangeText={setBottles} 
      placeholder="Amount of bottles">

      </TextInput>
      </View>
      <View style={styles.field}>
      <Text>Time</Text>
      <TextInput 
      style={styles.input}
      onChangeText={setTime} 
      placeholder="Hours from 1st bottle">

      </TextInput>
      </View>
      <View style={styles.field}>
      <Text>Gender</Text>
      <RadioForm
          style={styles.radio}
          buttonSize = {8}
          radio_props={genders}
          initial={0}
          onPress={(value) => {setGender(value)}}
        />
      </View>
      <View style={styles.ending}>
      <Button style={styles.button} onPress={calculate} title="Calculate"></Button>
      <Text style={styles.result1}>Vastaus: {answer.toFixed(2)}</Text>
      </View> 
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  field: {
    margin: 10,
    width: 180,
  },
  input: {
    marginLeft: 10,
    borderWidth: 3,
    padding: 5,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  radio: {
    marginTop: 10,
    marginBottom: 10,
  }, 
  result1: {
    fontSize: 25,
    marginTop:10,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
    padding: 20,
  }, 
  result2: {
    fontSize: 25,
    marginTop:10,
    backgroundColor: '#bbbf67',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
    padding: 20,
  }, 
  result3: {
    fontSize: 25,
    marginTop:10,
    backgroundColor: '#a34040',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
    padding: 20,
  }, 
  ending: {
    width: 140,
    alignContent: "center"
  }
  
});
