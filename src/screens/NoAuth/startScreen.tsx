import React, { useRef, useState } from 'react'
import {
    FlatList,
    View,
    StyleSheet,
    Animated
} from 'react-native'
import {
    useFonts,
    Jost_600SemiBold,
    Jost_400Regular
} from '@expo-google-fonts/jost'
import { useNavigation } from '@react-navigation/native'

import {
    TextsArray
} from '../../components/NoAuth/startScreen/data'
import {
    COLORS
} from '../../constants'

import StartScreenList from '../../components/NoAuth/startScreen/index'
import StartScreenPaginator from '../../components/NoAuth/startScreen/Paginator'
import StartScreenButton from '../../components/NoAuth/startScreen/Button'
import Splash from '../../components/Splash'


export default function StartScreen() {

    const n  = useNavigation<any>()

    const scrollX = useRef(new Animated.Value(0)).current
    const [pageIndex, updatePageIndex] = useState<number>(0)
    const pagesRef = useRef<any>(null)
    const [fontLoaded] = useFonts({
        Jost_600SemiBold,
        Jost_400Regular
    })
    

    const nextScroll = () => {

        if (pagesRef.current && pageIndex < TextsArray.length - 1) {

          const newIndex = pageIndex + 1
          pagesRef.current.scrollToIndex({ index: newIndex, animated: true })
          updatePageIndex(newIndex)
          
        }else {

            n.navigate('SignIn')
            setTimeout(() => {
                updatePageIndex(0)
                pagesRef.current.scrollToIndex({ index: 0, animated: true })
            }, 600)
            


        }

      }
    
      const previousScroll = () => {

        if (pagesRef.current && pageIndex > 0) {

          const newIndex = pageIndex - 1
          pagesRef.current.scrollToIndex({ index: newIndex, animated: true })
          updatePageIndex(newIndex)

        }

      }

    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
    )

    if (!fontLoaded) return <Splash />

    return (

        <View style={styles.cont}>

            <FlatList
                data={TextsArray}
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                scrollEnabled={false}
                ref={pagesRef}
                onScroll={handleScroll}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (<StartScreenList data={item} />)}
            />

            <StartScreenPaginator
                data={TextsArray}
                scrollX={scrollX}
            />

            <StartScreenButton
                nextScroll={nextScroll}
                previousScroll={previousScroll}
                index={pageIndex}
                data={TextsArray}
            />

        </View>

    )

}

const styles = StyleSheet.create({

    cont: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center'
    }

})