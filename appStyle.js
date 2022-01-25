import { StyleSheet, Dimensions } from 'react-native';
var width = Dimensions.get('window').width;

export const appStyles = StyleSheet.create({
    container: {
        position:'relative',
        backgroundColor:'#E1E1E1',
        flex: 1
    },
    vista: {
        zIndex: 100,
        flex: 1
    },
    title: {
        marginTop: 40,
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
        textTransform: 'uppercase',
        
    },
    buttonAddClient: {
        backgroundColor: "#C37D0E",
        width: 300,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: width / 2 - 150,
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
    textButtonAddClient: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: '700',
        lineHeight: 20,
    },
    img: {
        position: 'absolute',
        width: width,
        height: 300,
    }
});