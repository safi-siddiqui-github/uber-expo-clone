import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from 'expo-image';
import getStarted from "@/assets/images/getStarted.svg"
import iconGoogle from "@/assets/images/iconGoogle.svg"

export default function Page() {

    return (
        <SafeAreaView className="flex-1 flex bg-white">

            <View className="flex-1 w-full">
                <Image
                    className="w-full h-full"
                    source={getStarted}
                    contentFit="cover"
                    transition={100}
                    placeholder={{ blurhash: "eNIF9__2_3jExuNIs.xuofax~qt7WAt7WBxuM{Rjayt7xuRjV@t8t6" }}
                />
            </View>

            <View className="flex space-y-5 p-5">

                <View className="flex">
                    <Text className="text-3xl text-center">
                        <Text>Get </Text>
                        <Text className="font-semibold text-blue-500">Started</Text>
                    </Text>
                    <Text className="text-center mt-1">
                        Sign up or log in to find out the best car for you
                    </Text>
                </View>

                <View className="flex space-y-2">
                    <Link href={"/(auth)/sign-up"} className="text-center bg-black text-white text-lg py-2 rounded">Sign Up</Link>
                    <Link href={"/(auth)/sign-in"} className="text-center bg-blue-500 text-white text-lg py-2 rounded">Sign In</Link>
                </View>

                <View className="flex relative items-center justify-center">
                    <Text className="h-1 w-full bg-black/5 rounded"></Text>
                    <Text className="bg-white absolute px-2">OR</Text>
                </View>

                <TouchableOpacity className="" onPress={() => { }}>
                    <View className="border py-1.5 rounded flex flex-row items-center justify-center">
                        <Image
                            className="w-5 h-5"
                            source={iconGoogle}
                            contentFit="contain"
                            transition={100}
                            placeholder={{ blurhash: "eWH]k7^X%fNaEM{15a9[OXg2Ri69I:w0w}b{sOxu-BjDAUohn$wcj^" }}
                        />
                        <Text className="text-lg text-center ml-2">Login With Google</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}