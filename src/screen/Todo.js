import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import Style from '../Style';
import {todoContext} from '../Context/TodoStorage';
import Helper from '../helper/Helper';

const ToDo = () => {
  const {titles,settitles} = useContext(todoContext);


  const [title, settitle] = useState([]);


  const getRandomId = () => {
    return Math.floor(Math.random() * 100);
  };
  const add = () => {
    settitles([...titles,title]);
    Helper.set([]);
    getRandomId();
  };


  console.log(titles);
  const Box = ({item}) => {
    <View>
      <Text>{item}</Text>
    </View>;
  };

  return (
    <View style={Style.container}>
      <View style={Style.top}>
        <View style={Style.Inputbox}>
          <TextInput
            placeholder="Type Here"
            style={Style.input}
            onChangeText={settitle}
            value={title}
          />
        </View>
        <View style={Style.buttonBox}>
          <TouchableOpacity style={Style.addButton} onPress={() => add()}>
            <Text style={Style.buttontext}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList />
      </View>
    </View>
  );
};

export default ToDo;
