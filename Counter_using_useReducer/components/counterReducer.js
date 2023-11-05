export const counterReducer = (state,action) =>{
    switch(action.type){
        case "increment":
            return{
                count:state.count +1,
            };
            case "decrement":
                return{
                    count:state.count -1 
                };
            case "increment_by":
                return{
                    count:state.count + action.payload
                }
                case "decrement_by":
                    return{
                        count:state.count - action.payload.count,
                    }
                case "reset_by":
                    return{
                        count:state.count - state.count
                    }

                    default:
                        state;
                        
                    
    }

}
