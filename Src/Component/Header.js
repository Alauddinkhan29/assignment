import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../utils/Scale'

const Header = (props) => {
    const { title, backPress, backShow } = props;

    return (
        <View style={styles.mainView}>
            {
                backShow ?
                    <TouchableOpacity onPress={backPress} style={styles.bacBtnView}>

                        <Text style={styles.backTxt}>Back</Text>
                    </TouchableOpacity>
                    : <View style={styles.bacBtnView}></View>
            }
            <View style={styles.headingView}>
                <Text style={styles.headerTxt}>{title}</Text>
            </View>
            <View style={styles.bacBtnView}></View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    clearAllTxt: {
        fontSize: horizontalScale(13),
    },
    shareIcon: {
        height: verticalScale(50),
        width: horizontalScale(55),
        justifyContent: "center",
        alignItems: "center"
    },
    headerTxt: {
        fontWeight: "bold",
        fontSize: horizontalScale(18),
        color: 'black'
    },
    headingView: {
        height: verticalScale(50),
        width: "60%",
        justifyContent: "center",
        alignItems: "center"
    },
    mainView: {
        height: verticalScale(50),
        width: "100%",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    bacBtnView: {
        height: verticalScale(50),
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    backTxt: {
        fontSize: horizontalScale(13),
        color: "black"
    }
})