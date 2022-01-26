import { StyleSheet } from "react-native";

export const itemUsersstyle = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#ffffff',
        marginHorizontal: 30,
        marginTop: 20,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 5,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 9,
        borderRadius: 5
    },
    info: {
        height: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }, 
    name: {
        fontSize: 17,
        color: '#3D3D3D'
    },
    phoneNum: {
        color: '#0F93C1',
        fontSize: 12
    }, 
    boxImg: {
        height: 50,
        display: 'flex',
        justifyContent: 'center'
    },
    buttonOption: {
        position: 'relative',
        width: 10,
        height: 20
    },  
    image: {
        width: 10,
        height: 20
    },
    subMenu: {
        position: 'absolute',
        left: -70,
        top: -15,
        width: 60,
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ECECEC',
        zIndex: 99,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 5,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 9
    }
});