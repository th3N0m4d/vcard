import Types from '@/store/types'
import { State } from '@/store/state'

export const toggleSideBar = (state: State) => {
  state.isSideBarOpen = !state.isSideBarOpen
}

export default {
  [Types.TOGGLE_SIDEBAR]: toggleSideBar,
}
