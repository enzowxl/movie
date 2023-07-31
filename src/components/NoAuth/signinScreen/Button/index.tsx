import { useContext } from 'react'
import { Button } from "@rneui/themed";
import { COLORS } from "../../../../constants";
import { UserSignInProps } from '../../../../types/types';
import { AuthContext } from "../../../../provider";

export default function SignInButton({ email, password }: UserSignInProps) {

  const { signIn } = useContext(AuthContext)

  return (
    <Button
      title="GO"
      onPress={() => signIn(
        {
          email,
          password,
        }
      )
      }
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