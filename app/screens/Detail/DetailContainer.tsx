import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DetailScreen from './DetailScreen';
interface Props {
    navigation:any;
}

interface State {
}

export default class DetailContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }
  _onClickBack=()=>{
    this.props.navigation.goBack()
  }
  public render() {
    return (
    <DetailScreen
    onBack={this._onClickBack}
    />
    );
  }
}
