import React, { useEffect, useState } from "react";
import { Button, Text, View } from 'react-native'
import api from "./services/api";

export default function App (){
  const [pessoa, setPessoa] = useState([])
  const [idPessoa, setID] = useState(1)

  const prox = () => setID(idPessoa + 1)
  const anter = () => setID(idPessoa - 1)

  useEffect( () => {
    api.get('/api/people/' +idPessoa).then((response) => {
      setPessoa(response.data)
      
    })
    }, [idPessoa] )
return(
  <View>
    <Text>Name:{pessoa.name}</Text>
    <Text>Gender: {pessoa?.gender}</Text>
    <Text>Height(cm): {pessoa?.height}</Text>
    <Button title="Next" disabled={idPessoa === 83} onPress={prox}/>
    <Button title="Previous" disabled={idPessoa === 1} onPress={anter}/>

  </View>
)}