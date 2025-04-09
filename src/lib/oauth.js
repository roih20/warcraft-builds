
export const getWoWAccessToken = async () => {
  const authResponse = await fetch("https://oauth.battle.net/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `grant_type=client_credentials&client_id=${import.meta.env.VITE_CLIENT_ID}&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
  })

   const { access_token } = await authResponse.json()

   return access_token
} 
