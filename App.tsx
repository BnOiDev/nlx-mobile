import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface ButtonProps{
  title: string;
}

function Button (props: ButtonProps){
  return(
    <TouchableOpacity>
      <Text>
       {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello NLW</Text>

        <Button title='Send 1'/>
        <Button title='Send 2'/>
        <Button title='Send 4'/>
        <Button title='Hello Word'/>

      <StatusBar style="auto" backgroundColor='#000' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

   