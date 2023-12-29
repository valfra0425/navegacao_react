import {Text, View, Button} from 'react-native';
import { styles } from '../styles/styles';

export const ProfileScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text>This is jane's profile</Text>
            <Button
                title="Go to home"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
};