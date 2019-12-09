import { routes as auth } from '../modules/auth'
import { routes as home } from '../pages/home'
import { routes as produtos } from '../pages/produtos'

export default [
  ...auth,
  ...home,
  ...produtos
]
