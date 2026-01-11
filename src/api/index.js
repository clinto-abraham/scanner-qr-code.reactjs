"use strict";

export const API_BASE =
  import.meta.env.VITE_API_BASE || "https://happier-bertie-scratchless.ngrok-free.dev/api";

export const scanEntry = body =>
  fetch(`${API_BASE}/scan/entry`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }).then(res => res.json());

export const scanFood = body =>
  fetch(`${API_BASE}/scan/food`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }).then(res => res.json());

export const scanStay = body =>
  fetch(`${API_BASE}/scan/stay`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }).then(res => res.json());
