export interface IState{
  [key:string]:any
}
export type Listener = (state: IState) => Promise<void>;
export interface IStateManager{
  state:IState
  listeners:Listener[]

  setState(newState:IState):Promise<void>

  getState():IState

  subscribe(listener:Listener):()=>Promise<void>
}

export default class StateManager implements IStateManager {
  state: IState;
  listeners: ((state: IState) => Promise<void>)[];

  constructor () {
    this.state = {}
    this.listeners = []
  }

  public async setState (newState: IState): Promise<void> {
    this.state = { ...this.state, ...newState }
    this.notifyListeners()
  }

  public getState (): IState {
    return this.state
  }

  public subscribe (listener: (state: IState) => Promise<void>): () => Promise<void> {
    this.listeners.push(listener)
    return async () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }

  private notifyListeners () {
    this.listeners.forEach(listener => listener(this.state))
  }
}
