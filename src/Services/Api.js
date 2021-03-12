import http from "./http";

export const registrationApi = (data, config) => {
  return http.post("/auth/local/register", data, config);

};

export const loginApi = (data, config) => {
    return http.post("/auth/local", data, config);
  
};

export const roomInfoIpi = (id, config) => {
    return http.get(`/house-for-rents/${id}`, config);
  
};
export const createBookingAPi = (data, config)=>{
  return http.post("/bills", data, config);
}