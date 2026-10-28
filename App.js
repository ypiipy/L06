import React, {useState} from 'react';
import {ScrollView, Text, Image, Button, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
    const [answer1, setAnswer1] = useState('Dog');
    const [answer2, setAnswer2] = useState('Cat');
    const [answer3, setAnswer3] = useState('Lion');

    const submitAnswers = () => {
        let score = 0;

        if (answer1 === 'Cat') {
            score = score + 1;
        }

        if (answer2 === 'Dog') {
            score = score + 1;
        }

        if (answer3 === 'Elephant') {
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
            <Text>Animal Quiz</Text>

            <Text>Question 1: What animal is in this picture?</Text>

            <Image
                source={require('./img/cat.jpg')}
                style={{ width: 300, height: 200 }}
            />

            <Picker onValueChange={(value) => setAnswer1(value)}>
                <Picker.Item label="Dog" value="Dog" />
                <Picker.Item label="Cat" value="Cat" />
                <Picker.Item label="Rabbit" value="Rabbit" />
            </Picker>

            <Text>Question 2: What animal is in this picture?</Text>

            <Image
                source={require('./img/dog.jpg')}
                style={{ width: 300, height: 200 }}
            />

            <Picker onValueChange={(value) => setAnswer2(value)}>
                <Picker.Item label="Cat" value="Cat" />
                <Picker.Item label="Horse" value="Horse" />
                <Picker.Item label="Dog" value="Dog" />
            </Picker>

            <Text>Question 3: What animal is in this picture?</Text>

            <Image
                source={require('./img/elephant.jpg')}
                style={{ width: 300, height: 200 }}
            />

            <Picker onValueChange={(value) => setAnswer3(value)}>
                <Picker.Item label="Lion" value="Lion" />
                <Picker.Item label="Elephant" value="Elephant" />
                <Picker.Item label="Giraffe" value="Giraffe" />
            </Picker>

            <Button
                title="Submit Answers"
                onPress={submitAnswers}
            />
        </ScrollView>
    );
};

export default App;