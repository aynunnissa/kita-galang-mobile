import { Stack } from 'expo-router';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

const FavoritePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'rgb(14 165 233)', color: 'white' },
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="items-center p-4">
          <Text>This page is in progress...</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoritePage;
