
import {Pressable, StyleSheet, Text} from "react-native"

export const Botao = ({tituloBotao}) => {
    return(
        <Pressable style={styles.botao}>
            <Text style = {styles.textoBotao}>
                {tituloBotao}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundcolor: '#00AAEE',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomLeftRadius: 10,
        paddingVertical: 10,
        width: '70%',
        alignItems: 'center'

    },
    textoBotao:{
        color:'#FFFFFF',
        fontSize: 16
    }
})