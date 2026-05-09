import { TextInput, View, Text, StyleSheet, KeyboardTypeOptions } from "react-native";

type Props ={
    type?: "text" | "number";
    placeholder: string;
    value: string;
    onChange: (text: string) => void;
}

export default function CustomInput({type = "text", placeholder, value, onChange}:Props){
        const keyboardType: KeyboardTypeOptions =
        type === "number" ? 'number-pad' :
        'default'
    
    return(
        <View>
            <View style={styles.inputContainer}>
                <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                style={styles.input}
                keyboardType={keyboardType}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        marginTop: 10,
        borderWidth:1,
        borderColor:'black',
        backgroundColor: 'white'
    },

    input:{
        paddingVertical:10,
    }
})