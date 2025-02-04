import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  appbar: {
    height: 60,
    backgroundColor: "#6A80B9", 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '600',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#C4C4C4",
    fontSize: 16,
    paddingVertical: 8,
    marginBottom: 20,
  },
  LoginInput: {
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: '#FFF6B3',
    height: 50,
    paddingLeft: 20,
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    width: '60%',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 16,
    width: '50%',
    alignSelf: 'center',
  },
  bottomRightWidget: {
    position: 'absolute',
    bottom: 20,
    right: 20, 
    backgroundColor: '##F6F6F6',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  divider: {
    height: 1, 
    backgroundColor: '#E8DBDB', 
    marginHorizontal: 30, 
  },
  SearchBarContainer:{
    flexDirection: 'row', 
    alignItems: 'center', 
    marginRight: 10,
  },
  SearchField: {
    height: 40,
    borderRadius: 8,
    paddingLeft: 10,
    color: 'white',
    width: 250,
    borderWidth: 1,
    borderColor: 'white',
  }
});