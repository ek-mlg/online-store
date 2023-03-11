import img1 from "../assets/img/1.webp";

export type ItemActionsType = ReturnType<typeof itemAC>

export type ItemInitialStateType = typeof initialState

export type TestType = {
    items: ItemType[]
}

type ItemType = {
    id: string, img: string, name: string, price: string, description: string
}

const initialState = {
    products: {
        items: [
            {id: "1", img: img1, name: "iPhone 14 Pro Max", price: "1250$", description: "description1"},
            {id: "2", img: img1, name: "item2", price: "460$", description: "description2"},
            {id: "3", img: img1, name: "item3", price: "190$", description: "description3"},
            {id: "4", img: img1, name: "item4", price: "100$", description: "description4"},
            {id: "5", img: img1, name: "item5", price: "490$", description: "description5"},
            {id: "6", img: img1, name: "item5", price: "490$", description: "description5"},

        ]
    }
}

export const ItemReducer = (state: ItemInitialStateType = initialState, action: ItemActionsType): ItemInitialStateType => {

    switch (action.type) {

        case 'ITEM':
            return {
                ...state
            }
        default:
            return state;
    }
}

export const itemAC = () => {
    return {
        type: "ITEM"
    } as const
}