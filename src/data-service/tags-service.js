import { fetchWithResponse, fetchWithoutResponse } from "./fetcher.js";

export function getAllTags() {
  return new Promise((resolve, reject) => {
    fetchWithResponse("tags", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(resolve)
      .catch(reject);
  });
}