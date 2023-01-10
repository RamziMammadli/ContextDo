import AsyncStorage from '@react-native-async-storage/async-storage';

export default todoStorage = {
  set: async title => {
    try {
      await AsyncStorage.setItem('title', JSON.stringify(title));
    } catch (e) {}
  },
  get: async () => {
    let data = await AsyncStorage.getItem('title');
    if (data != null) return JSON.parse(data);
    else return [];
  },
};
