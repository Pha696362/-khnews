import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import modules from "../../modules";
import HeaderMain from "../../components/HeaderMain";
import { SafeAreaView } from "react-navigation";

interface Props {}

interface State {}

export default ({}: Props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderMain title="Setting" />
      <View style={styles.content}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: modules.COLOR_MAIN
  },
  content: {
    flex: 1,
    backgroundColor: modules.fds_blue_05
  }
});
