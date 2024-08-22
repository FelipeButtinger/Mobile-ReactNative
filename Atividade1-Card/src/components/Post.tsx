import { View, Text, StyleSheet, Image } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

interface PostProps {
  title: string;
}

const Post = ({ title }: PostProps) => {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#CDEAC0",
        width: "90%",
        paddingVertical: 8,
      }}
    >
      <Header />
      <Image
        style={{ height: 800, resizeMode: "contain" }}
        source={require("../../assets/poste.png")}
      />
      <Text style={styles.title}>{title}</Text>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#f1f1f1",
  },
});

export default Post;
