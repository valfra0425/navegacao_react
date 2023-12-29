import {View, Text, Button} from 'react-native';
import {styles} from '../styles/styles.js'

export const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Profile', {name: 'jane'})}
        />
      </View>
    );
  }