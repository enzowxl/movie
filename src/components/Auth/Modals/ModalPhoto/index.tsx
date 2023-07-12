import { Modal, View, StyleSheet, Image, Text, TouchableOpacity, useWindowDimensions, ImageBackground } from 'react-native'
import { COLORS } from '../../../../constants';
import { Header } from '../../Header';

interface ModalPhoto {
    visible: boolean;
    updateVisible: () => void;
    image: any;
}

export default function ModalPhoto({ visible, updateVisible, image }: ModalPhoto) {

    const { width } = useWindowDimensions()

    return (

        <Modal
            statusBarTranslucent
            visible={visible}
            transparent
        >

            <ImageBackground
                source={image}
                blurRadius={20}
                style={styles.cont}>

                <Header.Root
                    backGround={false}
                >

                    <Header.Left
                        onClick={updateVisible}
                        image={require('../../../../assets/Header/previous-green.png')}
                    />

                </Header.Root>

                <View style={styles.cont2}
                >

                    <Image
                        style={[styles.img, { width }]}
                        source={image}
                    />

                </View>

            </ImageBackground>

        </Modal>

    )

}

const styles = StyleSheet.create({

    cont: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    cont2: {
        flex: 1,
        justifyContent: 'center',
    },
    img: {
        height: 400,
        resizeMode: 'cover',
    }

})

/*

import { Modal, View, StyleSheet, Image, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import { COLORS } from '../../../../constants';
import { Header } from '../../Header';

interface ModalPhoto {
    visible: boolean;
    updateVisible: () => void;
    image: any;
}

export default function ModalPhoto({ visible, updateVisible, image }: ModalPhoto ) {

    const { width } = useWindowDimensions()

    return (

        <Modal
        statusBarTranslucent
        visible={visible}
        transparent
        >

            <View style={styles.cont}>

            <Header.Root
            backGround
            >

                <Header.Left
                onClick={updateVisible}
                image={require('../../../../assets/Header/previous-green.png')}
                />

            </Header.Root>

            <View style={styles.cont2}
            //onTouchEnd={updateVisible}
            >

                <Image
                style={[styles.img, { width }]}
                source={image}
                />

            </View>

            </View>

        </Modal>
        
    )
    
}

const styles = StyleSheet.create({

    cont: {
        flex:1,
        backgroundColor:COLORS.primary,
    },
    cont2: {
        flex:1,
        justifyContent:'center',
    },
    img:{
        height:400,
        resizeMode:'cover',
    }

})
*/