import { SafeAreaView, Text, StatusBar, StyleSheet } from "react-native";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>oobr</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Full height of the screen
        justifyContent: "center", // Center content vertically
        alignItems: "center", // Center content horizontally
        backgroundColor: "#FFFFFF", // White background
    },
    title: {
        fontSize: 24, // Text size will always match `text-xl`
        fontWeight: "bold", // Matches Tailwind’s `font-bold`
        color: "#000000", // Black text color
    },
});