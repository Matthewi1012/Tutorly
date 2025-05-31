import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <Feather name="user" size={20} color="#999" style={styles.icon} />
            <TextInput
              style={styles.textInput}
              placeholder='Email'
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Last Name Input with Icon */}
          <View style={styles.inputWrapper}>
            <Feather name="lock" size={20} color="#999" style={styles.icon} />
            <TextInput
              style={styles.textInput}
              placeholder='Password'
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => router.push('/')} style={styles.back}>
              <Text style={styles.backText}>← Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.next, !(email && password) && styles.nextDisabled]}
              disabled={!(email && password)}
            >
              <Text style={styles.nextText}>Next →</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.loginText}>
          Do not have an account? <Text onPress={() => router.push('/register')} style={styles.registerLink}>Register</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  title: {
    color: '#075c3c',
    fontSize: 56,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  formContainer: {
    paddingHorizontal: 30
  },
  form: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  back: {
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 100,
    borderColor: '#D9D9D9',
    borderWidth: 1
  },
  backText: {
    color: '#075c3c',
  },
  next: {
    backgroundColor: '#075c3c',
    padding: 12,
    borderRadius: 100,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    borderColor: '#D9D9D9',
    borderWidth: 1
  },
  nextDisabled: {
    backgroundColor: '#d3d3d3',
  },
  nextText: {
    color: 'white',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
  registerLink: {
    color: '#075c3c',
    fontWeight: '600',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#999"
  },
});
