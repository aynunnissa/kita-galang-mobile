import { useRouter } from 'expo-router'
import { Text, TouchableOpacity } from 'react-native'

const FavoriteDonation = () => {
    const router = useRouter();

    const handlePress = () => {
        router.push('/favorite')
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Text className="text-white">Favoritee</Text>
        </TouchableOpacity>
    )
}

export default FavoriteDonation;