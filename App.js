import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/saitama.jpg')} style={styles.image}/>
      <View style={styles.details}>
        <Text style={styles.name}>Name</Text>
        <Text style={[styles.name, styles.detail]}>Saitama (a.k.a. Caped Baldy)</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>Email</Text>
        <Text style={[styles.name, styles.detail]}>saitama@heroesAcadamy.org</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>Gender</Text>
        <Text style={[styles.name, styles.detail]}>Male</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  image:{
    width:150,
    height:150,
    alignSelf: "center",
    borderRadius: 75,
    marginTop:100,
    marginBottom:25
  },
  details:{
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  name:{
    borderColor: 'black',
    borderWidth:1,
    flex: 3,
    paddingLeft:5,
    marginBottom:5
  },
  detail:{
    flex: 7,
  }
})

export default App