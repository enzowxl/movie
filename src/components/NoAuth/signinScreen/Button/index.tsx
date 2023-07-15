import { Button } from "@rneui/themed";
import { COLORS } from "../../../../constants";

export default function SignInButton() {
  return (
    <Button
      title="GO"
      containerStyle={{
        borderRadius: 25,
        shadowColor: COLORS.secondary,
        elevation: 5,
        marginBottom: 30,
      }}
      buttonStyle={{
        backgroundColor: COLORS.secondary,
        width: 250,
        height: 70,
        borderRadius: 25,
      }}
      titleStyle={{
        fontFamily: "Jost_700Bold",
        fontSize: 20,
        color: COLORS.primary,
      }}
    />
  );
}
