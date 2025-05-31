import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const App = () => {
  const router = useRouter();

  return (
    
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={require('../assets/images/tutorlyLogo.png')} style={styles.logo}></Image>
        <Text style={styles.title}>Tutorly</Text>
      </View>
      <Text style={styles.subParagraph}>Find study partners and peer tutors to excel with on Tutorly.</Text>
      <TouchableOpacity onPress={() => router.push('/register')} style={styles.createAccount}>
        <Text style={styles.createAccountText}>Create an Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/login')} style={styles.login}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#075c3c',
    fontSize: 56,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subParagraph: {
    color: '#757575',
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 40,
    marginHorizontal: 40
  },
  createAccount: {
    backgroundColor: '#075c3c',
    padding: 12,
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: 10
  },
  createAccountText: {
    color: 'white',
    fontSize: 16,
  },
  login: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 100,
    alignItems: 'center',
    borderColor: '#D9D9D9',
    borderWidth: 1
  },
  loginText: {
    color: '#075c3c',
    fontSize: 16,
  },
})