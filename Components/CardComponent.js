import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base';
import { height } from "window-size";

class CardComponent extends Component {

    render() {

        const images = {
            "1": require('../assets/2.jpg'),
            "2": require('../assets/6.jpg')
        }
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
                    <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1}} />
                </CardItem>
                <CardItem style={{ height: 40 }}>
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
                <CardItem style={{height: 20}}>
                    <Text>{this.props.likes}</Text>
                </CardItem> 
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900" }}>Puja, </Text>
                            This is my first react native project.This is my first react native projectThis is my first react native project
                            This is my first react native projectThis is my first react native project
                            This is my first react native project.
                        </Text>
                    </Body>    
                </CardItem>


                <CardItem style={{ height: 40 }}>
                    <Left>
                        <Thumbnail source={require('../assets/8.jpg')} />
                        <Body>
                            <Text>Piya</Text>
                            <Text note>march 1,2018</Text>
                        </Body> 
                    </Left>
                </CardItem>
                
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1}} />
                </CardItem>

                <CardItem style={{ height: 40 }}>
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

                <CardItem style={{height: 20}}>
                    <Text>{this.props.likes}</Text>
                </CardItem> 

                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900" }}>Puja, </Text>
                            This is my first react native project.This is my first react native projectThis is my first react native project
                            This is my first react native projectThis is my first react native project
                            This is my first react native project.
                        </Text>
                    </Body>    
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