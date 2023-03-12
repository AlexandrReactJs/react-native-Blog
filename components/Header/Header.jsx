import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import axios from 'axios';
import React from 'react';
import menu from '../../assets/menu.png'


const Header = ({setMenuOpen}) => {
    return(
        <View style={styles.Header}>
            <View style={styles.Logo}>
                <Text style={styles.logoText}>GAVRILOFF BLOG</Text>
            </View>
            <TouchableOpacity style={styles.menuBt} onPress = {() => {setMenuOpen(true)}}>
                <Image style={styles.menuIcon} source={menu}/>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    Header: {
        
        backgroundColor: '#333',
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        
    },

    Logo: {
        backgroundColor: '#fff',
        padding: 15,
        width: 201,
        borderRadius: 2,
        justifyContent: 'center'
    },
    logoText: {
        fontWeight: 800,
        fontSize: 20
    },
    menuBt: {
        borderWidth: 2,
        borderColor: '#fff',
        padding: 5,
        borderRadius: 2,
    },
    menuIcon: {
        width: 25,
        height: 25,
    }

})


export default Header;