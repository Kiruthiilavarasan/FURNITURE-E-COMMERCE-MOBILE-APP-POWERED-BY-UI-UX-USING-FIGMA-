import React from 'react';
import { View, Text, Image } from 'react-native';
export default function ProductScreen({ route }) {
const { item } = route.params;
return (
<View style={{ flex: 1, padding: 20 }}>
<Image source={item.image} style={{ height: 200, borderRadius: 10 }} />
<Text style={{ fontSize: 24 }}>{item.name}</Text>
<Text style={{ fontSize: 20, color: 'gray' }}>{item.price}</Text>
</View>
);
}
