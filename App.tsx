import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/app/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text>Hola</Text>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
