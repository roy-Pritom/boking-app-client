import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [{id:1,flight:"NewYork to California",price:'290',image:"https://themehut.co/html/geair/assets/img/images/offer_img02.jpg",date:'9 july 2023 - 16 july 2023'},
  {id:2,flight:"Miami to Washington",price:'190',image:"https://themehut.co/html/geair/assets/img/images/offer_img03.jpg",date:'8 july 2023 - 14 july 2023'},
  {id:3,flight:"California to Miami",price:'100',image:"https://themehut.co/html/geair/assets/img/images/offer_img04.jpg",date:'8 july 2023 - 12 july 2023'},
  {id:4,flight:"Boston to Chicago",price:'120',image:"https://themehut.co/html/geair/assets/img/images/offer_img05.jpg",date:'4 july 2023 - 14 july 2023'},

],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};