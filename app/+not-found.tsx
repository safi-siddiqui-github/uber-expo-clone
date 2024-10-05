import { Link } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotFoundScreen() {
    return (
        <SafeAreaView className='flex-1'>
            <Text>Not Found Page</Text>
            <Link href="/(auth)/get-started">Get Started</Link>
        </SafeAreaView>
    );
}