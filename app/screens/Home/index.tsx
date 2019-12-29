import * as React from "react";
import HomeScreen from "./HomeScreen";
import { StatusBar } from "react-native";

interface Props {
  navigation:any;
}

interface State {}

export default class HomeContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }
  _onDetail=()=>{
    this.props.navigation.navigate('Detail')
  }
  render() {
    return <HomeScreen Detail={this._onDetail} />;
  }
}
