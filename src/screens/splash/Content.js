import React from 'react';
import { Image } from 'react-native';
import splash from '@Assets/images/splash.png';
import screenStyle from "./style";
import { YasContainer } from "@Components";

const Content = () => (
    <YasContainer style={screenStyle.container}>
        <Image style={screenStyle.image} source={splash} />
    </YasContainer>
)

export default Content;
