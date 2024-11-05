import axios from "axios";
import { Button, View } from "react-native";

type Pizza = {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
}

const AdminPage = () => {

    const GetPizzas = async () => {
        const url = "http://localhost:3000/pizzas";
        try {
            const response = await axios.get<Pizza[]>(url);
            console.log(response.data); // Print response
        }
        catch (error) {
            console.log(error);
        }
    }
    
    const AddPizza = async () => {
        const data = {
            name: "ma pizza",
            description: "voici ma pizza",
            price: 3,
            image_url: "",
        }
        const url = "http://localhost:3000/pizzas";
        try {
            const response = await axios.post<Pizza>(url, data);
            console.log(response.data); // Print response
        }
        catch (error) {
            console.log(error);
        }
    }

    const Login = async () => {
        const response = await axios.post("http://localhost:3000/login", { username: "admin1", password: "password3" });
        console.log(response.data);
    }

    return (
    <View>
        <Button
            onPress={Login}
            title="Login"
        ></Button>
        <Button
            onPress={GetPizzas}
            title="Get all pizzas">
        </Button>
        <Button
            onPress={AddPizza}
            title="Add pizza"
        >
        </Button>
    </View>
    );
};

export default AdminPage;
