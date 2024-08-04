import { firebaseCreds } from "../constants";

// Destructure firebase creds
const { API_KEY, ID_TOKEN, PROJECT_ID, BASE_URL, REFRESH_TOKEN, JWT_SECRET } =
  firebaseCreds;
const jwtSecret = new TextEncoder().encode(JWT_SECRET);

// Function to refresh ID token
const refreshIDToken = async () => {
  try {
    const response = await fetch(
      `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: REFRESH_TOKEN,
        }),
      }
    );

    if (!response.ok) {
      console.log("Error: ", response.statusText);
    }

    const data = await response.json();
    const idToken = data.id_token;

    // const token = await new SignJWT({ idToken })
    //   .setProtectedHeader({ alg: "HS256" })
    //   .sign(jwtSecret);

    // localStorage.setItem("idToken", token);

    return idToken;
  } catch (error) {
    console.error("Failed to refresh ID token:", error);
  }
};

// Function to get the ID token from JWT stored in local storage
const getIDTokenFromLocalStorage = async () => {
  try {
    const token = localStorage.getItem("idToken");
    if (!token) {
      console.log("No ID Token found in local storage");
      return null;
    }

    const { payload } = await jwtVerify(token, jwtSecret);
    return payload.idToken;
  } catch (error) {
    console.error("Failed to get ID token from local storage:", error);
    return null;
  }
};

// Function to post new data
const postData = async (data) => {
  try {
    const jsonPaylod = {
      fields: data,
    };

    const idToken = await refreshIDToken();
    const response = await fetch(
      `${BASE_URL}/projects/${PROJECT_ID}/databases/(default)/documents/plugg-wallet-id`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonPaylod),
      }
    );

    if (!response.ok) {
      console.log("Error: ", response.statusText);
    }

    const responseData = await response.json();
    console.log("Data posted successfully: ", responseData);
    return responseData;
  } catch (error) {
    console.error("Failed to post data:", error);
  }
};

export { postData, getIDTokenFromLocalStorage, refreshIDToken };
