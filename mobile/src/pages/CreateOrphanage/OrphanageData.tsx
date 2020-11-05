import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import api from '../../services/api';

interface OrphanageDataRouteParams {
  position: {
    latitude: number,
    longitude: number,
  }
}

export default function OrphanageData() {
  const [about, setAbout] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [instructions, setInstructions] = useState('');
  const [name, setName] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [whatsapp, setWhatsapp] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as OrphanageDataRouteParams

  async function handleCreateOrphanage() {
    const { latitude, longitude } = params.position;

    /* console.log({
      about,
      instructions,
      latitude,
      longitude,
      name,
      opening_hours,
      open_on_weekends,
    }); */

    const data = new FormData();

    data.append('about', about);
    data.append('instructions', instructions);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('name', name);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));
    data.append('whatsapp', whatsapp)

    images.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any);
    })

    await api.post('orphanages', data);

    navigation.navigate('OrphanagesMap');
  }

  async function handleSelectedImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      alert('Eita, precisamos de acesso às suas fotos...')
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    })

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImages([...images, image]);
  }

  function handleRemoveImage(i: number) {
    const currentFileImages = images.filter((image, index) => i === index ? null : image)
    const currentImages = previewImages.filter((image, index) => i === index ? null : image);

    setImages(currentFileImages)
    setPreviewImages(currentImages);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Formulário de Cadastro</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Sobre</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={about}
        onChangeText={setAbout}
      />

      <Text style={styles.label}>Whatsapp</Text>
      <TextInput
        style={styles.input}
        value={whatsapp}
        onChangeText={setWhatsapp}
      />

      <Text style={styles.label}>Fotos</Text>

      <View>
        {images.map((image, i) => {
          return (
            <View style={styles.uploadedImagesContainer}>
              <BorderlessButton style={styles.imageButton} onPress={() => handleRemoveImage(i)}>
                <Feather name="x" size={24} color="#ff669d" />
              </BorderlessButton>
              <Image
                key={image}
                source={{ uri: image }}
                style={styles.uploadedImage} />
            </View>
          )
        })}
      </View>

      <View style={styles.uploadedImagesContainer}>
        <TouchableOpacity style={styles.imagesInput} onPress={handleSelectedImages}>
          <Feather name="plus" size={24} color="#15B6D6" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Visitação</Text>

      <Text style={styles.label}>Instruções</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={instructions}
        onChangeText={setInstructions}
      />

      <Text style={styles.label}>Horario de visitas</Text>
      <TextInput
        style={styles.input}
        value={opening_hours}
        onChangeText={setOpeningHours}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Atende final de semana?</Text>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpenOnWeekends}
        />
      </View>

      <RectButton style={styles.nextButton} onPress={handleCreateOrphanage}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: 'rgb(92, 133, 153)',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: 'rgb(211, 226, 230)'
  },

  label: {
    color: 'rgb(143, 167, 179)',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
  },

  comment: {
    fontSize: 11,
    color: 'rgb(143, 167, 179)',
  },

  input: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderWidth: 1.4,
    borderColor: 'rgb(211, 226, 230)',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },

  uploadedImagesContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  uploadedImage: {
    width: 96,
    height: 96,
    borderRadius: 20,
    marginBottom: 32,
  },

  imageButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    top: 0,
    width: 50,
    height: 50,
    backgroundColor: 'rgb(255, 188, 212)',
    borderRadius: 20,
  },

  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: 'rgb(150, 210, 240)',
    borderWidth: 1.4,
    borderRadius: 20,
    width: 96,
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  nextButton: {
    backgroundColor: 'rgb(21, 195, 214)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: 'rgb(255, 255, 255)',
  }
})