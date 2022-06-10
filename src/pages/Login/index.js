import React from 'react';
import { TextInput, View, Text, Dimensions, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { GoogleSignin, GoogleSigninButton  } from '@react-native-google-signin/google-signin';
import { COLORS } from '../../themes';
import Button from '../../component/Button';
import * as navigation from '../../router/RootNavigation';

const validationSchema = Yup.object({
  email: Yup.string()
      .email('Invalid email!')
      .required('Email is required!'),
  password: Yup.string()
      .trim()
      .min(8, 'Password is too short!')
      .required('Password is required!'),
})

export default function Login() {
  const onLoginRDB = values => {
    try {
      database()
        .ref('users/')
        .orderByChild('email')
        .equalTo(values.email)
        .once('value')
        .then(async snapshot => {
          if (snapshot.val() == null) {
            Alert.alert('Invalid Email Id');
            return false;
          }
          const userData = Object.values(snapshot.val())[0];
          if (userData?.password !== values.password) {
            Alert.alert('Error', 'Invalid Password!');
            return false;
          }
          navigation.navigate('Dashboard');
          return false
        });
    } catch (error) {
      Alert.alert('Error', 'Not Found User');
    }
  };

  GoogleSignin.configure({
    webClientId:
    '382122280197-r6vdscaicacm7jkoiekchqgcv8a5cg0s.apps.googleusercontent.com',
  });

  async function GoogleLogin() {
    try {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
    } catch(error) {
      console.error({error});
    }}
    // googleLogin = useContext(AuthContext)

  const userInfo = {
    email: '',
    password: '',
  }
  return (
    <SafeAreaView
      style={styles.content}>
      <Text style={styles.tittleText}>PokemonGo Lite</Text>
      <View style={styles.container}>
        <Formik
          initialValues={userInfo}
          validationSchema={validationSchema}
          onSubmit={ async values => {
            onLoginRDB(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                style={styles.inputForm}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Enter email id"
              />
              <TextInput
                style={styles.inputForm}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Enter password"
                secureTextEntry
              />
              <Button
                title="LOGIN"
                bgColor="green"
                width= "0.7"
                height= "0.05"
                styleText="white"
                style={{marginTop:10}}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.register}>
        <Text>Not have account?</Text>
        <Button 
          title="Register here"
          width="0.25"
          height="0.025"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      <Text style={{alignSelf: 'center', fontSize: 15, marginVertical: 10}}>OR</Text>
      <GoogleSigninButton
        style={{ width: 192, height: 48, alignSelf: "center" }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => GoogleLogin().then(() => navigation.navigate('Dashboard'))}
        // disabled={this.state.isSigninInProgress}
      />
  </SafeAreaView>
  );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  register: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
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
    borderColor: "green",
    marginTop: 10,
    borderRadius: 10,
    height: windowHeight * 0.05 ,
  },
})