import { Text, View } from 'react-native'
import TitleSection from './TitleSection';
import ListDonation from './ListDonation';
import DONATION from '../../json/donations.json'

const ColaborationProgram = () => {
    return (
        <View>
            <TitleSection>Program Kolaborasi</TitleSection>
            <ListDonation donations={DONATION} />
        </View>
        
    )
}

export default ColaborationProgram;