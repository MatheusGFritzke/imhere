import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import { styles } from './styles';
import { Participant } from '../components/Participants';
import { useState } from 'react';

export function Home() {

  const [participants, setParticipants] = useState<string[]>([])
  const [newParticipantName, setNewParticipantName] = useState('')

  function handleParticipantAdd() {
    if(participants?.includes(newParticipantName)) {
      return Alert.alert("Participante já existe!", "Deseja adicionar novamente?")
    }
    
    setParticipants(participants => [...participants, newParticipantName])
    setNewParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => setParticipants(participants => participants.filter(participant => participant !== name))
      }
    ])

  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setNewParticipantName}
          value={newParticipantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants.sort((a, b) => a.localeCompare(b))}
        keyExtractor={(item) => item}
        renderItem={({ item: name }) => (
          <Participant
            key={name}
            name={name}
            onRemove={() => handleParticipantRemove(name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  )
}