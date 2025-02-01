import { useState } from "react";

const API_BASE_URL = "https://api.example.com";
export { API_BASE_URL };

const AUTH_ENDPOINTS = {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    LOGOUT: "/auth/logout",
    RESET_PASSWORD: "/auth/reset-password",
  };
  export { AUTH_ENDPOINTS };
  
  const USER_ROLES = {
    ADMIN: "admin",
    USER: "user",
  };
  export { USER_ROLES };
  
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  DASHBOARD: "/dashboard",
  PRODUCTS: "/products",
  PRODUCT_DETAILS: "/product-details",
  ORDERS: "/orders",
  ORDER_DETAILS: "/order-details",
  USERS: "/users",
  USER_DETAILS: "/user-details",
  PROFILE: "/profile",
  SETTINGS: "/settings",
  NOTIFICATIONS: "/notifications",
};

export const NOTIFICATION_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
};