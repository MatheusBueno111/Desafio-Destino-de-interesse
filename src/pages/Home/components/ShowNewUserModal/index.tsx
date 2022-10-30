import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CloseButton, Content, Overlay } from './styles'

interface UserProps {
  user: {
    name: string
    email: string
    phone: string
    cpf: string
    city?: string
    country: string
    countryName: string | undefined
  }
}

export function ShowNewUserModal({ user }: UserProps) {
  const { name, email, phone, cpf, city, countryName } = user
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Informações Salvas</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <div>
          <ul>
            <li>Nome: {name}</li>
            <li>Email: {email}</li>
            <li>Telefone: {phone}</li>
            <li>CPF: {cpf}</li>
            <li>País: {countryName}</li>
            <li style={city ? {} : { display: 'none' }}>
              Cidade: {city || 'Não possui opções'}
            </li>
          </ul>
        </div>
      </Content>
    </Dialog.Portal>
  )
}
