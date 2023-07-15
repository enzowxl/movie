import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { COLORS } from "../../../constants"
import { useNavigation } from "@react-navigation/native"

export default function ListSearch({ data }: any ) {
    const n = useNavigation<any>()

    function ItemList(props: any) {

        function navigationMovie() {

            n.push('Movie', {
                movieId: props.item.id
            })
            
        }

        return(

            <TouchableOpacity style={{flexDirection:'row', alignItems: 'center'}} onPress={navigationMovie}>

                <Image
                style={styles.cont}
                source={{
                    uri: `https://image.tmdb.org/t/p/original/${props.item.poster_path}`,
                }}
                />
                <View>
                <Text style={styles.txt}>{props.item.title}</Text>
                <Text style={[styles.txt, { fontFamily: "Jost_400Regular", fontSize: 14 }]}>{
                    props.item.overview.length <= 100
                    ?
                    props.item.overview
                    :
                    `${props.item.overview.slice(0, 100)}...`
                    
                }</Text>
                </View>
            </TouchableOpacity>

        )
        
    }

    return <FlatList
    data={data}
    keyExtractor={data => data.id.toString()}
    renderItem={(props) => <ItemList {...props} />}
    />
    
}

const styles = StyleSheet.create({

    cont: {
        width: 130,
        height: 170,
        backgroundColor: COLORS.white02,
        marginLeft:30,
        marginBottom:30
    },
    txt: {
        fontSize: 20,
        fontFamily: "Jost_600SemiBold",
        color: COLORS.white,
        width:250,
        paddingHorizontal:20,
        marginVertical:5,
        textAlign:'center'

    }

})