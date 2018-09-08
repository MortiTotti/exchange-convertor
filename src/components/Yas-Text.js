import React from 'react';
import { Text, StyleSheet } from "react-native";
import YasFontSizes from "@Constants/Yas-Font-Sizes";
import { FONT_FAMILY } from "@Constants/Yas";

class YasText extends React.Component {
    render() {
        let { xxlarge, xlarge, large, small, xsmall, style } = this.props;

        let fontSize = YasFontSizes.normal;
        if (xxlarge) fontSize = YasFontSizes.xxlarge;
        if (xlarge) fontSize = YasFontSizes.xlarge;
        if (large) fontSize = YasFontSizes.large;
        if (small) fontSize = YasFontSizes.small;
        if (xsmall) fontSize = YasFontSizes.xsmall;

        return (
            <Text
                {...this.props}
                style={[
                    styles.caption,
                    { fontSize: fontSize },
                    style
                ]}
            />
        );
    }
}

const styles = StyleSheet.create({
    caption: {
        //fontFamily: FONT_FAMILY,
    }
});

export default YasText;