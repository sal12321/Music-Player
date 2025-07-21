// const clientId = '067c10e4abd64cb59bfe91532afe4b7f'; // Replace with your client id
// const clientSecret = '77dc55f7a2d2432e8431261253fba1ea'; // Replace with your client secret
// // const redirectUri = 'http://127.0.0.1:5500/index.html/callback'; // Replace with your redirect URI
// const redirectUri = 'http://127.0.0.1:5500/index.html';


// // Define an async function to handle the logic
// (async () => {
//     const code = new URLSearchParams(window.location.search).get('code'); // Extract code from URL

//     if (!code) {
//         redirectToAuthCodeFlow(clientId, redirectUri);
//     } else {
//         try {
//             const accessToken = await getAccessToken(clientId, clientSecret, redirectUri, code);
//             const profile = await fetchProfile(accessToken);
//             populateUI(profile);
//         } catch (error) {
//             console.error('Error during authentication or API request:', error);
//         }
//     }
// })();

// async function redirectToAuthCodeFlow(clientId, redirectUri) {
//     const authUrl = new URL('https://accounts.spotify.com/authorize');
//     authUrl.searchParams.set('response_type', 'code');
//     authUrl.searchParams.set('client_id', clientId);
//     authUrl.searchParams.set('redirect_uri', redirectUri);
//     authUrl.searchParams.set('scope', 'user-read-private user-read-email'); // Adjust scopes as needed
//     window.location.href = authUrl.toString();
// }

// async function getAccessToken(clientId, clientSecret, redirectUri, code) {
//     const tokenUrl = 'https://accounts.spotify.com/api/token';
//     const params = new URLSearchParams();
//     params.append('grant_type', 'authorization_code');
//     params.append('code', code);
//     params.append('redirect_uri', redirectUri);

//     try {
//         const response = await fetch(tokenUrl, {
//             method: 'POST',
//             headers: {
//                 'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`),
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             body: params.toString()
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }

//         const data = await response.json();
//         return data.access_token;
//     } catch (error) {
//         console.error('Error fetching access token:', error);
//         throw error;
//     }
// }

// async function fetchProfile(token) {
//     const profileUrl = 'https://api.spotify.com/v1/me';

//     try {
//         const response = await fetch(profileUrl, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching profile data:', error);
//         throw error;
//     }
// }

// function populateUI(profile) {
//     // Update the UI with profile data
//     document.getElementById('profile-name').textContent = profile.display_name;
//     document.getElementById('profile-email').textContent = profile.email;
//     // Add more UI updates as needed
// }
// const clientId = '067c10e4abd64cb59bfe91532afe4b7f'; // Replace with your client id
// const clientSecret = '77dc55f7a2d2432e8431261253fba1ea'; // Replace with your client secret
// // const redirectUri = 'http://127.0.0.1:5500/index.html/callback'; // Replace with your redirect URI
// const redirectUri = 'http://127.0.0.1:5500/index.html';


// // Define an async function to handle the logic
// (async () => {
//     const code = new URLSearchParams(window.location.search).get('code'); // Extract code from URL

//     if (!code) {
//         redirectToAuthCodeFlow(clientId, redirectUri);
//     } else {
//         try {
//             const accessToken = await getAccessToken(clientId, clientSecret, redirectUri, code);
//             const profile = await fetchProfile(accessToken);
//             populateUI(profile);
//         } catch (error) {
//             console.error('Error during authentication or API request:', error);
//         }
//     }
// })();

// async function redirectToAuthCodeFlow(clientId, redirectUri) {
//     const authUrl = new URL('https://accounts.spotify.com/authorize');
//     authUrl.searchParams.set('response_type', 'code');
//     authUrl.searchParams.set('client_id', clientId);
//     authUrl.searchParams.set('redirect_uri', redirectUri);
//     authUrl.searchParams.set('scope', 'user-read-private user-read-email'); // Adjust scopes as needed
//     window.location.href = authUrl.toString();
// }

// async function getAccessToken(clientId, clientSecret, redirectUri, code) {
//     const tokenUrl = 'https://accounts.spotify.com/api/token';
//     const params = new URLSearchParams();
//     params.append('grant_type', 'authorization_code');
//     params.append('code', code);
//     params.append('redirect_uri', redirectUri);

//     try {
//         const response = await fetch(tokenUrl, {
//             method: 'POST',
//             headers: {
//                 'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`),
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             body: params.toString()
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }

//         const data = await response.json();
//         return data.access_token;
//     } catch (error) {
//         console.error('Error fetching access token:', error);
//         throw error;
//     }
// }

// async function fetchProfile(token) {
//     const profileUrl = 'https://api.spotify.com/v1/me';

//     try {
//         const response = await fetch(profileUrl, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching profile data:', error);
//         throw error;
//     }
// }

// function populateUI(profile) {
//     // Update the UI with profile data
//     document.getElementById('profile-name').textContent = profile.display_name;
//     document.getElementById('profile-email').textContent = profile.email;
//     // Add more UI updates as needed
// }
