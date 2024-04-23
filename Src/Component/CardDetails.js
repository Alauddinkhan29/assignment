import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../utils/Scale'

const CardDetails = (props) => {

    const { id, title, detail } = props

    return (
        <View style={styles.mainView}>
            <View style={styles.titleView}>
                <View style={styles.idtitleInnerView}>
                    <Text style={styles.idText}>Id : </Text>
                </View>
                <View style={styles.iddetailView}>
                    <Text style={styles.subTxt}>{id}</Text>
                </View>
            </View>
            <View style={styles.subtitleView}>
                <View style={styles.subtitleInnerView}>
                    <Text style={styles.idText}>title : </Text>
                </View>
                <View style={styles.subdetailView}>
                    <Text style={styles.subTxt}>{title}</Text>
                </View>
            </View>
            <View style={[styles.titleView, { marginVertical: 15 }]}>
                <View style={styles.titleInnerView}>
                    <Text style={styles.idText}>Detail : </Text>
                </View>
                <View style={styles.detailView}>
                    <Text style={styles.subTxt}>{detail}</Text>
                </View>
            </View>
        </View>
    )
}

export default CardDetails

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
    subtitleInnerView: {
        height: verticalScale(40),
        width: horizontalScale(60),
        justifyContent: "center",
        alignItems: "center"
    },
    idtitleInnerView: {
        height: verticalScale(60),
        width: horizontalScale(60),
        justifyContent: "center",
        alignItems: "center"
    },
    detailView: {
        width: horizontalScale(240),
    },
    subdetailView: {
        width: horizontalScale(240),
        justifyContent: "center"
    },
    iddetailView: {
        height: verticalScale(60),
        width: horizontalScale(240),
        justifyContent: "center",
    },
    titleView: {
        width: horizontalScale(300),
        alignSelf: "center",
        flexDirection: "row",
    },
    subtitleView: {
        width: horizontalScale(300),
        alignSelf: "center",
        flexDirection: "row",
    },
    mainView: {
        width: horizontalScale(340),
        backgroundColor: "white",
        alignSelf: "center",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.50,
        shadowRadius: 14.00,
        elevation: 20,
    }
})