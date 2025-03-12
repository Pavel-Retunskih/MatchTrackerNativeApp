import {Player} from "../../Player/model/type";

export type Team = {
  name: string
  players: Player[]
  points: number
  place: number
  total_kills: number
}