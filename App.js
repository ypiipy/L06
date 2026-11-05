import React, {useState} from 'react';
import {ScrollView, Text, Button, Alert} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome6';
import Question from './components/Question';

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

        let feedback = '';

        if (score === 3) {
            feedback = 'Well done! You got every answer correct!';
        } else if (score === 2) {
            feedback = 'Good job! You almost got them all!';
        } else {
            feedback = 'You SUCK';
        }

        Alert.alert(
            'Quiz Results',
            'You got ' + score + ' out of 3 answers correct!\n\n' + feedback
        );
    };

    return (
        <ScrollView>
            <Text></Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                <Icon name="gamepad" size={24} color="purple" />
                {' '}Pokemon Quiz
            </Text>

            <Question
                number={1}
                image="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png"
                option1="Charmander"
                option2="Pikachu"
                option3="Squirtle"
                onValueChange={(value) => setAnswer1(value)}
                answer="How do you not know this is Pikachu"
            />

            <Question
                number={2}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMinhKzVmPip5tqeJepk2Wc7WPy8XSh_SYThjGC8zSdw&s"
                option1="Pikachu"
                option2="Squirtle"
                option3="Bulbasaur"
                onValueChange={(value) => setAnswer2(value)}
                answer="Bulbasaur"
            />

            <Question
                number={3}
                image="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png"
                option1="Bulbasaur"
                option2="Charmander"
                option3="Pikachu"
                onValueChange={(value) => setAnswer3(value)}
                answer="Charmander"
            />

            <Button
                title="Submit Answers"
                onPress={submitAnswers}
            />
        </ScrollView>
    );
};

export default App;