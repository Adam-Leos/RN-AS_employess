import { StyleSheet } from 'react-native';

let Styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    padding: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd'
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  position: {
    fontSize: 20,
    color: '#656565'
  }
});

module.exports = Styles;
