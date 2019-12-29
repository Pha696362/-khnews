import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeContainer from "../screens/Home";
import SettingTabContainer from "../screens/Setting/SettingTabContainer";
import SearchTabContainer from "../screens/Search/SearchTabContainer";
import SaveTabContainer from "../screens/Save/SaveTabContainer";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import _styles from "../_styles";
import modules from "../modules";
import DetailContainer from "../screens/Detail/DetailContainer";

const APP = createStackNavigator(
  { HOME: HomeContainer, Detail: DetailContainer },
  {
    headerMode: "none"
  }
);
const TabNavigation = createBottomTabNavigator(
  {
    HomeTab: APP,
    Search: SearchTabContainer,
    Save: SaveTabContainer,
    Setting: SettingTabContainer
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ defaultHandler }) => {
        defaultHandler();
      },
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName: any;
        let labelName: any;
        if (routeName === "HomeTab") {
          iconName = "home";
          labelName = "HOME";
        } else if (routeName === "Search") {
          iconName = "search";
          labelName = "SEARCH";
        } else if (routeName === "Save") {
          iconName = "bookmark";
          labelName = "SAVE";
        } else if (routeName === "Setting") {
          iconName = "gear";
          labelName = "SETTING";
        }
        return (
          <View style={_styles.iconTabContainer}>
            <Icon
              name={iconName}
              size={focused ? 32 : 26}
              color={`${tintColor}`}
            />
            {/* <Text style={focused ? _styles.labelTabActive : _styles.labelTab}>
              {labelName}
            </Text> */}
          </View>
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: modules.fds_blue_60,
      inactiveTintColor: modules.fds_blue_30,
      showLabel: false,
      style: {
        elevation: 0,
        borderTopWidth: 1,
        borderTopColor: "#F0F0F5",
        backgroundColor: "#fff",
        height: 50,
        paddingTop: 5
      }
    }
  }
);
export default createAppContainer(TabNavigation);
