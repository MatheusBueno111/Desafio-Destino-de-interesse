import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme['grey-800']};
  color: ${({ theme }) => theme['green-300']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  gap: 1rem;

  div {
    display: flex;
    margin-top: 1.5rem;

    ul {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 1rem;
      list-style: none;
    }

    li {
      display: flex;

      font-weight: 700;
      padding: 0.5rem;
      background-color: ${({ theme }) => theme['grey-900']};
      color: ${({ theme }) => theme['grey-100']};
      border-radius: 0.375rem;
    }
  }
`
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme['grey-500']};

  svg {
    color: ${({ theme }) => theme['green-300']};
    :hover {
      color: ${({ theme }) => theme['green-500']};
    }
  }
`
