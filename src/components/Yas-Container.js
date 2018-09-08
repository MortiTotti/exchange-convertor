import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class YasContainer extends React.Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});
