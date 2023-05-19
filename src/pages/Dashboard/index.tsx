import { useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TransactionExpenses } from '../../components/TransactionExpenses'
import { Container, Transactions } from './styles'

import { EmployeesDTO } from '../../storage/EmployeesDTO'
import { FlatList } from 'react-native'

export function Dashboard() {
//name armazena o estado e setname captura os dados quando for digitado
const [name, setName] = useState('')
const [occupation, setOccupation] = useState('')
const [salary, setSalary] = useState('')
const [employees, setEmployees ] = useState<EmployeesDTO[]>([])


function handleAddNewEmployee(){
  const data = {
    id: String(new Date().getTime()),
    name: String(name),
    occupation: String(occupation),
    salary: parseFloat(salary)
  }
  setEmployees([...employees, data])

  console.log(data)

  setName('')
  setOccupation('')
  setSalary('')
}

  return (
    <Container
    >
      <Header title='Cadastro de Funcionários' />

      <Input
        placeholder='Nome'
        placeholderTextColor='#363F5F'
        value={name}
        onChangeText={name => setName(name)}
      />

      <Input
        placeholder='Função'
        placeholderTextColor='#363F5F'
        value={occupation}
        onChangeText={occupation => setOccupation(occupation)}
      />

      <Input
        placeholder='Salário'
        placeholderTextColor='#363F5F'
        value={salary}
        onChangeText={salary => setSalary(salary)}
      />

      <Button
        title='Adicionar'
        onPress={handleAddNewEmployee}
      />

      <Transactions>
        <FlatList 
        data = {employees}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TransactionExpenses
            data = {item}
            />
        )}
        showsVerticalScrollIndicator = {false}
        />
      </Transactions>

    </Container>
  )
}

