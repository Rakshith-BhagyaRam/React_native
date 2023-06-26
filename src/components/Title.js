import React from 'react'
import { StyleSheet, Text } from 'react-native'
import color from '../constants/color'

const Title = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title

const styles = StyleSheet.create({
    title:{
        color:color.title,
        fontSize:25,
        fontWeight:"bold",
        textAlign:"center",
        padding:10,


    }
})