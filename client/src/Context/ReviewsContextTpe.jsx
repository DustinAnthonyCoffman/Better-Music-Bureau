// import {createContext, ReactNode, useReducer, PropsWithChildren, ReducerAction} from 'react'
// import { ReviewsContextDispatch, ReviewsContextProviderProps, ReviewI, ReviewsI } from '../Interfaces/interfaces';



// // defaultValue: The value that you want the context to have when there is no matching context provider in the tree above the component that reads context. If you don’t have any meaningful default value, specify null. The default value is meant as a “last resort” fallback. It is static and never changes over time.

// // export const ReviewsContext = createContext<Reviews | null>(null);
// export const ReviewsContext = createContext();

// //previous state of app, action w/ type and payload 
// //FUCKING FIX THIS CANNOT BE ANY
// export const reviewsReducer = (state: ReviewsI, action: any) => {
//     //what do we want to do with state we determine the aciton type
//     switch(action.type) {
//         case 'SET_REVIEWS':
//             return {
//                 reviews: action.payload
//             }
//         case 'CREATE_REVIEW':
//             return {
//                 reviews: [action.payload, ...state.reviews]
//             }
//         case 'DELETE_REVIEW':
//             return {
//                 reviews: state.reviews.filter((r: ReviewI) => r._id !== action.payload._id)
//             }
//         default:
//             return state
//     }
// }

// export const ReviewsContextProvider = ({children}: ReviewsContextProviderProps) => {
//     //args into useReducer "reducer function name", initial state val usually null
//     //useReducer is similar to state, you get a value and function and specify initial value
//     //whats different is the custom reducer function
//     const [state, dispatch] = useReducer(reviewsReducer, {reviews: null})
    
//     //describes the state change, 
//     //second is the payload: any data we need to make this change
//     //when dispatch is called, our reviewsReducer is invoked
//     //it passes the action into the reducer function using that data
//     dispatch({type: 'CREATE_REVIEW'})
//     return (
//         <ReviewsContext.Provider value={{...state, dispatch}}>
//             {children}
//         </ReviewsContext.Provider>
//     )
// }
