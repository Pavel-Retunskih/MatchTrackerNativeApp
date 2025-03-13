import {MatchFilter} from "../../../app/model/slice/appSlice";

export type DropdownItem = {
  label: string;
  value: MatchFilter;
}
export const data: DropdownItem[] = [
  {label: 'Все статусы', value: 'All',},
  {label: 'Live', value: 'Ongoing'},
  {label: 'Finished', value: 'Finished'},
  {label: 'Match preparing', value: 'Scheduled'},
]