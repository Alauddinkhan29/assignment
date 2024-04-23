import { ActivityIndicator, Alert, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { GetPostsDataUrl } from '../Api/ApiConfig'
import Header from '../Component/Header'
import { horizontalScale, verticalScale } from '../utils/Scale'
import Card from '../Component/Card'

const List = (props) => {
    const [data, setData] = useState([])
    const [postsLoading, setPostsLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(GetPostsDataUrl);
            setData(response.data);
        } catch (error) {
            Alert.alert("Something went wrong!!")
        } finally {
            setPostsLoading(false);
        }
    };

    const renderItem = useCallback(
        ({ item }) => (
            <TouchableOpacity onPress={() => props.navigation.navigate('listDetail', { itemDetail: item?.id })} style={styles.listParentView}>
                <Card
                    id={item?.id}
                    title={item?.title}
                    detail={item?.body}
                />
            </TouchableOpacity>
        ),
        []
    );

    const renderPostsList = useCallback(() => {
        return (
            <View style={styles.listView}>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                />
            </View>
        )
    }, [data, props.navigation])



    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar
                backgroundColor="#FFFFFF"
                barStyle='dark-content'
                translucent={false}
            />
            <Header
                title={"Posts"}
            />
            {
                postsLoading ?
                    <View style={styles.loaderView}>
                        <ActivityIndicator size={"large"} color={"black"} />
                    </View>
                    :
                    renderPostsList()
            }
        </SafeAreaView>
    )
}

export default List

const styles = StyleSheet.create({
    loaderView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    listParentView: {
        height: verticalScale(180),
        justifyContent: "center",
        width: horizontalScale(350),
    },
    mainContainer: {
        flex: 1,
    },
    listView: {
        height: "93%",
        // backgroundColor: "red",
        width: horizontalScale(350),
        alignSelf: "center",
    }
})