import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { itemUsersstyle } from './itemUsersstyle';

const ItemUsers = ({ user, index, data, setData }) => {
    const [ subMenu, setSubMenu ] = useState(false);
    const openSubMenu = () => setSubMenu(!subMenu);
    console.log(data)

    const deleteUser = () => {
        data.splice(index, 1);
        setData([...data]);
    }
    return (
        <View style={itemUsersstyle.container}>
            <View style={itemUsersstyle.info}>
                <Text style={itemUsersstyle.name}>{user.firstname} {user.lastname}</Text>
                <Text style={itemUsersstyle.phoneNum}>{user.phone}</Text>
            </View>
            <View style={itemUsersstyle.boxImg}>
                <Pressable style={itemUsersstyle.buttonOption} onPress={openSubMenu}>
                    <Image 
                        style={itemUsersstyle.image}
                        source={require('../../assets/menuItemUser.png')}
                    />
                    {subMenu && 
                        <View style={itemUsersstyle.subMenu}>
                        <Pressable onPress={deleteUser}>
                            <Text>Delete</Text>
                        </Pressable>
                    </View>
                    }
                </Pressable>
            </View>
        </View>
    );
}

export default ItemUsers;