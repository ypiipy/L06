import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Question = ({number, image, options, onValueChange, answer}) => {
    return (
        <View>
            <Text style={{fontSize: 18}}>
                Question {number}: Who's that Pokemon?
            </Text>

            <TouchableOpacity onPress={() => Alert.alert('Answer', 'The answer is ' + answer)}>
                <Image source={{uri: image}}
                       style={{width: 200, height: 200}}/>
                </TouchableOpacity>

            <Picker onValueChange={onValueChange}>
                <Picker.Item label={options[0]} value={options[0]} />
                <Picker.Item label={options[1]} value={options[1]} />
                <Picker.Item label={options[2]} value={options[2]} />
                <Picker.Item label={options[3]} value={options[3]} />
            </Picker>
        </View>
    );
};

export default Question;