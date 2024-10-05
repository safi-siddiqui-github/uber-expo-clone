import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PagerView from "react-native-pager-view"
import { Image } from 'expo-image';
import welcomeOne from "@/assets/images/welcomeOne.svg"
import welcomeTwo from "@/assets/images/welcomeTwo.svg"
import welcomeThree from "@/assets/images/welcomeThree.svg"
import welcomePattern from "@/assets/images/welcomePattern.svg"
import { useRef, useState } from "react";

export default function Page() {

    const [btnText, setBtnText] = useState('Next');
    const pageRef = useRef<PagerView>(null);
    const [pagePosition, setPagePosition] = useState(0);

    const skipToGetStarted = () => {
        router.replace("/(auth)/get-started");
    }

    const pageChanged = (e: any) => {
        const currentPage = e.nativeEvent.position; // Get the current page position from nativeEvent
        setPagePosition(currentPage);

        if (currentPage == 2) {
            setBtnText('Get Started');
        } else {
            setBtnText('Next');
        }
    }

    const changeSlide = () => {
        if (pagePosition == 2) {
            router.replace("/(auth)/get-started");
        } else {
            pageRef.current?.setPage(pagePosition + 1);
        }
    }

    return (
        <SafeAreaView className="flex-1 p-5 pt-0 flex bg-white">

            <View className="flex items-end">
                <TouchableOpacity className="" onPress={skipToGetStarted}>
                    <Text className="font-medium p-2">Skip</Text>
                </TouchableOpacity>
            </View>

            <PagerView
                initialPage={0}
                className="h-3/4"
                onPageSelected={pageChanged}
                ref={pageRef}
            >
                <View key={1} className="flex items-center justify-center">
                    <View className="flex-1 w-full">
                        <Image
                            className="w-full h-full"
                            source={welcomeOne}
                            contentFit="contain"
                            transition={100}
                            placeholder={{ blurhash: "eKH2j64n9GIUIV?dxuWCWBRk4mRioboIt600?a-oxtxtE2WBf5axt6" }}
                        />
                    </View>
                    <View className="flex">
                        <Text className="text-3xl text-center">
                            <Text>The best car in your hands with </Text>
                            <Text className="font-semibold text-blue-500">Ryde</Text>
                        </Text>
                        <Text className="text-center mt-1">
                            Discover the convenience of finding your perfect ride with our Ryde App
                        </Text>
                    </View>
                </View>
                <View key={2} className="flex items-center justify-center">
                    <View className="flex-1 w-full">
                        <Image
                            className="w-full h-full"
                            source={welcomeTwo}
                            contentFit="contain"
                            transition={100}
                            placeholder={{ blurhash: "eHEyoc8_9E_4IS9E?c%N9ERi8_?d%MIAIU_4ISITo$t8adaxR-xuWC" }}
                        />
                    </View>
                    <View className="flex">
                        <Text className="text-3xl text-center">
                            <Text className="font-semibold text-blue-500">Perfect</Text>
                            <Text> ride is just one tap away to you</Text>
                        </Text>
                        <Text className="text-center mt-1">
                            Find your ideal ride effortlessly as your journey begins with Ryde
                        </Text>
                    </View>
                </View>
                <View key={3} className="flex items-center justify-center">
                    <View className="flex-1 w-full relative">
                        <Image
                            className="w-full h-full absolute top-0 left-0"
                            source={welcomePattern}
                            contentFit="contain"
                            transition={100}
                        />
                        <Image
                            className="w-full h-full"
                            source={welcomeThree}
                            contentFit="contain"
                            transition={100}
                            placeholder={{ blurhash: "eG6vPbMIH?n4ozL}kqo}pIae8wyDx]V@WB*JVsRPR5ogwIRjWVtlfj" }}
                        />
                    </View>
                    <View className="flex">
                        <Text className="text-3xl text-center">
                            <Text>Your ride, your way so let's get </Text>
                            <Text className="font-semibold text-blue-500">Started</Text>
                        </Text>
                        <Text className="text-center mt-1">
                            Enter your destination, sit back, and let us take care of the rest.
                        </Text>
                    </View>
                </View>
            </PagerView>

            <View className="flex-1"></View>

            <View className="flex place-self-end">

                <View className="flex flex-row justify-center">
                    <Text className={`${pagePosition == 0 ? 'bg-blue-500' : 'bg-black/20'} h-2 w-1/12 rounded-full mr-2 `}></Text>
                    <Text className={`${pagePosition == 1 ? 'bg-blue-500' : 'bg-black/20'} h-2 w-1/12 rounded-full mr-2 `}></Text>
                    <Text className={`${pagePosition == 2 ? 'bg-blue-500' : 'bg-black/20'} h-2 w-1/12 rounded-full `}></Text>
                </View>

                <TouchableOpacity className="mt-4" onPress={changeSlide}>
                    <Text className="text-center bg-black text-white text-lg py-2 rounded">{btnText}</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}