const initStateBook = {
   
};
// console.log("🚀 ~ file: login.js ~ line 5 ~ initState", initState)

export default function bookReducer(state = initStateBook, action) {
    const data = action.payload;
    switch (action.type) {
        case "BOOKING":
            return {
                ...state,
                data,
            };
        case "HUY_BOOKING":
            return {};
       
        default:
            return state;
    }
};