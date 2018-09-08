import React from 'react';
import { View, StyleSheet } from 'react-native';
import YasDimensions from "@Constants/Yas-Dimensions";
import YasText from "./Yas-Text";

const YasContent = (props) => (
    <View {...props}
        style={[
            styles.container,
            props.style
        ]}>
        {props.children}
        <View style={styles.footer}>
            <YasText xsmall style={styles.footerText}>All right reserved to someone</YasText>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'transparent',
        paddingLeft: YasDimensions.padding,
        paddingRight: YasDimensions.padding
    },
    footer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: YasDimensions.padding,
    },
    footerText: {
        fontStyle: 'italic'
    }
});

export default YasContent;
