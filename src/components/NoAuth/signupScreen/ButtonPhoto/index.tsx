import { Button } from "@rneui/themed";
import { COLORS } from "../../../../constants";

export default function SignUpButtonPhoto() {
  return (
    <Button
      title="Photo"
      containerStyle={{
        marginBottom: 30,
      }}
      buttonStyle={{
        backgroundColor: COLORS.trans,
        width: 300,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.secondary,
      }}
      titleStyle={{
        fontFamily: "Jost_700Bold",
        fontSize: 16,
        color: COLORS.gray,
      }}
    />
  );
}
