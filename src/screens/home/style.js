import { StyleSheet } from "react-native";
import YasDimensions from "@Constants/Yas-Dimensions";

const screenStyle = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: YasDimensions.padding
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    rows: {
        width: YasDimensions.width,
        height: "30%"
    }
});

export default screenStyle;