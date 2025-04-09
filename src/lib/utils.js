
export const itemNameColor = (itemQuality) => {

  const qualityStyles = {
    Uncommon: { textColor: "text-green-500" },
    Rare: { textColor: "text-blue-600" },
    Epic: { textColor: "text-purple-600" },
    Legendary: { textColor: "text-orange-500" },
    Default: { textColor: "text-white" },
  }

  const { textColor } = qualityStyles[itemQuality] || qualityStyles.Default

  return textColor
}

export const fetchData = async (url, accessToken) => {

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })


  if (!response.ok && response.status === 404) {
    throw new Error("Could not fetch character data")
  }

  return await response.json()

}