// ======= EXERCISE 1 =======
// import React from 'react';
// import {View, Text} from 'react-native';
//
// const Exercise1 = () => {
//   return (
//       <View style={{marginTop: 50, margin: 20}}>
//         <Text style={{fontSize: 24}}>RP Values</Text>
//         <Text style={{color: 'green'}}>Excellence</Text>
//         <Text style={{backgroundColor: 'yellow'}}>Customer-Centric</Text>
//         <Text style={{fontStyle: 'italic'}}>Integrity</Text>
//         <Text style={{textAlign: 'center'}}>Teamwork</Text>
//         <Text style={{backgroundColor: 'black', color: 'white'}}>Integrity</Text>
//       </View>
//   )
// }
//
// export default Exercise1;

// ======= EXERCISE 2 =======
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   greenBox: {
//     width:100,
//     height:100,
//     marginTop: 30,
//     backgroundColor: 'green',
//     borderWidth: 1,
//     borderColor: 'black'
//   },
//   boxText: {
//     textAlign: 'center',
//     color: 'white'
//   },
//   title: {
//     fontWeight: 'bold'
//   }
// });
//
// const Exercise2 = () => {
//   return (
//       <View style={{marginTop: 50, margin: 20}}>
//         <View style={styles.greenBox}>
//           <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our People</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our Campus</Text>
//         </View>
//       </View>
//   )
// }
//
// export default Exercise2;

// ======= EXERCISE 3A =======
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     alignSelf: 'center'
//   },
//   Child1: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     backgroundColor: 'powderblue'
//   },
//   Child2: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     backgroundColor: 'skyblue'
//   },
//   Child3: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     backgroundColor: 'steelblue'
//   }
// });
//
// const Exercise3A = () => {
//   return (
//       <View style={{marginTop: 50, margin: 20}}>
//         <View style={styles.Parent}>
//           <View>
//             <Text style={styles.Child1}>Child One</Text>
//           </View>
//           <View>
//             <Text style={styles.Child2}>Child Two</Text>
//           </View>
//           <View>
//             <Text style={styles.Child3}>Child Three</Text>
//           </View>
//         </View>
//       </View>
//   )
// }
//
// export default Exercise3A;

// ======= EXERCISE 3B =======
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   Child1: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     backgroundColor: 'powderblue'
//   },
//   Child2: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     backgroundColor: 'skyblue'
//   },
//   Child3: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     backgroundColor: 'steelblue'
//   }
// });
//
// const Exercise3B = () => {
//   return (
//       <View style={{marginTop: 50, margin: 20}}>
//         <View style={styles.Parent}>
//           <View>
//             <Text style={styles.Child1}>Child One</Text>
//           </View>
//           <View>
//             <Text style={styles.Child2}>Child Two</Text>
//           </View>
//           <View>
//             <Text style={styles.Child3}>Child Three</Text>
//           </View>
//         </View>
//       </View>
//   )
// }
//
// export default Exercise3B;

// ======= EXERCISE 3C =======
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   Child1: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     backgroundColor: 'powderblue'
//   },
//   Child2: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     backgroundColor: 'skyblue'
//   },
//   Child3: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     backgroundColor: 'steelblue'
//   }
// });
//
// const Exercise3C = () => {
//   return (
//       <View style={{marginTop: 50, margin: 20}}>
//         <View style={styles.Parent}>
//           <View>
//             <Text style={[styles.Child1, {maxWidth: 90}]}>Child One</Text>
//           </View>
//           <View>
//             <Text style={styles.Child2}>Child Two</Text>
//           </View>
//           <View>
//             <Text style={[styles.Child3, {maxHeight: 120}]}>Child Three</Text>
//           </View>
//         </View>
//       </View>
//   )
// }
//
// export default Exercise3C;

// ======= EXERCISE 3D =======
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// });
//
// const Exercise3D = () => {
//   return (
//       <View style={[styles.Parent, {marginTop: 50}]}>
//           <View>
//             <Text style={[styles.Child, {backgroundColor: 'powderblue', flex:1}]}>Child One</Text>
//           </View>
//           <View>
//             <Text style={[styles.Child, {backgroundColor: 'skyblue', flex:2}]}>Child Two</Text>
//           </View>
//           <View>
//             <Text style={[styles.Child, {backgroundColor: 'steelblue', flex:3}]}>Child Three</Text>
//           </View>
//       </View>
//   )
// }
//
// export default Exercise3D;

// ======= EXERCISE 3E =======
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'column',
//     // justifyContent: 'flex-start',
//     // justifyContent: 'flex-end',
//     // justifyContent: 'space-around',
//     justifyContent: 'space-between',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// });
//
// const Exercise3E = () => {
//   return (
//       <View style={[styles.Parent, {marginTop: 50}]}>
//             <Text style={[styles.Child, {backgroundColor: 'powderblue'}]}>Child One</Text>
//             <Text style={[styles.Child, {backgroundColor: 'skyblue'}]}>Child Two</Text>
//             <Text style={[styles.Child, {backgroundColor: 'steelblue'}]}>Child Three</Text>
//       </View>
//   )
// }
//
// export default Exercise3E;

// ======= EXERCISE 4 =======
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Parent: {
      flexDirection: 'row',
      backgroundColor: 'whitesmoke',
      marginTop: 30,
      justifyContent: 'space-around',
      alignItems: 'center',
      flex: 1
  },
  Child: {
      width: 80,
      height: 80,
      textAlign: 'center',
      verticalAlign: 'middle'
  }
});

const Exercise4 = () => {
  return (
      <View style={[styles.Parent, {marginTop: 50}]}>
        <Text style={[styles.Child, {backgroundColor: 'skyblue'}]}>Square 1</Text>
        <Text style={[styles.Child, {backgroundColor: 'turquoise'}]}>Square 2</Text>
        <Text style={[styles.Child, {backgroundColor: 'red'}]}>Square 3</Text>
      </View>
  )
}

export default Exercise4;


