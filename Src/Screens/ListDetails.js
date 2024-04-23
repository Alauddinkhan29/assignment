import { ActivityIndicator, Alert, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Header from '../Component/Header'
import axios from 'axios'
import { GetPostDetailUrl } from '../Api/ApiConfig'
import CardDetails from '../Component/CardDetails'

const ListDetails = (props) => {
    const [itemData, setItemData] = useState()
    const [itemLoading, setItemLoading] = useState(true)

    useEffect(() => {

        fetchData()
    }, [])

    const fetchData = async () => {
        const { itemDetail } = props.route.params;
        try {
            const response = await axios.get(GetPostDetailUrl + itemDetail);
            setItemData(response.data);
        } catch (error) {
            Alert.alert("Something went wrong!!")
        } finally {
            setItemLoading(false);
        }
    };


    const renderCardDetails = useCallback(() => (
        <View style={styles.carView}>
            <CardDetails
                id={itemData.id}
                title={itemData.title}
                detail={itemData.body}
            />
        </View>
    ), [itemData]);

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
                    renderCardDetails()
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