import React from 'react';
import { View, StyleSheet } from "react-native";
import PropTypes from 'prop-types'
import YasColors from '@Constants/Yas-Colors';
import YasDimensions from '@Constants/Yas-Dimensions';
import YasText from './Yas-Text';

const YasNavbarTitle = (props) => (
    <View style={styles.container}>
        <YasText
            small
            style={[styles.caption]}>
            {props.caption}
        </YasText>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: YasDimensions.navbarHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: YasColors.headerSection
    },
    caption: {
        fontWeight: 'bold',
        color: YasColors.titles.screen
    }
});

YasNavbarTitle.propTypes = {
  caption: PropTypes.string
}

export default YasNavbarTitle;