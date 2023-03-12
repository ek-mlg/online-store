import img1 from "../assets/img/1.webp";

export type ItemActionsType = ReturnType<typeof itemAC>

export type ItemInitialStateType = typeof initialState

const initialState = {
    items: [
        {id: "1", img: img1, name: "iPhone 14 Pro Max", price: 1200, description: "description1", addToBasket: false},
        {id: "2", img: img1, name: "item2", price: 460, description: "description2", addToBasket: false},
        {id: "3", img: img1, name: "item3", price: 190, description: "description3", addToBasket: false},
        {id: "4", img: img1, name: "item4", price: 100, description: "description4", addToBasket: false},
        {id: "5", img: img1, name: "item5", price: 490, description: "description5", addToBasket: false},
        {id: "6", img: img1, name: "item6", price: 490, description: "description6", addToBasket: false},

    ],
}

export const ItemReducer = (state: ItemInitialStateType = initialState, action: ItemActionsType): ItemInitialStateType => {

    switch (action.type) {

        case 'ADD-TO-BASKET':

            return {
                ...state
            }
        default:
            return state;
    }
}

export const itemAC = () => {
    return {
        type: "ADD-TO-BASKET",

    } as const
}