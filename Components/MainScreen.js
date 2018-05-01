import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import HomeTab from './AppTabNavigation/HomeTab';
import SearchTab from './AppTabNavigation/SearchTab';
import AddMediaTab from './AppTabNavigation/AddMediaTab';
import LikesTab from './AppTabNavigation/LikesTab';
import ProfileTab from './AppTabNavigation/ProfileTab'; 

import {TabNavigator} from 'react-navigation';
import { Icon } from "native-base";

class MainScreen extends Component {

static navigationOptions = {

    headerLeft: <Icon name="ios-camera-outline" style={{ padding: 30 }} />,
    title: "FriendApp",
    headerRight: <Icon  name="ios-send-outline" style={{ paddingRight: 20 }} />

}

    render() {
        return(
                <AppTabNavigation/>
        );
    }
}

export default MainScreen;

const AppTabNavigation = TabNavigator ({

    HomeTab: {
        screen: HomeTab
    },
    
    SearchTab: {
        screen: SearchTab
    },

    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
},{
    animationEnabled:true,
    swipeEnabled:true,
    tabBarPosition:"bottom",

    tabBarOptions: {
        style: {
            ...Platform.select({
                android:{
                    backgroundColor: "white"
                }
            })
        },
        activeTintColor: "#ff69b4",
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});