import { VehicleModel } from '../models/vehicle-model'

describe('Classes', () => {
  it('Class VehicleModle', () => {
    const vehicleModel = new VehicleModel('Nissan', 'DXT', 2020)

    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DXT')
    expect(vehicleModel.getYear()).toEqual(2020)
  })
})
