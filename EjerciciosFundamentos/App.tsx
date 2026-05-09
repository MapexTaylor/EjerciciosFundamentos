import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomInput from './scr/components/CustomInput';
import { useState } from 'react';

export default function App() {
//a
const greeting = (nombreSaludo: any) => {
  return `Hola, ${nombreSaludo}! Espero estes bien! Bienvenido a la aplicación.`;
}
const [name, setName] = useState("")

//b
const [age, setAge] = useState("")
//agregue esta variable porque el ejercicio lo pide, pero no es necesaria
const edad = age;


//c
const tareas = [
    { id: 1, nombre: "Estudiar Algebra" },
    { id: 2, nombre: "Practicar futbol" },
    { id: 3, nombre: "Realizar ejercicios de programación" }
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style = {styles.mainTitle}>Guía de Ejercicios</Text>
      <View style = {styles.ejercicio}>
        <Text style = {styles.title}>Primer Ejericio</Text>
        <CustomInput 
          placeholder={'Ingresa tu nombre!'} 
          value={name} 
          onChange={setName}
        />

        {name.length> 1 && <Text style = {styles.text}>{greeting(name)}</Text>}
        {name.length> 1 && <Text style = {styles.text}>Este es el nombre ingresado: {name}</Text>}
      </View>
      
      <View style = {styles.ejercicio}>
        <Text style = {styles.title}>Segundo Ejercicio</Text>
        <CustomInput 
        type="number"
        placeholder={'Ingresa tu edad!'} 
        value={edad} 
        onChange={setAge}/>

        <Text style = {styles.text}>Tu eres:</Text>
        {edad.length >= 1 && <Text style = {styles.text}>{Number(edad) >= 18 ? "Mayor de edad" : "Menor de edad"}</Text>}
      </View>
      

      <View style = {styles.ejercicio}>
        <Text style = {styles.title}>Tercer Ejercicio</Text>
        <Text style = {styles.text}>Estan son las tareas:</Text>
        {tareas.map((tarea) => (
          <Text style = {styles.text} key={tarea.id}>
            {tarea.id}. {tarea.nombre}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#9dd2d3',
  },
  ejercicio:{
    borderWidth:1,
    borderColor:'green',
    padding: 25,
    marginBottom:50,
    marginTop:70
  },
  title:{
    fontSize:15,
    fontWeight: 'bold',
    marginBottom:8
  },
  text:{
    marginTop:10
  },
  mainTitle:{
    fontSize:40,
    fontWeight: 'bold',
    marginTop:50,
    textAlign:'center'
  }
});
