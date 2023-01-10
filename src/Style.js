import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  top: {
    flexDirection:'column',
    alignItems:'center',
  },
  Inputbox: {
    flexDirection:'row',
    marginHorizontal:20,
    marginTop:20
  },
  input: {
    fontSize:25,
    borderWidth:1,
    borderColor:'grey',
    width:'100%',
    borderRadius:20,
    paddingLeft:15
  },
  addButton: {
    width:110,
    height:45,
    backgroundColor:'#03A4E7',
    paddingHorizontal:20,
    paddingVertical:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30
  },
  buttontext: {
    fontSize:20,
    fontWeight:'500',
    justifyContent:'flex-end',
    color:'white'
  },
  buttonBox: {
    paddingTop:15,
  }
});
