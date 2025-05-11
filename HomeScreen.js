import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
const furnitureData = [{ id: '1', name: 'Sofa', image: require('../assets/sofa.jpg'),
price: '$199' }, { id: '2', name: 'Chair', image: require('../assets/chair.jpg'), price:
'$99' },];
export default function HomeScreen({ navigation }) {
return (
<View style={{ flex: 1, padding: 10 }}>
<FlatList
data={furnitureData}
keyExtractor={item => item.id}
renderItem={({ item }) => (
<TouchableOpacity onPress={() => navigation.navigate('Product', { item
})}>
<View style={{ marginBottom: 20 }}>
<Image source={item.image} style={{ height: 150, borderRadius: 10 }}
/>
<Text>{item.name}</Text>
<Text>{item.price}</Text>
</View>
</TouchableOpacity>
)}
/>
</View>
);
}
