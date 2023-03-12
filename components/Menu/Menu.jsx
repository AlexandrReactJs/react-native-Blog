import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import axios from 'axios';
import React from 'react';
import cancelIcon from '../../assets/cancel.png'

const Menu = ({ setMenuOpen }) => {

    const [categories, setCategories] = React.useState([])

    React.useEffect(() => {
        axios.get('http://192.168.31.116:4444/categories').then(res => {
            setCategories(res.data)
        })
    }, [])

    return (
        <View style={styles.menu}>
            <View>
                {
                    categories.map(el => <TouchableOpacity onPress={() => { setMenuOpen(false) }}><Text style={styles.category}>{el.name}</Text></TouchableOpacity>)
                }
            </View>
            <View>
                <TouchableOpacity style={styles.cancelBt} onPress={() => { setMenuOpen(false) }}>
                    <Image style={styles.cancelIcon} source={cancelIcon}/>
                </TouchableOpacity>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    menu: {
        backgroundColor: '#333',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    category: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 700,
        marginBottom: 10
    },
    cancelIcon: {
        width: 30,
        height: 30,
    },
    cancelBt: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 2,
        padding: 5,
    }

})




export default Menu;