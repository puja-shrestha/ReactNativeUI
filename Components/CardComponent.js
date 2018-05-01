import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base'
import { height } from "window-size";

class CardComponent extends Component {

    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/8.jpg')} />
                        <Body>
                            <Text>Puja</Text>
                            <Text note>April 30,2018</Text>
                        </Body> 
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={require('../assets/2.jpg')} style={{ height: 200, width: null, flex: 1}} />
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent> 
                            <Icon name="ios-heart-outline" style={{ color: 'black'}} />
                        </Button>
                        <Button transparent> 
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black'}} />
                        </Button>
                        <Button transparent> 
                            <Icon name="ios-send-outline" style={{ color: 'black'}} />
                        </Button>
                    </Left>
                </CardItem>    

                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/8.jpg')} />
                        <Body>
                            <Text>Puja</Text>
                            <Text note>April 30,2018</Text>
                        </Body> 
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={require('../assets/6.jpg')} style={{ height: 200, width: null, flex: 1}} />
                </CardItem>
            </Card>    
        );
    }
}

export default CardComponent;

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
 });