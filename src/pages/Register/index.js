import React from 'react';
import { TextInput, View, Text, Dimensions , StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '../../themes';
import Button from '../../component/Button'

const validationSchema = Yup.object({
    username: Yup.string()
        .trim()
        .min(3, 'Invalid username!')
        .required('Username is required!'),
    bio: Yup.string()
        .trim()
        .min(3, 'Invalid bio!')
        .required('Bio is required!'),
    email: Yup.string()
        .email('Invalid email!')
        .required('Email is required!'),
    password: Yup.string()
        .trim()
        .min(8, 'Password is too short!')
        .required('Password is required!'),
    confirmPassword: Yup.string()
        .equals([Yup.ref('password'), null], 
        'Password does not match!')
})

export default function Register({navigation}) {
  const userInfo = {
    username: '',
    bio: '',
    email: '',
    password: '',
    confirmPassword: '',
  } 
  return (
    <SafeAreaView
      style={styles.content}>
      <Text style={styles.tittleText}>RN Animation</Text>
      <View style={styles.container}>
        <Formik
          initialValues={userInfo}
          validationSchema={validationSchema}
          onSubmit={(values) => {
              console.log(values)
              navigation.navigate("Login")
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit, }) => {   
            const { username, bio, email, password, confirmPassword } = values;
            return(
                <View>
                <TextInput
                    style={styles.inputForm}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={username}
                    placeholder="Enter username"
                />
                <TextInput
                    style={styles.inputForm}
                    onChangeText={handleChange('bio')}
                    onBlur={handleBlur('bio')}
                    value={bio}
                    placeholder="Enter bio"
                />
                <TextInput
                    style={styles.inputForm}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={email}
                    placeholder="Enter email id"
                />
                <TextInput
                    style={styles.inputForm}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={password}
                    placeholder="Enter password"
                    secureTextEntry
                />
                <TextInput
                    style={styles.inputForm}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={confirmPassword}
                    placeholder="Enter password again"
                    secureTextEntry
                />              
                <Button
                    title="REGISTER"
                    // disabled={!isValid}
                    bgColor="green"
                    width= "0.7"
                    height= "0.05"
                    style={{marginTop:10}}
                    onPress={handleSubmit}
                    styleText="white"
                />
                </View>
          )}}
        </Formik>
      </View>
    </SafeAreaView>
  );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  content: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: COLORS.white
  },
  button: {
    backgroundColor: 'blue',
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  tittleText: {
    color: COLORS.black,
    textAlign: 'center',
    fontSize: 20,
  },
  inputForm: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: "green",
    borderRadius: 10,
    height: windowHeight * 0.05 ,
  },
})