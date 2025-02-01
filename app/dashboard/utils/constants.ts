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

const PRODUCT_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  SOLD_OUT: "sold-out",
  BACK_ORDERED: "back-ordered",
  DELETED: "deleted",
  OUT_OF_STOCK: "out-of-stock",
  LOW_QUANTITY: "low-quantity",
  EXPIRED: "expired",
  PENDING: "pending",
};

const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
export { HTTP_STATUS };

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

const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
};
export { PAGINATION };

const THEME_COLORS = {
  PRIMARY: "#6200EE",
  SECONDARY: "#03DAC6",
};
export { THEME_COLORS };

export const NOTIFICATION_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
};

export {
  API_BASE_URL,
  AUTH_ENDPOINTS,
  USER_ROLES,
  HTTP_STATUS,
  PAGINATION,
  THEME_COLORS,
};
