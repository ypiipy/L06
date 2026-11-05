import React, { useState } from 'react';
import {ScrollView, Text, Image, Button, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
    const [answer1, setAnswer1] = useState('Charmander');
    const [answer2, setAnswer2] = useState('Pikachu');
    const [answer3, setAnswer3] = useState('Bulbasaur');

    const submitAnswers = () => {
        let score = 0;

        if (answer1 === 'Pikachu') {
            score = score + 1;
        }

        if (answer2 === 'Bulbasaur') {
            score = score + 1;
        }

        if (answer3 === 'Charmander') {
            score = score + 1;
        }

        Alert.alert(
            'Quiz Results',
            'You got ' + score + ' out of 3 answers correct!'
        );
    };

    return (
        <ScrollView>
            <Text></Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                Pokémon Quiz
            </Text>

            <Text>Question 1: Who is this Pokémon?</Text>

            <Image
                source={{
                    uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png',
                }}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
            />

            <Picker onValueChange={(value) => setAnswer1(value)}>
                <Picker.Item label="Charmander" value="Charmander" />
                <Picker.Item label="Pikachu" value="Pikachu" />
                <Picker.Item label="Squirtle" value="Squirtle" />
            </Picker>

            <Text>Question 2: Who is this Pokémon?</Text>

            <Image
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMinhKzVmPip5tqeJepk2Wc7WPy8XSh_SYThjGC8zSdw&s',
                }}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
            />

            <Picker onValueChange={(value) => setAnswer2(value)}>
                <Picker.Item label="Pikachu" value="Pikachu" />
                <Picker.Item label="Squirtle" value="Squirtle" />
                <Picker.Item label="Bulbasaur" value="Bulbasaur" />
            </Picker>

            <Text>Question 3: Who is this Pokémon?</Text>

            <Image
                source={{
                    uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png',
                }}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
            />

            <Picker onValueChange={(value) => setAnswer3(value)}>
                <Picker.Item label="Bulbasaur" value="Bulbasaur" />
                <Picker.Item label="Charmander" value="Charmander" />
                <Picker.Item label="Pikachu" value="Pikachu" />
            </Picker>

            <Button
                title="Submit Answers"
                onPress={submitAnswers}
            />
        </ScrollView>
    );
};

export default App;