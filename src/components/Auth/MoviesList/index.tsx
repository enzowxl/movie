import { FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../../../constants';

export default function MoviesList( { data }: any ) {

    const ItemList = ( props: any ) => {

        return (
            <TouchableOpacity style={[styles.item, {
                marginBottom: 30//props.index === data.length - 1 ? 30 : 30,
                
                }]}>
                
            </TouchableOpacity>
          );

    }

    return <FlatList
    numColumns={2}
    showsVerticalScrollIndicator={false}
    data={data}
    keyExtractor={data => data.id.toString()}
    renderItem={(props) => (<ItemList {...props} />)}
    />
    
}

const styles = StyleSheet.create({
    item: {
        width: 130,
        height: 170,
        backgroundColor: COLORS.white,
        marginHorizontal:30,
    },
  });