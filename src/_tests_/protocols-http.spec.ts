import { InvalidArgument } from '../errors/invalid-arg'
import { UrlLogin } from '../protocols/protocols-http'

describe('Protocols Http and Querys', () => {
  test('Url login', () => {
    const url = 'http://localhost:3000/login'
    const parsedUrl = UrlLogin.parseUrl(url)
    expect(parsedUrl.href).toBe(url)
    expect(parsedUrl.port).toBe('3000')
  })

  test('Response Query', () => {
    const url = 'http://localhost:3000/login?user=user&password=password'
    const parsedUrl = UrlLogin.parseUrl(url)
    const expectAuth = {
      user: 'user',
      password: 'password'
    }
    expect(parsedUrl.query).toEqual(expectAuth)
  })

  test('Invalid Url', () => {
    function expectError (): void {
      UrlLogin.parseUrl('')
    }
    expect(expectError).toThrowError(new InvalidArgument(''))
  })
})
