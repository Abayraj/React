import {createContext, useReducer} from 'react';
export const CounterContext =  createContext();


//context 
export const CounterProvider = ({children}) =>{

    //useReducer logic
    const counterReducer = (state,action) =>{
        switch(action.type){
            case"increment":
            return{
                count:state.count+1,
            };
            case"decrement":
            return{
                count:state.count-1,
            }
            
        }
    };

    //useReducer 
const [state,dispatch] = useReducer(counterReducer,{
    count:0,
});
//context
   return <CounterContext.Provider value={{state,dispatch}}>{children}</CounterContext.Provider>

}
