import { Food } from '../models/food-model'

describe('Classes', () => {
  it('Class Food', () => {
    const food = new Food({ name: 'name', description: 'description', price: 50, inventory: 10 })

    expect(food.getName()).toEqual('name')
    expect(food.getDescription()).toEqual('description')
    expect(food.getPrice()).toEqual(50)
    expect(food.getInventory()).toEqual(10)
  })
})
