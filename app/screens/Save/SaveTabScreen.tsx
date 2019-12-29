import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import modules from "../../modules";
import HeaderMain from "../../components/HeaderMain";
import { SafeAreaView } from "react-navigation";
import FastImage from "react-native-fast-image";
import { fontGSans } from "../../../functions/customFont";

interface Props {}

interface State {}

export default ({}: Props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderMain title="Your Save" />
      <View style={styles.content}>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          style={styles.ImgSearch}
          source={require("../../images/save.png")}
        />
        <Text style={styles.text}>All of your save will show in here. 
        </Text>
        <Text style={styles.text}>Thank you for for using our APP!
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text:{
    fontSize:modules.FONT_H4,
    ...fontGSans,
    color:modules.SUB_TEXT

  },
  container: {
    flex: 1,
    backgroundColor: modules.COLOR_MAIN
  },
  content: {
    flex: 1,
    backgroundColor: modules.WHITE,
    alignItems: "center",
    justifyContent: "center"
  },
  ImgSearch: {
    width: modules.VIEW_PORT_WIDTH / 1.5,
    height: modules.VIEW_PORT_HEIGHT /3.5
  }
});
