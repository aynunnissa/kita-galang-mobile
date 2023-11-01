import { Image, Text, View } from 'react-native'

const ClickableBanner = () => {
    return (
        <View className="w-full">
            <Image
                className="w-full h-[200px] object-cover rounded-lg"
                source={{
                    uri: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6'
                }}
            />
        </View>
    )
}

export default ClickableBanner;