/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView, View,
 } from 'react-native';
 import FlexDimensionsBasics from './components/layouts/FlexDimensionsBasics';
 import Percentage from './components/layouts/Percentage';
 import Divide2then3 from './components/layouts/Divide2then3';
 // import  from './components/layouts/FlexAdvance';
 import AdvancedFlex from './components/layouts/FlexAdvance';
 import ScrollViewDemo from './components/scrolldemo/index';
 const App: ()=>Node = ()=>{
   return (
     // <SafeAreaView>
     //   <AdvancedFlex/>
     // </SafeAreaView>
     <ScrollViewDemo/>
   )
 }
 export default App;