
import { Alert,  TouchableOpacity } from "react-native";
import Container from "../container/Container";
import Image from "../image/Image";

type Props = {
    image: string;
    name: string;
}

const Character = ({ image, name }: Props) => {
    const handlePress = () => {
        Alert.alert(name)
    }
    return (<TouchableOpacity onPress={handlePress}>
    <Image source={{ uri: image }} width={100} height={100} rounded="full" />
    
    </TouchableOpacity>)
}

export default Character