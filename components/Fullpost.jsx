import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import axios from 'axios';
import { useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';

const Fullpost = ({ id }) => {
    const { width } = useWindowDimensions();
    const [data, setData] = React.useState([])
    const source = {
        html: data.text
    }
    React.useEffect(() => {
        
        axios.get('http://192.168.31.116:4444/posts/' + id).then(res => {
            setData(res.data)
        })
    }, [])


    return (
        <View style={styles.fullpost}>
            <View>
                <Text>{data.title}</Text>
                <Text>{data.createdAt}</Text>
            </View>

            <Image style={styles.img} source={{ uri: `http://192.168.31.116:4444${data.imageUrl}` }} />

            <RenderHTML
                contentWidth={width}
                source={source}
            />
            
            <View style={styles.tags}>
                {
                    data.tags && data.tags.map((el, i) => <Text style={styles.tag} key={i}>{el}</Text>)
                }
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    fullpost: {
        padding: 5,
    },
    img: {
        width: '100%',
        height: 300,
        borderRadius: 10,
    },
})

export default Fullpost;