/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Promoções</Text>
              <FlatList
                data={[
                  {key: '1',name: '[Amazon] Vanish kit 1 Pink 1,5L + 1 Crystal White 1,5L por R$ 20,68 - FG prime'},
                  {key: '2',name: '[ZATTINI] Tênis Nike Court Royale Masculino - Azul - R$ 103,99'},
                  {key: '3',name: '[Direct Go] Promoção de lançamento: Canais Básicos + 5 anos grátis de HBO por R$ 59,90/mês'},
                  {key: '4',name: '[MAGALU] Galaxy Note 10+ R$3.149,10à vista OU 2.991,00 CLIENTE OURO NO APP'},
                  {key: '5',name: '[MAGALU] NITRO 5 GTX1650, 8gb, 128gb SSD+1tb, i5 9300H AN515-54-58CL Endless R$4844,05av'},
                  {key: '6',name: '[Hype Games] PSN 12 meses 111,90'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
 
});

export default App;
