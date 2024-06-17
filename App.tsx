import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';

import {TabNavigator} from '~/navigations';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
