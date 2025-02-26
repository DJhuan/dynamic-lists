import { TouchableOpacity, StyleSheet } from "react-native";
import LitterSvg from "../lista/components/LitterSvg";

interface LitterButton {
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function LitterButton({ onPress, onLongPress }: LitterButton) {
  return (
    <TouchableOpacity
      style={styles.cancelButton}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <LitterSvg />
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
    boxShadow: "inset 2 2 3 #eb6a6a, inset -1 -1 3 #961313",
  },
});
