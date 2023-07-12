import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import { COLORS } from "../../../constants"

export default function Participation({ data }: any) {

    const ItemList = ( props: any ) => {

        return (

            <View style={[styles.cont1, {
                marginLeft: data[0] === props.item ? 30 : 0,
                marginRight: props.index === data.length - 1 ? 30 : 10
            }]}>

                <TouchableOpacity style={[styles.cont]}>

                    <Image
                    style={styles.img}
                    source={{
                        uri: `https://image.tmdb.org/t/p/original/66T5HymEPBtrwJHehEUlPjB2dec.jpg`
                    }}
                    />

                </TouchableOpacity>

            </View>

        )

    }

    return (

        <View style={{
            marginBottom: 30 
        }}>

            <Text style={styles.txt}>Participation</Text>


            <FlatList
                data={data}
                horizontal
                keyExtractor={data => data.id.toString()}
                renderItem={(props) => (<ItemList {...props} />)}
            />

        </View>

    )

}

const styles = StyleSheet.create({

    cont: {
        borderRadius: 300,
    },
    txt: {
        fontSize: 20,
        fontFamily: 'Jost_600SemiBold',
        color: COLORS.white,
        marginBottom:10,
        paddingLeft:30
    },
    txt2: {
        fontSize: 14,
        fontFamily: 'Jost_400Regular',
        color: COLORS.white,
    },
    img:{
        width:230,
        height:130,
        borderRadius: 10,
    },
    cont1: {
        alignItems:'center'
    }

})