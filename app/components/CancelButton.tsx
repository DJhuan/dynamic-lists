import { TouchableOpacity, StyleSheet } from "react-native";
import CancelSvg from "./CancelSvg";

interface CancelButtonProps {
  onPress: () => void;
}

export default function CancelButton({ onPress }: CancelButtonProps) {
  return (
    <TouchableOpacity style={styles.cancelButton} onPressIn={onPress}>
      <CancelSvg />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cancelButton: {
    backgroundColor: "#FF4747",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    width: 60,
    height: 60,
  },
});
