import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />

      <View className='flex-1'>
        <Text>Not Found Page</Text>
        <Link href={'/'}>GO HOME</Link>
      </View>
    </>
  );
}
