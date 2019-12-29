import * as React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import modules from "../../modules";
import HeaderMain from "../../components/HeaderMain";
import { SafeAreaView } from "react-navigation";
import Icon from "react-native-vector-icons/Feather";
import _styles from "../../_styles";
import { fontGSans } from "../../../functions/customFont";

interface Props {}

interface State {}

export default ({}: Props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderMain title="Search" />
      <View style={styles.content}>
        <TextInput autoFocus={true} style={styles.textinput} placeholder="Search" />
        <View style={styles.title}>
          <Text style={styles.FontTitle}>Recent Search:</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  FontTitle: {
    fontSize: modules.FONT_H5,
    ...fontGSans,
    color:modules.SUB_TEXT
  },
  title: {
    marginTop: modules.PADDING
  },
  container: {
    flex: 1,
    backgroundColor: modules.COLOR_MAIN
  },
  content: {
    flex: 1,
    backgroundColor: modules.fds_blue_05,
    paddingHorizontal: modules.BODY_HORIZONTAL_18,
    paddingTop: modules.PADDING
  },
  textinput: {
    padding: 0,
    margin: 0,
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: modules.RADIUS,
    fontSize: modules.FONT_H5
  }
});
