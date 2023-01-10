import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {startTransition, useContext, useState} from 'react';
import Style from '../Style';
import {todoContext} from '../Context/TodoStorage';
import Helper from '../helper/Helper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ToDo = () => {
  const {titles, settitles} = useContext(todoContext);

  const [title, settitle] = useState([]);

  const getRandomId = () => {
    return Math.floor(Math.random() * 100);
  };

  const add = () => {
    settitles([...titles, title]);
    Helper.set([]);
    getRandomId();
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
      <View style={Style.titleViewBox}>
        <ScrollView>
          <View style={Style.titleView}>
            {titles.map((item, index) => {
              return (
                <View
                  key={index}
                  onPress={() => star()}
                  style={Style.touchBox}>
                  <Text style={Style.titleText}>{item}</Text>
                  <TouchableOpacity><FontAwesomeIcon icon={faStar} size={22} color={'orange'}/></TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ToDo;
