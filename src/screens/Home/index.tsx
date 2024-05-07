import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { styles } from './styles';
import { Participant } from '../components/Participants';

export function Home() {

  function handleParticipantAdd() {
    //
  }

  function handleParticipantRemove(name: string) {
    console.log("🥶 --> handleParticipantRemove --> name:", name)
  }

  const participants = [
    'Matheus',
    'Lucas',
    'Maxciel',
    'Juliana',
    'zezinho',
    'amigo',
    'zezo',
    'beto',
    'helena'
  ];

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
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
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