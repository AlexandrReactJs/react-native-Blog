import { FlatList, TouchableOpacity } from 'react-native';
import Post from '../../components/Post/Post';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../Redux/Slices/posts-slice';

const MainScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.posts)

  React.useEffect(() => {
    dispatch(fetchPosts())

  }, [])



  return (
    <FlatList data={posts} renderItem={({ item }) => <TouchableOpacity onPress={() => { navigation.navigate('Fullpost', { id: item._id, title: item.title }) }}><Post title={item.title} text={item.text} imageUrl={item.imageUrl} /></TouchableOpacity>} />
  )
}


export default MainScreen;