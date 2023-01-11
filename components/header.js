import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export default function Header({
    title,
    text
}) {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={[styles.text, { marginRight: "3%" }]}>
                {text}
            </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    header: {
        marginTop: "10%",
        marginHorizontal: "5%"
    },
    title: {
        fontSize: moderateScale(24),
        fontWeight: "600",
        color: "#232E43"
    },
    text: {
        fontSize: moderateScale(14),
        fontWeight: "300",
        color: "#8593AD",
        lineHeight: 21,
        marginTop: "5%"
    }
});
