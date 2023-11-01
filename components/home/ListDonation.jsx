import { FlatList } from 'react-native';
import DonationVCard from '../shared/DonationVCard';

const ListDonation = ({ donations }) => {
    return(
        <FlatList 
            data={donations}
            renderItem={({ item }) => {
                return <DonationVCard item={item} />
            }}
            keyExtractor={item => item.slug}
            contentContainerStyle={{ columnGap: 16 }}
            showsHorizontalScrollIndicator={false}
            horizontal
        />
    )
}

export default ListDonation;