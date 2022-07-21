import { firebase } from '@react-native-firebase/database';

export const reference = () => firebase
  .app()
  .database('https://pokemongo-lite-default-rtdb.asia-southeast1.firebasedatabase.app/')