import { Text, TextInput, View } from 'react-native'

const SearchDonation = () => {
    return (
        <View>
            <View>
                <TextInput 
                    placeholder='Temukan kontribusimu hari ini'
                    style={{
                        backgroundColor: 'white',
                        borderRadius: 10,
                        paddingVertical: 4,
                        paddingHorizontal: 16
                    }}
                />
            </View>
        </View>
    )
}

export default SearchDonation;