
//Navigation
npm i @react-navigation/native

npm i react-native-screens react-native-safe-area-context

npm i @react-navigation/stack

npm i react-native-gesture-handler

npm i @react-navigation/bottom-tabs

//snippets: rnfa

//link to font file:
    react-native link

npm i --save react-native-vector-icons

Edit android/settings.gradle:
    + include ':react-native-vector-icons'
    + project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
