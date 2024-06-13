import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {TabNavigator} from '~/navigations';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;
