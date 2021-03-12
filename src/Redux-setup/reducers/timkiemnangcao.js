const initStateSearchAdv = {
    checkedChungCu: false,
    checkedBietThu: false,
    checkedHomeStay: false,
    checkedNhaRieng: false,
    checkedNhaNghi: false,
    checkedKhac: false,
    valuePriceMin: 100000,
    valuePriceMax: 5000000,
    numberRoom: 1,

}
export default function searchReducer(state = initStateSearchAdv, action) {
    const data = action.payload;
    switch (action.type) {
        case "SEARCH_ADV":
            return {
                ...state,
                checkedChungCu: data.checkedChungCu,
                checkedBietThu: data.checkedBietThu,
                checkedHomeStay: data.checkedHomeStay,
                checkedNhaRieng: data.checkedNhaRieng,
                checkedNhaNghi: data.checkedNhaNghi,
                checkedKhac: data.checkedKhac,
                valuePriceMin: data.valuePriceMin,
                valuePriceMax: data.valuePriceMax,
                numberRoom: data.numberRoom,
            };
        case "HUY_SEARCH_ADV":
            return {
                checkedChungCu: false,
                checkedBietThu: false,
                checkedHomeStay: false,
                checkedNhaRieng: false,
                checkedNhaNghi: false,
                checkedKhac: false,
                valuePriceMin: 100000,
                valuePriceMax: 5000000,
                numberRoom: 1,
            };
        default:
            return state;
    }

}
