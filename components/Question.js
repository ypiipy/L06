import React from 'react';
import { View, Text, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Question = ({number, image, option1, option2, option3, onValueChange}) => {
    return (
        <View>
            <Text style={{ fontSize: 18 }}>
                Question {number}: Who's that Pokemon?
            </Text>

            <Image
                source={{uri: image}}
                style={{width: 200, height: 200}}
            />

            <Picker onValueChange={onValueChange}>
                <Picker.Item label={option1} value={option1} />
                <Picker.Item label={option2} value={option2} />
                <Picker.Item label={option3} value={option3} />
            </Picker>
        </View>
    );
};

export default Question;