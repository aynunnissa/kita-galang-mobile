import { Stack } from 'expo-router';
import { SafeAreaView, ScrollView, View } from 'react-native';
import SearchDonation from '../components/header/SearchDonation';
import FavoriteDonation from '../components/header/FavoriteDonation';
import DonationCategory from '../components/home/DonationCategory';
import RecommendedDonation from '../components/home/RecommendedDonation';
import ClickableBanner from '../components/home/ClickableBanner';
import ColaborationProgram from '../components/home/ColaborationProgram';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'rgb(14 165 233)' },
          headerTitle: '',
          headerLeft: () => <SearchDonation />,
          headerRight: () => <FavoriteDonation />,
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 p-4">
          {/* <DonationCategory /> */}
          <View className="my-4">
            <RecommendedDonation />
          </View>
          <View className="my-4">
            <ClickableBanner />
          </View>
          <View className="my-4">
            <ColaborationProgram />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
