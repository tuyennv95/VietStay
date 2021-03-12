const initStateSearch = {
    search: '',
    startDate: '',
    endDate: '',
    adults: 1,
    children: 0,
    infant: 0,
};
// console.log("🚀 ~ file: login.js ~ line 5 ~ initState", initState)

export default function searchReducer(state = initStateSearch, action) {
    const data = action.payload;
    switch (action.type) {
        case "SEARCH_SUCCESS":
            return {
                ...state,
                search: data.search,
                startDate: data.startDate,
                endDate: data.endDate,
                adults: data.adults,
                children: data.children,
                infant: data.infant,
            };
        case "DATE_UPDATE":
            return {
                ...state,
                startDate: data.startDate,
                endDate: data.endDate,
            }
        case "DEL_SEARCH":
            return {
                search: '',
                startDate: '',
                endDate: '',
                adults: 1,
                children: 0,
                infant: 0,
            }
        default:
            return state;
    }
};