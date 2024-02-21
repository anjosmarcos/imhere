import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant"
import { useState } from "react"

export function Home() {
    const [ participants, setParticipants] = useState<string[]>([])
    const [ participantsNames, setParticipantsNames] = useState('')

    // const participants = ['João']

    function handleParticipantAdd() {
        if(participants.includes(participantsNames)) {
            return Alert.alert("Participante existe", "Participante já adicionado")
        }

        setParticipants( prevState => [...prevState, participantsNames])
        setParticipantsNames('')

    }

    function handleParticipantRemove(name: string) {

        // console.log(participants.filter(participant => participant !== name))


        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress:() => setParticipants(prevState => participants.filter(participant => participant !== name))


            },
            {
                text: 'Não',
                onPress: () => null,
                style: 'cancel'
            }
        ])
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
                    onChangeText={setParticipants} // setParticipants names from input
                    value={participantsNames} // setParticipants names from input
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            {/* <ScrollView showsVerticalScrollIndicator={false}>
                {participants.map(participant => (
                    <Participant
                        key={participant}
                        name={participant}
                        onRemove={() => handleParticipantRemove("Marcos")} />
                ))
                }
            </ScrollView> */}

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)} 
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listInput} >
                        Ninguém chegou no evento ainda? Adicione participantes na sua lista de presença!
                    </Text>
                )}
            />

        </View>
    )
}

