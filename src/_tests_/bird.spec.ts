import { Bird, Eagle, Penguin } from '../models/bird-model'

describe('Bird', () => {
  test('should Fly', () => {
    const bird = new Bird({
      name: 'Bird',
      age: 30,
      origen: 'North America'
    })

    expect(bird.fly()).toEqual('Bird')
  })

  test('should Fly', () => {
    const eagle = new Eagle({
      name: 'Eagle',
      age: 30,
      origen: 'North America'
    })

    expect(eagle.fly()).toEqual('Eagle')
  })

  test('should not fly', () => {
    const pengiun = new Penguin({
      name: 'Pengiun',
      age: 30,
      origen: 'North America'
    })

    expect(pengiun.fly()).toEqual(new Error("I can't fly"))
  })

  test('should walk and swim Pengiun', () => {
    const pengiun = new Penguin({
      name: 'Pengiun',
      age: 30,
      origen: 'North America'
    })

    expect(pengiun.walk()).toEqual('I can walk')
    expect(pengiun.swim()).toEqual('I can swim')
  })
})
