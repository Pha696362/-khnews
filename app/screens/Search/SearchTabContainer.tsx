import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchTabScreen from './SearchTabScreen';

interface Props {
}
interface State {
}

export default class SearchTabContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <SearchTabScreen/>
    );
  }
}
