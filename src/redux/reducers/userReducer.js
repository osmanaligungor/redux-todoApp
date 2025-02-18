/*
! reducer
* state'in nasıl değişeceğine karar veren fonksiyon
* bu fonksiyon 2 parametre alır:
* >>> state : reducer'da tutulan verinin son durumu
* >>> action : verilerin nasıl değişeceğini ifade eden nesnedir.

* reducer fonksiyonunda return edilen değer state'in son değeri olur.
* useReducer'dan farklı olarak redux'da reducer yazarken state'in ilk değerini veririz.

*/

const initialState = {
  user: null,
  token: "",
  profile: null,
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  // reducer'a gelen aksiyonun tipine göre state'in nasıl değişeceğine karar vereceğiz.
  switch (action.type) {
    case "LOGIN":
      return state; // burada return edilen değer doğrudan state'i günceller.
    case "SIGNUP":
      return state;
    case "LOGOUT":
      return state;
    // state'i olduğu gibi tut
    default:
      return state;
  }
};

export default userReducer;
