import { StyleSheet } from "react-native";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 84,
    fontFamily: 'Inter'
  },
  primaryColor: {
    backgroundColor: "#1E6F9F",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 42,
    marginTop: 36,
  },
  input: {
    height: 54,
    width: 271,
    flex: 1,
    backgroundColor: "#262626",
    borderRadius: 6,
    fontSize: 16,
    padding: 16,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2,
  },
  buttonContent:  {
    color: '#fff',
    borderColor: '#fff',
    width: 20,
    height: 20,
    borderRadius: 20/2,
    borderWidth: 2,
    alignItems: 'center',
    alignContent: 'center'
  },
  countRow: {
    flexDirection: 'row',
  },
  status: {
    flexDirection: 'row',
    flex: 1
  },
  textOne: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold'
  },
  textTwo: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold'
  },
  count: {
    color: '#FFF',
    marginLeft: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    backgroundColor: '#262626',
    fontSize: 14
  }
});
