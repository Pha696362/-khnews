import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList
} from "react-native";
import _styles from "../../_styles";
import HeaderMain from "../../components/HeaderMain";
import modules from "../../modules";
import ScrollableTabView from "react-native-scrollable-tab-view";
import { DMNews } from "../../dummy/index.dummy";
import CardNews from "../../components/CardNews";
import { BattambangBold } from "../../../functions/customFont";

interface Props {
  Detail: any;
}

export default ({ Detail }: Props) => {
  return (
    <View style={[_styles.flx1, styles.MainContainer]}>
      <SafeAreaView />
      <HeaderMain img={require("../../images/logo3.png")} icon="bell" />
      <View style={styles.container}>
        <ScrollableTabView tabBarTextStyle={styles.TabLabel}>
          <View style={styles.Scrolrable} tabLabel="ព័ត៌មានថ្មីៗ">
            <FlatList
              data={DMNews}
              keyExtractor={(i, index) => index.toString()}
              renderItem={({ item, index }: any) => (
                <CardNews
                  key={item.key}
                  img={item.img}
                  DateTime={item.publicDate}
                  Category={item.Category}
                  Title={item.title}
                  onDetail={Detail}
                />
              )}
            />
          </View>
          <View style={styles.Scrolrable} tabLabel="ព័ត៌មានជាតិ">
            <FlatList
              data={DMNews}
              keyExtractor={(i, index) => index.toString()}
              renderItem={({ item, index }: any) => (
                <CardNews
                  key={item.key}
                  img={item.img}
                  DateTime={item.publicDate}
                  Category={item.Category}
                  Title={item.title}
                  onDetail={Detail}
                />
              )}
            />
          </View>
          <View style={styles.Scrolrable} tabLabel="អន្តរជាតិ">
            <FlatList
              data={DMNews}
              keyExtractor={(i, index) => index.toString()}
              renderItem={({ item, index }: any) => (
                <CardNews
                  key={item.key}
                  img={item.img}
                  DateTime={item.publicDate}
                  Category={item.Category}
                  Title={item.title}
                  onDetail={Detail}
                />
              )}
            />
          </View>
          <View style={styles.Scrolrable} tabLabel="ព័ត៌មានកីឡា">
            <FlatList
              data={DMNews}
              keyExtractor={(i, index) => index.toString()}
              renderItem={({ item, index }: any) => (
                <CardNews
                  key={item.key}
                  img={item.img}
                  DateTime={item.publicDate}
                  Category={item.Category}
                  Title={item.title}
                  onDetail={Detail}
                />
              )}
            />
          </View>
        </ScrollableTabView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TabLabel: {
    ...BattambangBold,
    fontSize: 15,
    marginTop: modules.PADDING - 3
  },
  Scrolrable: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: modules.fds_blue_05
  },
  MainContainer: {
    backgroundColor: modules.COLOR_MAIN
  },
  tabView: {
    backgroundColor: "rgba(0,0,0,0.01)"
  },
  card: {
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "rgba(0,0,0,0.1)",
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: "#ccc",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3
  }
});
