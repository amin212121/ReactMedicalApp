import {CabinetAPI} from "../API/api";

let initalPage = {
    pacientDB: [
        {_id: 1, name: 'Stepan'},
        {_id: 2, name: 'Ivan'},
        {_id: 3, name: 'Nastya'},
        {_id: 4, name: 'Mykola'},
        {_id: 5, name: 'Valera'},
    ]
};

export const CabinetPageReducer = (state = initalPage, action) => {
        if (action.type === 'ADD-PACIENT') {
            let DATA = {
                _id: 6, name: action.newPacient
            };
            return {
                ...state,
                pacientDB: [...state.pacientDB, DATA]
            }


        } else if (action.type === 'ADD-PACIENTDB') {
            return {
                ...state,
                pacientDB: [...state.pacientDB, ...action.data],
            }

        } else {
            return state;
        }


    }
;


export const CreatePacient = (newPacient) => ({type: "ADD-PACIENT", newPacient: newPacient});
export const addPacient = (data) => ({type: "ADD-PACIENTDB", data: data});


export const CabinetGenerate = () => {
    return (dispatch) => CabinetAPI.getPacients().then(data => {
        dispatch(addPacient(data));
    })
};

export const PushPacientsToDB = (NewText) => {

    return () => {
        CabinetAPI.pushPacients(NewText);
    }

};