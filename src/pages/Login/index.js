import React from 'react';
import { TextInput, View, Text, Dimensions, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton  } from '@react-native-google-signin/google-signin';
import { COLORS } from '../../themes';
import { Button } from '../../component';
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

const userInfo = {
  email: '',
  password: '',
}

const Submit = ({email, password}) => {
  auth().signInWithEmailAndPassword(email, password).then(() => {
    navigation.navigate('Dashboard')
  })
  .catch(error => {
    if (error.code === 'auth/user-not-found') {
      console.log('user not found!');
    }

    if (error.code === 'auth/wrong-password') {
      console.log('wrong password!');
    }
    console.error(error);
  });
}

export default function Login() {
  GoogleSignin.configure({
    webClientId:
    '382122280197-r6vdscaicacm7jkoiekchqgcv8a5cg0s.apps.googleusercontent.com',
  });

  async function GoogleLogin() {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
    } catch(error) {
      console.error({error});
    }}

  return (
    <SafeAreaView
      style={styles.content}>
      <Text style={styles.tittleText}>PokemonGo Lite</Text>
      <View style={styles.container}>
        <Formik
          initialValues={userInfo}
          validationSchema={validationSchema}
          onSubmit={ (values) => Submit(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, errors, values, touched }) => (
            <View>
              <TextInput
                style={styles.inputForm}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Enter email id"
              /> 
              {errors.email && touched.email && <Text style={styles.eror}>{touched.email && errors.email}</Text>}
              <TextInput
                style={styles.inputForm}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Enter password"
                secureTextEntry
              />
              {errors.email && touched.password && <Text style={styles.eror}>{touched.password && errors.password}</Text>}
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
          title="Register here!"
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
  eror: {
    fontSize: 15, 
    color: 'red', 
    marginHorizontal: 10, 
    alignSelf: 'flex-start', 
  },
})