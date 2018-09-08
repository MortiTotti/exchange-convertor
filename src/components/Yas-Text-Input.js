import React from 'react';
import { TextInput, StyleSheet } from "react-native";
import YasFontSizes from "@Constants/Yas-Font-Sizes";
import YasColors from "@Constants/Yas-Colors";
import YasDimensions from "@Constants/Yas-Dimensions";
import { FONT_FAMILY } from "@Constants/Yas";

class YasTextInput extends React.Component {
    render() {
        let { xxlarge, xlarge, large, small, xsmall, style } = this.props;

        let fontSize = YasFontSizes.normal;
        if (xxlarge) fontSize = YasFontSizes.xxlarge;
        if (xlarge) fontSize = YasFontSizes.xlarge;
        if (large) fontSize = YasFontSizes.large;
        if (small) fontSize = YasFontSizes.small;
        if (xsmall) fontSize = YasFontSizes.xsmall;

        return (
            <TextInput
                underlineColorAndroid='transparent'
                {...this.props}
                style={[
                    styles.input,
                    { fontSize: fontSize },
                    style
                ]}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        //fontFamily: FONT_FAMILY,
        borderWidth: 1,
        borderColor: YasColors.input.border,
        paddingLeft: YasDimensions.textPadding,
        paddingRight: YasDimensions.textPadding,
        borderRadius: 3
    }
});

export default YasTextInput;