import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import modules from "../modules";
import { fontGSans, Battambang } from "../../functions/customFont";
import ICon from "react-native-vector-icons/Feather";
import _styles from "../_styles";

interface Props {
  img: any;
  DateTime: any;
  Category: any;
  Title: any;
  onDetail: any;
}

interface State {}

export default ({ img, DateTime, Category, Title, onDetail }: Props) => {
  return (
    <TouchableOpacity onPress={onDetail} style={styles.CardContainer}>
      <FastImage style={styles.Image} source={{ uri: img }} />
      <View style={styles.text}>
        <Text style={styles.CategoryFont}>{Category}</Text>
        <Text numberOfLines={2} style={styles.TitleFont}>
          {Title}
        </Text>
      </View>
      <View style={styles.Info}>
        <Text style={styles.fontText}>{DateTime}</Text>
        <View style={_styles.rows}>
          <TouchableOpacity>
            <ICon style={styles.Icon} name="bookmark" />
          </TouchableOpacity>
          <TouchableOpacity>
            <ICon style={styles.Icon} name="share-2" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  Icon: {
    fontSize: 24,
    paddingLeft: 12
  },
  Info: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: modules.SPACE5,
    justifyContent: "space-between"
  },
  TitleFont: {
    fontSize: modules.FONT_H4,
    ...Battambang,
    // lineHeight:30,
    color: modules.fds_blue_badge
  },
  CategoryFont: {
    fontSize: modules.FONT_H6,
    ...Battambang,
    color: modules.SUB_TEXT,
    marginVertical: modules.SPACE
  },
  CardContainer: {
    flex: 1,
    width: modules.VIEW_PORT_WIDTH,
    backgroundColor: modules.WHITE,
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    marginTop: modules.PADDING / 2
  },
  Image: {
    width: "100%",
    height: modules.VIEW_PORT_HEIGHT / 4,
    borderRadius: 12,
    overflow: "hidden",
    marginTop: modules.SPACE
  },
  text: {
    paddingVertical: modules.SPACE * 2,
    backgroundColor: modules.WHITE
  },
  fontText: {
    fontSize: modules.FONT_H5,
    ...Battambang,
    color: modules.SUB_TEXT
  }
});
