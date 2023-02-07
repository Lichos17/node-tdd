import { VehicleHelper } from '../helpers/vehicle-model-helper'
import { VehicleModel } from '../models/vehicle-model'

describe('Classes', () => {
  it('Class VehicleModle', () => {
    const vehicleModel = new VehicleModel({
      name: 'Nissan',
      model: 'DXT',
      year: 2020,
      price: 25,
      inventory: true
    })

    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DXT')
    expect(vehicleModel.getYear()).toEqual(2020)
    expect(vehicleModel.getPrice()).toEqual(25)
    expect(vehicleModel.getInventory()).toBeTruthy()
  })

  it('Vehicle Helper', () => {
    const vehicleHelper = new VehicleHelper()
    expect(vehicleHelper).toEqual(vehicleHelper)
  })
})
