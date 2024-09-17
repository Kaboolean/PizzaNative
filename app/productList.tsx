import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from './_layout'; // Importez le type de paramètres que vous avez défini

// Typage de la navigation pour HomeScreen
type HomeScreenNavigationProp = StackNavigationProp<StackParamList, 'productList'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Typage de la navigation

  return (
    <Button
      title="View details"
      onPress={() => navigation.navigate('productDetails', { id: 0 })} // Passez l'ID
    />
  );
};

export default HomeScreen;
