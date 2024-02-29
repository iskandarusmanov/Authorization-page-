import { request } from "./httpRequest";

export const fetchUsers = (params) => request({method: "get", url: "users", params })

export const deleteUser = (id) => request({ method: "delete", url: `users/${id}` });