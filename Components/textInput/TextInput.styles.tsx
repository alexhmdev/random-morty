import styled from 'styled-components/native'
import { type TextInputProps } from './TextInput'

export const StyledTextInput = styled.TextInput`
    width: ${({ width }: TextInputProps) => width ?? '100%'};
    height: ${({ height }: TextInputProps) => height ?? '100%'};
`
