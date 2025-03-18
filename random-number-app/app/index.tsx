import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function App() {
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [randomNumber, setRandomNumber] = useState<number | null>(null);

    const generateRandomNumber = () => {
        const minValue = parseInt(min, 10);
        const maxValue = parseInt(max, 10);

        if (!isNaN(minValue) && !isNaN(maxValue) && minValue < maxValue) {
            const number = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            setRandomNumber(number);
        } else {
            setRandomNumber(null);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/logo2.png')} style={styles.logo} />
            <Text style={styles.title}>Gerador de Números Aleatórios</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Valor mínimo"
                keyboardType="numeric"
                value={min}
                onChangeText={setMin}
            />
            
            <TextInput
                style={styles.input}
                placeholder="Valor máximo"
                keyboardType="numeric"
                value={max}
                onChangeText={setMax}
            />
            
            <Button title="Gerar Número" onPress={generateRandomNumber} color="#1E4D2B" />
            
            {randomNumber !== null && (
                <Text style={styles.result}>Número Gerado: {randomNumber}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E4D2B',
        marginBottom: 15,
    },
    input: {
        width: '80%',
        height: 50,
        borderWidth: 2,
        borderColor: '#1E4D2B',
        borderRadius: 10,
        paddingLeft: 15,
        marginBottom: 15,
        backgroundColor: '#FFF',
        fontSize: 16,
    },
    result: {
        fontSize: 20,
        marginTop: 15,
        fontWeight: 'bold',
        color: '#1E4D2B',
    },
});
