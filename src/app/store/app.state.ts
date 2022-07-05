import { createAction, createReducer, on } from "@ngrx/store";

export interface IAppSatate {
    counter: number;
}

export const appInitialState: IAppSatate = { counter: 3 }

export const incrementaContador = createAction("[App] Aumentar contador");
export const decrementaContador = createAction("[App] Decrementa contador");

export const appReducer = createReducer(
    appInitialState,
    on(incrementaContador, (state) => {
        state = {
            ...state,
            counter: state.counter + 1
        }
        return state;
    }),
    on(decrementaContador, (state) => {
        state = {
            ...state,
            counter: state.counter - 1
        }
        return state;
    }),
);