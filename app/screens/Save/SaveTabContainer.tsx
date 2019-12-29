import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import SaveTabScreen from "./SaveTabScreen";

interface Props {}
interface State {}

export default class SaveTabContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return <SaveTabScreen/>;
  }
}
