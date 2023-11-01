import { Image, Text, View } from 'react-native';

const DonationVCard = ({ item }) => {
    return(
        <View className="relative shadow-xl bg-white rounded-lg w-[198px]">
            <View className="absolute top-0 left-0 z-10 bg-sky-100 p-1 rounded-tl-lg rounded-br-lg">
                <Text className="text-sky-600 text-xs font-semibold">29 hari lagi</Text>
            </View>
            <View className="flex-row w-full h-[110px]">
                <Image
                    className="w-full h-auto object-cover rounded-t-lg"
                    source={{
                        uri: item.cover
                    }}
                />
            </View>
            <View className="p-2">
                <Text className="text-gray-800 font-bold mb-8">{item.title}</Text>
                <View className="flex-row gap-1 items-center">
                    <Text className="text-xs">Terkumpul</Text>
                    <Text className="text-sky-500 font-bold">Rp{item.target.toLocaleString()}</Text>
                </View>
            </View>
        </View>
    );
}

export default DonationVCard;