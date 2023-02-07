import { ITeam, ISoccerPlay } from '../interfaces/ITeam.interface'

export class Team implements ITeam, ISoccerPlay {
  position (name: string, tShirt: number, skills: any[]): any {
    return [name, tShirt, skills]
  }

  attacker (name: string): any {
    name = 'attacker'
    return name
  }
}
