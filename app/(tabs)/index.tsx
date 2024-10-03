import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {

    return <Redirect href={'/(auth)/welcome'} />
    
    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <Text>Home Screen</Text>
        </SafeAreaView>
    )
}