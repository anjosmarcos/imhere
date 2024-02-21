import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export function Home() {
    function handleParticipantAdd() {
        console.log('Adicionar participante')
    }

    return (
        <View style={styles.container}>
            <Text key="1" style={styles.eventName}>
                Nome do Evento
            </Text>
            <Text key="2" style={styles.eventDate}>
                Quarta-feira, 2 de Fevereiro de 2024
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome do participante"
                    placeholderTextColor={'#6B6B6B'}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
