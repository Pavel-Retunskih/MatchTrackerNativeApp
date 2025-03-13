import {Dropdown} from "../../../shared/dropdown/dropdown";
import {changeFilter, MatchFilter} from "../../../app/model/slice/appSlice";
import {useAppDispatch} from "../../../app/model/hooks/hooks";
import {data, DropdownItem} from "../model/MatchesFilterDropdown.model";


export const MatchesFilterDropdown = () => {
  const dispatch = useAppDispatch();

  const handleChangeFilter = (item: DropdownItem) => {
    dispatch(changeFilter(item.value))
  }

  return <Dropdown<MatchFilter> data={data} defaultItem={data[0]} onChange={handleChangeFilter}/>
}