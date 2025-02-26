import { TouchableOpacity, StyleSheet } from "react-native";
import CheckSvg from "./CheckSvg";

interface ConfirmButtonProps {
  onPress: () => void;
}

export default function ConfirmButton({ onPress }: ConfirmButtonProps) {
  return (
    <TouchableOpacity style={styles.confirmButton} onPressIn={onPress}>
      <CheckSvg />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  confirmButton: {
    backgroundColor: "#67E937",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    width: 80,
    height: 80,
    boxShadow: "inset 2 2 3 #83f05b, inset -1 -1 3 #2c6118",
  },
});
