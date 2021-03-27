import React from 'react'
import { View, Text, SafeAreaView, Button, ScrollView, StyleSheet, Image, FlatList, ImageBackground, TouchableOpacity } from 'react-native'

import discoverData from '../../../assets/data/discoverData'
import activitiesData from '../../../assets/data/activitiesData'
import discoverCategoriesData from '../../../assets/data/discoverCategoriesData'
import learnMoreData from '../../../assets/data/learnMoreData'

import COLORS from '../../../colors'
import profile from '../../../assets/images/person.png'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont()
Feather.loadFont()

const Home = ({navigation}) => {

    const renderDiscover = ({item}) => {
        return(
            <TouchableOpacity>
                <ImageBackground
                source={item.image}
                style={[
                    styles.discoverImageWrapper,{
                        marginLeft: item.id === 'discover-1' ? 20 : 0
                    }
                ]}
                imageStyle={styles.discoverImage}
                >
                    <Text style={styles.discoverImageTitle}>{item.title}</Text>
                    <View style={styles.locationWrapper}>
                        <Entypo name='location-pin' size={18} color={COLORS.white}/>
                        <Text style={styles.locationText}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const renderActivities = ({item}) => {
        return(
            <View style={styles.activityWrapper}>
                <Image source={item.image} style={styles.activityImage}/>
                <Text style={styles.activityTitle}>{item.title}</Text>
            </View>
        )
    }

    const renderLearnMore = ({item}) => {
        return (
            <TouchableOpacity>
                <ImageBackground
                source={item.image}
                style={[
                    styles.learnImageWrapper,{
                        marginLeft: item.id === 'learnMore-1' ? 20 : 0
                    }
                ]}
                imageStyle={styles.learnImage}
                >
                <Text style={styles.learnText}>{item.title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
    return (
        <View style={StyleSheet.container}>
            <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <Feather
                        name='menu'
                        size={32}
                        color={COLORS.black}
                        />
                        <Image source={profile} style={styles.profileImage}/>
                    </View>
                </SafeAreaView>

                {/* discover */}
                <View style={styles.discoverWrapper}>
                    <Text style={styles.discoverTitle}>Discover</Text>
                    <View style={styles.discoverCategoriesWrapper}>
                        <Text style={styles.discoverCategoriesText}>All</Text>
                        <Text style={styles.discoverCategoriesText}>Destinations</Text>
                        <Text style={styles.discoverCategoriesText}>Cities</Text>
                        <Text style={styles.discoverCategoriesText}>Experiences</Text>
                    </View>
                    <View style={styles.discoverItemsWrapper}>
                        <FlatList 
                        data={discoverData}
                        renderItem={renderDiscover}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* activities */}
                <View style={styles.activitiesWrapper}>
                    <Text style={styles.activitiesTitle}>Activities</Text>
                    <View style={styles.activitiesItem}>
                        <FlatList
                        data={activitiesData}
                        renderItem={renderActivities}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* Learn More */}
                <View style={styles.learnWrapper}>
                    <Text style={styles.learnTitle}>Learn More</Text>
                    <View style={[styles.learnItemWrapper]}>
                        <FlatList
                        data={learnMoreData}
                        renderItem={renderLearnMore}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    },
    headerWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginTop:20,
        alignItems:'center'
    },
    profileImage:{
        height:52,
        width:52,
        borderRadius:10
    },
    discoverWrapper:{
        marginTop:20,
    },
    discoverTitle:{
        // fontFamily:'Lato-Bold',
        fontSize:24,
        color: COLORS.black,
        marginHorizontal:20,
        fontWeight:'600'
    },
    discoverImageTitle:{
        fontSize:16,
        color:COLORS.white,
        fontWeight:'600'
    },
    discoverCategoriesWrapper:{
        flexDirection:"row",
        marginTop:20,
        marginHorizontal:20,
    },
    discoverCategoriesText:{
        // fontFamily:'Lato-Regular',
        fontSize:16,
        marginRight:30,
        color:COLORS.gray,
    },
    discoverItemsWrapper:{
        marginTop:20,
    },
    discoverImageWrapper:{
        width: 170,
        height: 250,
        justifyContent:'flex-end',
        paddingVertical:15,
        paddingHorizontal:10,
        borderRadius:50,
        marginRight:20,
        borderRadius:20,
    },
    discoverImage:{
        borderRadius:20
    },
    locationWrapper:{
        flexDirection:'row',
        alignItems:'center',
        paddingTop:10
    },
    locationText:{
        color:COLORS.white,
        fontSize:12,
        paddingLeft:5,
        alignItems:'center',
        justifyContent:'center',
        fontWeight:'600'
    },
    activityWrapper:{
        marginRight:20,
        alignItems:'center',
        justifyContent:'flex-end',
        marginHorizontal:20
    },
    activityImage:{
        width:36,
        justifyContent:'flex-end'
    },
    activityTitle:{
        fontSize:14,
        color:COLORS.gray,
        fontWeight:'400',
        paddingTop:10,
    },
    activitiesWrapper:{
        marginTop:30,
        // paddingHorizontal:20
    },
    activitiesTitle:{
        fontSize:24,
        fontWeight:'600',
        color:COLORS.black,
        marginHorizontal:20
    },
    activitiesItem:{
        paddingVertical:20,
        justifyContent:'flex-end'
    },
    learnImageWrapper:{
        paddingVertical:20,
        paddingHorizontal:10,
        width: 170,
        height: 180,
        justifyContent: 'flex-end',
        marginRight: 20,
    },
    learnImage:{
        borderRadius:20,
    },
    learnText:{
        color:COLORS.white,
        fontSize:14,
        fontWeight:'600',
        alignItems:'center'
    },
    learnWrapper:{
        // marginTop:10
    },
    learnTitle:{
        fontSize:24,
        fontWeight:'600',
        color:COLORS.black,
        marginHorizontal:20,
        alignItems:'center',
        justifyContent:'center'
    },
    learnItemWrapper:{
        paddingVertical:20,
        // marginHorizontal:20
    },
})
export default Home
