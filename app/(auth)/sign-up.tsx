import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import getStarted from "@/assets/images/getStarted.svg"
import iconGoogle from "@/assets/images/iconGoogle.svg"
import { KeyboardAwareScrollView, KeyboardProvider, KeyboardToolbar } from "react-native-keyboard-controller";
import { useState } from "react";
import iconUser from "@/assets/images/iconUser.svg"
import iconEmail from "@/assets/images/iconEmail.svg"
import iconPassword from "@/assets/images/iconPassword.svg"
import iconEye from "@/assets/images/iconEye.svg"

export default function Page() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    const signUpUser = () => {
        console.log(name)
        console.log(email)
        console.log(password)
    }

    const togglePassword = () => {
        showPassword ? setShowPassword(false) : setShowPassword(true);
    }

    return (
        <KeyboardProvider>
            <SafeAreaView className="flex-1 bg-white">
                <KeyboardAwareScrollView bottomOffset={62}>

                    <View className="h-56 w-full">
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
                                <Text>Create your </Text>
                                <Text className="font-semibold text-blue-500">Account</Text>
                            </Text>
                            <Text className="text-center mt-1">
                                Sign up or log in to find out the best car for you
                            </Text>
                        </View>

                        <View className="flex space-y-2">

                            <View className="flex flex-row items-center relative">
                                <Image
                                    className="w-6 h-6 absolute left-2"
                                    source={iconUser}
                                    contentFit="contain"
                                    transition={100}
                                    placeholder={{ blurhash: "e8OW]J00~WxuD*00%ME1IV%L-:^+NG%Mj[WXE1ayofRj-:RkfQIoof" }}
                                />
                                <TextInput
                                    className="flex-1 border border-black/10 focus:border-black rounded py-2 pl-9 pr-2"
                                    placeholder="Name"
                                    autoCapitalize="words"
                                    maxLength={100}
                                    onChangeText={(text) => setName(text)}
                                />
                            </View>

                            <View className="flex flex-row items-center relative">
                                <Image
                                    className="w-6 h-6 absolute left-2"
                                    source={iconEmail}
                                    contentFit="contain"
                                    transition={100}
                                    placeholder={{ blurhash: "e8OW]J00~WxuD*00%ME1IV%L-:^+NG%Mj[WXE1ayofRj-:RkfQIoof" }}
                                />
                                <TextInput
                                    className="flex-1 border border-black/10 focus:border-black rounded py-2 pl-9 pr-2"
                                    placeholder="Email"
                                    inputMode="email"
                                    maxLength={100}
                                    onChangeText={(text) => setEmail(text)}

                                />
                            </View>

                            <View className="flex flex-row items-center relative">
                                <Image
                                    className="w-6 h-6 absolute left-2"
                                    source={iconPassword}
                                    contentFit="contain"
                                    transition={100}
                                    placeholder={{ blurhash: "e8OW]J00~WxuD*00%ME1IV%L-:^+NG%Mj[WXE1ayofRj-:RkfQIoof" }}
                                />
                                <TouchableOpacity className="absolute right-0 rounded z-50 p-2" onPress={togglePassword}>
                                    <Image
                                        className="w-6 h-6"
                                        source={iconEye}
                                        contentFit="contain"
                                        transition={100}
                                        placeholder={{ blurhash: "e8OW]J00~WxuD*00%ME1IV%L-:^+NG%Mj[WXE1ayofRj-:RkfQIoof" }}
                                    />
                                </TouchableOpacity>
                                <TextInput
                                    className="flex-1 border border-black/10 focus:border-black rounded py-2 pl-9 pr-12"
                                    placeholder="Password"
                                    maxLength={100}
                                    secureTextEntry={showPassword}
                                    onChangeText={(text) => setPassword(text)}
                                />
                            </View>

                        </View>

                        <TouchableOpacity onPress={signUpUser}>
                            <Text className="text-center bg-black text-white text-lg py-2 rounded">Sign Up</Text>
                        </TouchableOpacity>

                        <View className="flex relative items-center justify-center">
                            <Text className="h-1 w-full bg-black/5 rounded"></Text>
                            <Text className="bg-white absolute px-2">OR</Text>
                        </View>

                        <TouchableOpacity onPress={() => { }}>
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

                        <View className="flex flex-row justify-center">
                            <Text className="text-lg">Already have an account? </Text>
                            <Link href={"/(auth)/sign-in"} className="text-blue-500 text-lg font-medium">Login</Link>
                        </View>

                    </View>

                </KeyboardAwareScrollView>
                <KeyboardToolbar />
            </SafeAreaView>
        </KeyboardProvider >
    )
}