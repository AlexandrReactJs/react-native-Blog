import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import RenderHTML from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';

const Post = ({ title, text, imageUrl }) => {
  const { width } = useWindowDimensions();
  const source = {
    html: text
}

  return (
    <View style={styles.post}>
      <View style={styles.postInfo}>
        <Text style={styles.postTitle}>{title}</Text>
        <RenderHTML style={styles.postText} contentWidth={width} source = {source}/>
      </View>
      <Image style={styles.img} source={{ uri: `http://192.168.31.116:4444${imageUrl}` }} />
    </View>
  )
}


const styles = StyleSheet.create({
  post: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'column',
    marginBottom: 15,
    paddingBottom: 15,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    
  },
  postInfo: {
  },
  postTitle:{
    fontWeight: 700,
    fontSize: 22,
  },
  img: {
    width: '100%',
    height: 200,
  },
})


export default Post;