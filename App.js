import React, { useState } from 'react';
import { SafeAreaView, Image, View, Text, Pressable, FlatList } from 'react-native';
import { appStyles } from './appStyle';
import ModalAddClientStyle from './components/modalAddClientStyle/ModalAddClient';
import ItemUsers from './components/itemUsers/ItemUsers';
export default function App() {
  const [ modal, setModal ] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const [ data, setData ] = useState([]);
  
  return (
    <SafeAreaView style={appStyles.container}>
      <ModalAddClientStyle modal={modal} closeModal={closeModal} data={data} setData={setData}/>
      <View style={appStyles.vista}>
        <Text style={appStyles.title}>App clients</Text>
        <Pressable onPress={openModal} style={appStyles.buttonAddClient}>
          <Text style={appStyles.textButtonAddClient}>Add client</Text>
        </Pressable>
        <FlatList 
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <ItemUsers  data={item} />
            )
          }}
        />
      </View>
      <Image 
        style={appStyles.img}
        source={require('./assets/Rectangle.png')}
      />
    </SafeAreaView>
  );
}

