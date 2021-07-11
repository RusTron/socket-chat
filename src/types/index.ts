export interface StateType {
  ourName: string,
  messages: Array<object>,
  notifications: Array<object>,
  loginStatus: boolean,
  typing: object | null,
}
