import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import { COLORS } from "../../../constants"
import { useNavigation } from "@react-navigation/native"

export default function Cast({ data }: any) {

    const n = useNavigation<any>()

    const ItemList = ( props: any ) => {


        function navigationPerson() {

            n.navigate('Person', {
                personId: props.item.id
            })
            
        }

        return (

            <View style={[styles.cont1, {
                marginLeft: data[0] === props.item ? 30 : 0,
                marginRight: 30//props.index === data.length - 1 ? 30 : 30
            }]}>

                <TouchableOpacity style={[styles.cont]}
                onPress={navigationPerson}
                >

                    <Image
                    style={styles.img}
                    source={{
                        uri: `https://image.tmdb.org/t/p/original${props.item.profile_path}`
                    }}
                    />

                </TouchableOpacity>

                <Text style={[styles.txt2,{
                    marginTop:5
                }]}>{props.item.original_name}</Text>
                <Text style={[styles.txt2, {
                    color: COLORS.gray,
                    fontSize: 11
                }]}>{props.item.character}</Text>

            </View>

        )

    }

    return (

        <View style={{
            marginBottom: 20 
        }}>

            <Text style={styles.txt}>Cast</Text>


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
        width: 60,
        height: 60,
        borderRadius: 300,
    },
    cont1: {
        alignItems:'center'
    }

})