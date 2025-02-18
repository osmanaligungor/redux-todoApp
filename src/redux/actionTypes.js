/*
 * aksiyon tipleri string olduğundan dolayı yanlış yazma ihtimalimiz oldukça yüksek.
 * hata ihtimalini en aza düşürmek için aksiyonları bu dosyada bir nesne olarak tutalım ve kullanılacağı zaman buradan çağıralım.
 */

const ActionTypes = {
  ADD: "ADD",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  SET: "SET",
};

/*
* Bu şekilde de yapılabilir ama çok fazla import lazım.
export const ADD = "ADD";
export const TOGGLE = "TOGGLE";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
*/

export default ActionTypes;
