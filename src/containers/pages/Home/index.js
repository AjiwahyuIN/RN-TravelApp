import React from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View>
            <SafeAreaView>
                <Text>Home</Text>
                <Button title='go to details' onPress={() => navigation.navigate('Details')}/>
            </SafeAreaView>
        </View>
    )
}

export default Home
