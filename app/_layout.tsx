import React from 'react';
import { Stack } from 'expo-router'; // Utiliser Stack d'expo-router pour gérer la navigation
import { Provider } from 'react-redux'; // Importer Provider de Redux
import { store } from '@/store/store'; // Importer le store Redux

const Layout = () => {
  return (
    // Fournir l'accès au store Redux à toute l'application
    <Provider store={store}>
      {/* Utiliser Stack d'expo-router */}
      <Stack />
    </Provider>
  );
};

export default Layout;
