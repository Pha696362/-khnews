import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import FastImage from "react-native-fast-image";
import modules from "../modules";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { FontGSansBold } from "../../functions/customFont";
interface Props {
  img?: any;
  icon?: any;
  title?: any;
}
interface State {}

export default ({ img, icon, title }: Props) => {
  return (
    <View style={styles.container}>
      {img ? (
        <FastImage
          style={styles.imgLogo}
          resizeMode={FastImage.resizeMode.contain}
          source={img}
        />
      ) : (
        <View />
      )}
      {title ? <Text style={styles.title}>{title}</Text> : <View />}
      {icon ? <Icon style={styles.Icon} name={icon} /> : <View />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    backgroundColor: modules.COLOR_MAIN,
    paddingVertical: modules.SPACE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  imgLogo: {
    width: 100,
    height: 50
  },
  Icon: {
    fontSize: 28,
    color: modules.WHITE
  },
  title: {
    fontSize: modules.FONT_H3,
    color: modules.WHITE,
    ...FontGSansBold
  }
});
