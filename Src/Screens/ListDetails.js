import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import axios from 'axios'
import { GetPostDetailUrl } from '../Api/ApiConfig'
import CardDetails from '../Component/CardDetails'

const ListDetails = (props) => {
    const [itemData, setItemData] = useState()
    const [itemLoading, setItemLoading] = useState(true)

    useEffect(() => {
        const { itemDetail } = props.route.params;
        axios(GetPostDetailUrl + itemDetail)
            .then((res) => {
                setItemData(res?.data)
                setItemLoading(false)
            })
            .catch((err) => {
                setItemLoading(false)
            })
    }, [])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar
                backgroundColor="#FFFFFF"
                barStyle='dark-content'
                translucent={false}
            />
            <Header
                title={"Post Details"}
                backShow={true}
                backPress={() => props.navigation.goBack()}
            />
            {
                itemLoading ?
                    <View style={styles.loaderView}>
                        <ActivityIndicator size={"large"} color={"black"} />
                    </View>
                    :
                    <View style={styles.carView}>
                        <CardDetails
                            id={itemData.id}
                            title={itemData.title}
                            detail={itemData.body}
                        />
                    </View>
            }

        </SafeAreaView>
    )
}

export default ListDetails

const styles = StyleSheet.create({
    carView: {
        marginTop: 20
    },
    loaderView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    mainContainer: {
        flex: 1,
    },
})