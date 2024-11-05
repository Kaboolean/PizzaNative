import React, { useEffect } from 'react';
import { Stack, useRouter } from 'expo-router'; // Utiliser Stack d'expo-router pour la navigation et useRouter pour rediriger
import { Provider } from 'react-redux'; // Importer Provider de Redux
import { store } from '@/store/store'; // Importer le store Redux

const Layout = () => {
  const router = useRouter(); // Utiliser le hook useRouter pour gérer la redirection

  useEffect(() => {
    // Rediriger automatiquement vers pizzaListScreen à l'ouverture de l'app
    router.replace('/admin');
  }, []);

  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
};

export default Layout;
