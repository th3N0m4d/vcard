import Types from '@/store/types'

const toggleSideBar = ({ commit }: { commit: Function }) => [
  commit(Types.TOGGLE_SIDEBAR),
]

export default {
  toggleSideBar,
}
