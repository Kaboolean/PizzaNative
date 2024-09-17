import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProductDetailsScreen = () => {

  // Récupérer les informations de la route
  const route = useRoute();
  
  // Récupération du paramètre 'id' depuis la navigation
  const { id } = route.params as { id: number }; // Correction ici : 'id' doit correspondre à ce qui est passé

  return (
    <View>
      <Text>Id du produit : {id}</Text> {/* Affichage de l'ID du produit */}
    </View>
  );
}

export default ProductDetailsScreen;