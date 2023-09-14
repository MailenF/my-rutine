interface ErrorMessage {
[key: string]: string;
}

const errorMessages: ErrorMessage = {
  required: 'Este campo es requerido.',
  pattern: 'Email debe ser valido',
  minlength: 'Este campo debe tener al menos 5 caracteres.'
}

export function validatorErrorMessage(validatorName: string): string  {
  console.log(validatorName)
  return errorMessages[validatorName] ?? '';
}
