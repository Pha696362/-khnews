import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import SettingTabScreen from "./SettingTabScreen";

interface Props {}
interface State {}

export default class SettingTabContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return <SettingTabScreen />;
  }
}
