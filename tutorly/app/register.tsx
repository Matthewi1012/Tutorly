import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react'

const Register = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.formContainer}>
        <View style={styles.stepsContainer}>
          {[1, 2, 3, 4].map((step, idx) => (
            <View key={step} style={styles.stepItem}>
              <View style={[styles.circle, idx === 0 && styles.activeCircle]}>
                <Text style={styles.circleText}>{step}</Text>
              </View>
              <Text style={[styles.stepLabel, idx === 0 && styles.activeStepLabel]}>
                {['Full name', 'Account details', 'Academic info', 'Study habits'][idx]}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <Feather name="user" size={20} color="#999" style={styles.icon} />
            <TextInput
              style={styles.textInput}
              placeholder='First name'
              placeholderTextColor="#999"
              value={first}
              onChangeText={setFirst}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Feather name="user" size={20} color="#999" style={styles.icon} />
            <TextInput
              style={styles.textInput}
              placeholder='Last name'
              placeholderTextColor="#999"
              value={last}
              onChangeText={setLast}
            />
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => router.push('/')} style={styles.back}>
              <Text style={styles.backText}>← Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.next, !(first && last) && styles.nextDisabled]}
              disabled={!(first && last)}
            >
              <Text style={styles.nextText}>Next →</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.loginText}>
          Already have an account? <Text onPress={() => router.push('/login')} style={styles.loginLink}>Login</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Register;

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
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  stepItem: {
    alignItems: 'center',
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#d9ead3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCircle: {
    backgroundColor: '#075c3c',
  },
  circleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  stepLabel: {
    marginTop: 5,
    fontSize: 10,
    color: '#999',
    textAlign: 'center',
  },
  activeStepLabel: {
    color: '#075c3c',
    fontWeight: '600',
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
  loginLink: {
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
