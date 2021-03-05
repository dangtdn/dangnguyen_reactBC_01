import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducer/GioHangReducer";
import {gameReducer} from "./reducer/BaiTapGameXucXacReducer"




const rootReducer = combineReducers ({
    gioHangReducer,
    gameReducer,
});


export const store = createStore(rootReducer);