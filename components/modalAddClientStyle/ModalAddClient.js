import React, { useState } from 'react';
import { Modal, Text, Pressable, Image, ScrollView, View } from 'react-native';
import { modalAddClientStyle } from './modalAddClientStyle';
import InputGruop from '../inputGroup/InputGroup';

const ModalAddClient = ({ modal, closeModal, data, setData }) => {
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ count, setCount ] = useState(1);

    const saveData = () => {
        const dataUser = {
            id:count,
            firstname,
            lastname,
            email,
            phone
        }
        setData([
            ...data,
            dataUser
        ]);
        closeModal();
        setFirstname('');
        setLastname('');
        setEmail('');
        setPhone('');
        setCount(count + 1);
    }
    return ( 
        <Modal animationType="slide" visible={modal} transparent={true}>
            <View style={modalAddClientStyle.container}>
                <ScrollView>
                        <View style={modalAddClientStyle.form}>
                            <Text style={modalAddClientStyle.title}>Add new <Text style={modalAddClientStyle.span}>Client</Text></Text>
                            <Pressable style={modalAddClientStyle.buttonClose} onPress={closeModal}>
                                <Image 
                                    style={modalAddClientStyle.image}
                                    source={require('../../assets/buttonClose.png')}
                                /> 
                            </Pressable>
                            <InputGruop setState={setFirstname} name="First name" type="default" />
                            <InputGruop setState={setLastname} name="Last name" type="default" />
                            <InputGruop setState={setEmail} name="Email" type="email-address" />
                            <InputGruop setState={setPhone} name="Phone" type="phone-pad" />
                            <Pressable style={modalAddClientStyle.buttonAdd} onPress={saveData}>
                                <Text style={modalAddClientStyle.textButtonAdd}>Add</Text>
                            </Pressable>
                            <Pressable style={modalAddClientStyle.buttonCancel} onPress={closeModal}>
                                <Text style={modalAddClientStyle.textButtonCancel}>Cancel</Text>
                            </Pressable>
                        </View>
                </ScrollView>
            </View>
        </Modal>
    );
}


// Mayo de 2018 versión nativa de reacción 0.55.2

// Esto funciona bien:

// secureTextEntry={true}
// Y esto ya no funciona:

// password={true} 

export default ModalAddClient;