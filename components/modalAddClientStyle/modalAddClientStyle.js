import { StyleSheet, Dimensions } from "react-native";
var width = Dimensions.get('window').width;

export const modalAddClientStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.8)'
    },
    form: { 
        position: 'relative',
        marginTop: 450,
        width: width,
        minHeight: 300,
        backgroundColor: '#C37D0E',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        paddingVertical: 40
    },
    title: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '400'
    },
    span: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    buttonClose: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 40,
        height: 40,
        borderColor: '#C37D0E',
        
    },
    image: {
        width: 40,
        height: 40
    },
    buttonAdd: {
        backgroundColor: '#DF9E38',
        marginHorizontal: 40,
        marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 9
    },
    textButtonAdd: {
        fontSize: 25,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    buttonCancel: {
        backgroundColor: '#ffffff',
        borderColor: '#DF9E38',
        borderWidth: 7,
        paddingVertical: 8,
        marginHorizontal: 40,
        marginTop: 30,
        paddingHorizontal: 30,
        borderRadius: 5,

        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 9
    },
    textButtonCancel: {
        fontSize: 25,
        color: '#DF9E38',
        fontWeight: 'bold',
        lineHeight: 20
    }
})