import { Button } from "@rneui/themed";
import { COLORS } from "../../../../constants";

export default function SignUpButton() {

    return <Button
        title='CONTINUE'
        containerStyle={{
            borderRadius: 25,
            shadowColor: COLORS.secondary,
            elevation: 5,
            marginBottom: 30
        }}
        buttonStyle={{
            backgroundColor: COLORS.secondary,
            width: 250,
            height: 70,
            borderRadius: 25,
        }}
        titleStyle={{
            fontFamily: 'Jost_700Bold',
            fontSize: 20,
            color: COLORS.primary,
        }}
    />

}