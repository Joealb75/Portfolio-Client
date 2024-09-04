import { fetchWithResponse, fetchWithoutResponse } from "./fetcher.js";

export function getAllProjects() {
  return new Promise((resolve, reject) => {
    fetchWithResponse("projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(resolve)
      .catch(reject);
  });
}

export function getProjectByID(projectID) {
  return new Promise((resolve, reject) => {
    fetchWithResponse(`projects/${projectID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(resolve)
      .catch(reject);
  });
}
