import {StateType, ReducerType, ComputedValType , cst, MODULE_VOID, ICtx, IAnyFn } from 'concent';

import barState from '../models/bar/state';
import * as barCu from '../models/bar/computed';
import * as barReducer from '../models/bar/reducer';

import setupState from '../pages/SetupDemo/_model/state';
import * as setupRd from '../pages/SetupDemo/_model/reducer';
import * as setupCu from '../pages/SetupDemo/_model/computed';


export type BarState = StateType<typeof barState>;
export type BarReducer = ReducerType<typeof barReducer>; 
export type BarCu = ComputedValType<typeof barCu>; 

export type SetupState = StateType<typeof setupState>;
export type SetupRd = ReducerType<typeof setupRd>; 
export type SetupCu = ComputedValType<typeof setupCu>; 

export type RootState  = {
  [cst.MODULE_GLOBAL]:{},
  [cst.MODULE_DEFAULT]:{},
  [cst.MODULE_VOID]:{},
  SetupDemo: SetupState,
  bar:BarState,
}

export type RootRd  = {
  SetupDemo: SetupRd,
  bar:BarReducer,
}

export type RootCu  = {
  SetupDemo: SetupCu,
  bar:BarCu,
}

export type ICtxM<P, S, M, Se={}> = S extends IAnyFn ? 
ICtx<RootState, RootRd, RootCu, P, ReturnType<S>, M, MODULE_VOID, Se>:
ICtx<RootState, RootRd, RootCu, P, S, M, MODULE_VOID, Se>;