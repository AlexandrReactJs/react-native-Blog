import { StyleSheet, View } from 'react-native';
import Fullpost from '../../components/Fullpost';


const FullpostScreen = ({route}) => {

    const {id} = route.params

    return (
        <Fullpost id = {id}/>

    )
}


export default FullpostScreen;


