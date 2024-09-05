import { fetchWithResponse, fetchWithoutResponse } from "./fetcher.js"

export function getAllImages() {
    return new Promise((resolve, reject) => {
      fetchWithResponse("images", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(resolve)
        .catch(reject);
    });
  }