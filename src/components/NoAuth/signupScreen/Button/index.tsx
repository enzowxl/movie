import { useContext } from 'react'
import { Button } from "@rneui/themed";
import { COLORS } from "../../../../constants";
import { AuthContext } from "../../../../provider";
import { UserSignUpProps } from '../../../../types/types';

export default function SignUpButton({ username, email, password, confirmPassword }: UserSignUpProps) {

  const { signUp } = useContext(AuthContext)

  return (
    <Button
      onPress={() => signUp(
        {
          username,
          email,
          password,
          confirmPassword
        }
      )
      }
      title="CONTINUE"
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
