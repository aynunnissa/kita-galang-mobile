import { Text, View } from 'react-native'
import ListDonation from './ListDonation'
import DONATION from '../../json/donations.json'
import TitleSection from './TitleSection'

const RecommendedDonation = () => {
    return (
        <View>
            <TitleSection>Pilihan Kitagalang</TitleSection>
            <ListDonation donations={DONATION} />
        </View>
    )
}

export default RecommendedDonation;