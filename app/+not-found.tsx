import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function NotFoundScreen() {
    return (
        <SafeAreaView className='flex-1'>
            <Text>Not Found Page</Text>
            <Link href="/(onboarding)/welcome">GO HOME</Link>
        </SafeAreaView>
    );
}