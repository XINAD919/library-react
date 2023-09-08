import axios from "axios";

const defaultUrl = process.env.API_URL||'http://localhost:3000';


export const getBooks = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${defaultUrl}/books`,
    headers: { "content-Type": "aplication/json" },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
export const getOneBook = async (id, successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${defaultUrl}/books/${id}`,
    headers: { "content-Type": "aplication/json" },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
export const createBook = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: `${defaultUrl}/books`,
    headers: { "content-Type": "aplication/json" },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
export const updateBook = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: `${defaultUrl}/books/${id}`,
    headers: { "content-Type": "aplication/json" },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
export const deleteBook = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `${defaultUrl}/books/${id}`,
    headers: { "content-Type": "aplication/json" },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
