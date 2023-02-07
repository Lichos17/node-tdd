import { Team } from '../models/team-model'

describe('Team Class', () => {
  it('Position', () => {
    const team = new Team()
    const position = {
      name: 'GoalKeeper',
      tShirt: 1,
      skills: ['Kick hard', 'Run Fast', 'Jump high']
    }

    expect(team.position(position.name, position.tShirt, position.skills)).toEqual(['GoalKeeper', 1, ['Kick hard', 'Run Fast', 'Jump high']])
  })

  it('Position', () => {
    const team = new Team()
    const position = {
      name: 'Center MidField',
      tShirt: 2,
      skills: ['Kick hard', 'Run Fast', 'Jump high']
    }

    expect(team.position(position.name, position.tShirt, position.skills)).toEqual(['Center MidField', 2, ['Kick hard', 'Run Fast', 'Jump high']])
  })

  it('Soccer Play', () => {
    const soccerPlay = new Team()
    expect(soccerPlay.attacker('')).toBe('attacker')
  })
})
