export type InputType = 'text' | 'password'
export type ValidationFunction = (value: string) => boolean

export type FormControl = {
  name: string
  iconName?: string
  type?: InputType
  placeholder?: string,
  isValid: boolean,
  errorMessage: string,
  validate?: ValidationFunction
}