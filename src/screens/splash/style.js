import { StyleSheet, Platform, StatusBar } from "react-native";
import YasDimensions from "@Constants/Yas-Dimensions";

const imageDimension = YasDimensions.width / 2;

const screenStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: YasDimensions.padding
    },
    image: {
        width: imageDimension,
        height: imageDimension
    },
});

export default screenStyle;