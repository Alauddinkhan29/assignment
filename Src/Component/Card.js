import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../utils/Scale'

const Card = (props) => {
    const { id, title, detail } = props

    return (
        <View style={styles.cardMainView}>
            <View style={styles.titleView}>
                <View style={styles.idtitleInnerView}>
                    <Text style={styles.idText}>Id : </Text>
                </View>
                <View style={styles.iddetailView}>
                    <Text style={styles.subTxt}>{id}</Text>
                </View>
            </View>
            <View style={styles.titleView}>
                <View style={styles.titleInnerView}>
                    <Text style={styles.idText}>title : </Text>
                </View>
                <View style={styles.detailView}>
                    <Text numberOfLines={2} style={styles.subTxt}>{title}</Text>
                </View>
            </View>
            <View style={[styles.titleView, { marginBottom: 15 }]}>
                <View style={styles.titleInnerView}>
                    <Text style={styles.idText}>Detail : </Text>
                </View>
                <View style={styles.detailView}>
                    <Text numberOfLines={2} style={styles.subTxt}>{detail}</Text>
                </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    subTxt: {
        fontSize: horizontalScale(12),
        color: "black",
        fontWeight: "700"
    },
    idText: {
        fontSize: horizontalScale(14),
        color: 'black',
        fontWeight: "bold"
    },
    titleInnerView: {
        height: verticalScale(40),
        width: horizontalScale(60),
        alignItems: "center"
    },
    idtitleInnerView: {
        height: verticalScale(40),
        width: horizontalScale(60),
        justifyContent: "center",
        alignItems: "center"
    },
    detailView: {
        height: verticalScale(40),
        width: horizontalScale(240),
    },
    iddetailView: {
        height: verticalScale(40),
        width: horizontalScale(240),
        justifyContent: "center",
    },
    titleView: {
        height: verticalScale(40),
        width: horizontalScale(300),
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    cardMainView: {
        height: verticalScale(150),
        width: horizontalScale(320),
        justifyContent: "space-around",
        alignSelf: "center",
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    }
})