import {createSlice, SliceCaseReducers, SliceSelectors} from "@reduxjs/toolkit";
import {MatchStatus} from "../../../entities/Match/model/type";

export type MatchFilter = MatchStatus | 'All'
type AppState = {
  filter: MatchFilter
}

export const appSlice = createSlice<AppState, SliceCaseReducers<AppState>, string, SliceSelectors<AppState>>({
  initialState: {
    filter: 'All'
  },
  name: 'AppSlice',
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload
    }
  }
})

export const {changeFilter} = appSlice.actions