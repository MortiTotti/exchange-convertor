import React from 'react';
import RootNavigation from "@Navigations/Root-Navigation";
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

export default class Root extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <RootNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
