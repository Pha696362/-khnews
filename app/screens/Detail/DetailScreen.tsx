import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import modules from "../../modules";
import HeaderMain from "../../components/HeaderMain";
import { SafeAreaView, ScrollView } from "react-navigation";
import FastImage from "react-native-fast-image";
import { DMNews } from "../../dummy/index.dummy";
import {
  fontGSans,
  Battambang,
  BattambangBold
} from "../../../functions/customFont";
import HeaderDetail from "../../components/HeaderDetail";
import DetailWebView from "../../components/DetailWebView";

interface Props {
  onBack: any;
}

interface State {}

export default ({ onBack }: Props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderDetail
        iconLeft="arrow-left"
        onClickIconLeft={onBack}
        title="DETAIL"
        iconRight="share-2"
      />
      <ScrollView style={styles.content}>
        <FastImage
          // resizeMode={FastImage.resizeMode.contain}
          style={styles.ImgCover}
          source={{
            uri:
              "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          }}
        />
        <View style={styles.TextArea}>
          <Text style={styles.text}>
            Liverpool ទៅ​សំពង​កញ្ជ្រោង​៤​ដំបង​ដល់​ក្នុង​រូង​បន្ត​ដាច់​១៣​ពិន្ទុ
          </Text>
          <Text style={styles.Writer}>Create By: Pengleng Hok</Text>
          <Text style={styles.Date}>Des 18, 2019</Text>
          <View style={styles.BorderLine} />
        </View>
        <View style={styles.WebView}>
          <Text>
            " Trent Alexander-Arnold
            ​ជា​តួ​អង្គ​សំខាន់​​បង្កើត​ឲ្យ​មាន​បាល់​ទាំង​៤​គ្រាប់​កើត​ឡើង​គឺ​បញ្ជូន​ឲ្យ​ស៊ុត
            (Assist) ២, បង្កើត​ប៉េណាល់ទី​១ និង​ស៊ុត​ខ្លួន​ឯង​១​។​
            គ្រាប់​ទី​មួយ​របស់​ក្រុម​ភ្ញៀវ​រក​បាន​ដោយ​ Firmino នាទី៣១,
            គ្រាប់​ទី​ពីរ​ជា​ការ​ស៊ុត​របស់​ Milner នាទី​៧១ គ្រាប់​ទី​បី​
            Firminio នាទី​៧៤ ហើយ​គ្រាប់​ចុង​ក្រោយ​ជា​ថ្វី​ជើង​របស់ Arnold
            ផ្ទាល់​នាទី​៧៨។​
            នេះ​គឺ​ជា​ការ​ប្រកួត​ទី​១៨​ប៉ុណ្ណោះ​សម្រាប់​ក្រុម​លោក​ Jurgen Klopp
            ដោយ​ពួកគេ​សល់​១​ប្រកួត​ក្នុង​ដៃ​ព្រោះ​ជាប់​កាតព្វកិច្ច​លេង​ពាន​ FIFA
            Club World Cup។ នៅ​ប្រកួត​ក្រោយ​ Liverpool នឹង​ទទួល​ភ្ញៀវ​ Wolves
            នៅ​កីឡដ្ឋាន​ Anfield៕"
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  WebView: {
    flex: 1,
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    width: modules.VIEW_PORT_WIDTH - modules.BODY_HORIZONTAL_12 * 2,
    height: modules.VIEW_PORT_HEIGHT
  },
  BorderLine: {
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 3,
    width: modules.VIEW_PORT_WIDTH / 4,
    marginTop: modules.PADDING
  },
  Date: {
    fontSize: modules.FONT_P,
    ...Battambang,
    marginTop: modules.SPACE5,
    color: modules.SUB_TEXT
  },
  Writer: {
    fontSize: modules.FONT_H5,
    ...BattambangBold,
    marginTop: modules.SPACE5
  },
  TextArea: {
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    paddingTop: modules.PADDING
  },
  text: {
    fontSize: modules.FONT_H4,
    ...Battambang,
    color: modules.SUB_TEXT
  },
  container: {
    flex: 1,
    backgroundColor: modules.COLOR_MAIN
  },
  content: {
    flex: 1,
    backgroundColor: modules.WHITE
  },
  ImgCover: {
    width: modules.VIEW_PORT_WIDTH,
    height: modules.VIEW_PORT_HEIGHT / 3.5
  }
});
