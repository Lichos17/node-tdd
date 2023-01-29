export class InvalidArgument extends Error {
  constructor (public arg: string) {
    super(`Error Argument: ${arg}`)
  }
}
