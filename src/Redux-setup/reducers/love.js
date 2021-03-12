const initState = [];
export default function loveReducer(state = initState, action) {
    switch (action.type) {
        case "CREATE":
            const listRoomLove = action.payload || [];
            return [...listRoomLove];
        case "LOVE":
            return [...state, action.payload];
        case "UNLOVE":
            const id = action.payload;
            console.log(id)
            const list = state.filter((item) => item != id);
            return [...list];
        case "LOGOUTLOVE":
            return [];
        default:
            return state;
    }
}