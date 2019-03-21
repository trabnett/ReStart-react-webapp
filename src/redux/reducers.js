import { LOGIN } from "./constants";
const initialState = {
  user: {
      first_name: "",
      last_name: "",
      email: "",
      postcode: "",
      points: 0,
      coupons: [],
      session_id: 0
  },
  brand: {
      brand_name: "",
      brand_id: null,
      brand_logo: "",
      brand_email: "",
      coupons: [],
    }
};
function rootReducer(state = initialState, action) {
  if (action.type === LOGIN) {
      if (action.payload.brand_logo){
        return Object.assign({}, state, {
            brand: action.payload
        })
      } else {
        return Object.assign({}, state, {
            user: action.payload
        })
      }

    // return Object.assign({}, state, {
    //   articles: state.articles.concat(action.payload)
    // });
  }
  return state;
}
export default rootReducer;