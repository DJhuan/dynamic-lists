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
  },
});
