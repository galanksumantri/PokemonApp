[1mdiff --cc src/pages/Login/index.js[m
[1mindex e69de29,99b7d99..0000000[m
[1m--- a/src/pages/Login/index.js[m
[1m+++ b/src/pages/Login/index.js[m
[36m@@@ -1,0 -1,138 +1,141 @@@[m
[32m++<<<<<<< HEAD[m
[32m++=======[m
[32m+ import React from 'react';[m
[32m+ import { TextInput, View, Text, Dimensions, StyleSheet } from 'react-native';[m
[32m+ import { Formik } from 'formik';[m
[32m+ import { SafeAreaView } from 'react-native-safe-area-context';[m
[32m+ import analytics from '@react-native-firebase/analytics';[m
[32m+ import auth from '@react-native-firebase/auth';[m
[32m+ import { GoogleSignin, GoogleSigninButton  } from '@react-native-google-signin/google-signin';[m
[32m+ import { COLORS } from '../../themes';[m
[32m+ import Button from '../../component/Button';[m
[32m+ import * as navigation from '../../router/RootNavigation';[m
[32m+ [m
[32m+ export default function Login() {[m
[32m+   GoogleSignin.configure({[m
[32m+     webClientId:[m
[32m+     '382122280197-r6vdscaicacm7jkoiekchqgcv8a5cg0s.apps.googleusercontent.com',[m
[32m+   });[m
[32m+ [m
[32m+   async function GoogleLogin() {[m
[32m+     try {[m
[32m+       // Get the users ID token[m
[32m+       const { idToken } = await GoogleSignin.signIn();[m
[32m+ [m
[32m+       // Create a Google credential with the token[m
[32m+       const googleCredential = auth.GoogleAuthProvider.credential(idToken);[m
[32m+ [m
[32m+       // Sign-in the user with the credential[m
[32m+       await auth().signInWithCredential(googleCredential);[m
[32m+     } catch(error) {[m
[32m+       console.error({error});[m
[32m+     }}[m
[32m+ [m
[32m+     // googleLogin = useContext(AuthContext)[m
[32m+ [m
[32m+   return ([m
[32m+     <SafeAreaView[m
[32m+       style={styles.content}>[m
[32m+       <Text style={styles.tittleText}>RN Animation</Text>[m
[32m+       <View style={styles.container}>[m
[32m+         <Formik[m
[32m+           initialValues={{ [m
[32m+             email: '', [m
[32m+             password: '',[m
[32m+           }}[m
[32m+           onSubmit={ async () =>[m
[32m+               await analytics().logEvent('login',{[m
[32m+                 id: 1,[m
[32m+                 item: 'login',[m
[32m+               }, navigation.navigate("Dashboard")[m
[32m+             )}[m
[32m+         >[m
[32m+           {({ handleChange, handleBlur, handleSubmit, values }) => ([m
[32m+             <View>[m
[32m+               <TextInput[m
[32m+                 style={styles.inputForm}[m
[32m+                 onChangeText={handleChange('email')}[m
[32m+                 onBlur={handleBlur('email')}[m
[32m+                 value={values.email}[m
[32m+                 placeholder="Enter email id"[m
[32m+               />[m
[32m+               <TextInput[m
[32m+                 style={styles.inputForm}[m
[32m+                 onChangeText={handleChange('password')}[m
[32m+                 onBlur={handleBlur('password')}[m
[32m+                 value={values.password}[m
[32m+                 placeholder="Enter password"[m
[32m+                 secureTextEntry[m
[32m+               />[m
[32m+               <Button[m
[32m+                 title="LOGIN"[m
[32m+                 bgColor="green"[m
[32m+                 width= "0.7"[m
[32m+                 height= "0.05"[m
[32m+                 styleText="white"[m
[32m+                 style={{marginTop:10}}[m
[32m+                 onPress={handleSubmit}[m
[32m+               />[m
[32m+             </View>[m
[32m+           )}[m
[32m+         </Formik>[m
[32m+       </View>[m
[32m+       <View style={styles.register}>[m
[32m+         <Text>Not have account?</Text>[m
[32m+         <Button [m
[32m+           title="Register here"[m
[32m+           width="0.25"[m
[32m+           height="0.025"[m
[32m+           onPress={() => navigation.navigate("Register")}[m
[32m+         />[m
[32m+       </View>[m
[32m+       <Text style={{alignSelf: 'center', fontSize: 15, marginVertical: 10}}>OR</Text>[m
[32m+       <GoogleSigninButton[m
[32m+         style={{ width: 192, height: 48, alignSelf: "center" }}[m
[32m+         size={GoogleSigninButton.Size.Wide}[m
[32m+         color={GoogleSigninButton.Color.Dark}[m
[32m+         onPress={() => GoogleLogin().then(() => navigation.navigate('Dashboard'))}[m
[32m+         // disabled={this.state.isSigninInProgress}[m
[32m+       />[m
[32m+   </SafeAreaView>[m
[32m+   );[m
[32m+ }[m
[32m+ [m
[32m+ const windowHeight = Dimensions.get('window').height;[m
[32m+ [m
[32m+ const styles = StyleSheet.create({[m
[32m+   register: {[m
[32m+     marginTop: 10,[m
[32m+     flexDirection: "row",[m
[32m+     justifyContent: "center"[m
[32m+   },[m
[32m+   container: {[m
[32m+     justifyContent: "center",[m
[32m+     alignItems: "center",[m
[32m+     flexDirection: "row"[m
[32m+   },[m
[32m+   content: {[m
[32m+     padding: 24,[m
[32m+     flex: 1,[m
[32m+     justifyContent: "center",[m
[32m+     flexDirection: "column",[m
[32m+     backgroundColor: COLORS.white[m
[32m+   },[m
[32m+   buttonText: {[m
[32m+     color: 'white',[m
[32m+     textAlign: 'center',[m
[32m+   },[m
[32m+   tittleText: {[m
[32m+     color: COLORS.black,[m
[32m+     textAlign: 'center',[m
[32m+     fontSize: 20,[m
[32m+   },[m
[32m+   inputForm: {[m
[32m+     borderWidth: 1,[m
[32m+     borderColor: "green",[m
[32m+     marginTop: 10,[m
[32m+     borderRadius: 10,[m
[32m+     height: windowHeight * 0.05 ,[m
[32m+   },[m
[31m -})[m
[32m++})[m
[32m++>>>>>>> demo-branch[m
