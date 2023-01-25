import { Food } from '../models/food-model'

describe('Classes', () => {
  it('Class Food', () => {
    const food = new Food('name', 'description', 50)

    expect(food.getName()).toEqual('name')
    expect(food.getDescription()).toEqual('description')
    expect(food.getPrice()).toEqual(50)
  })
})
