import { memo } from "react";

// eslint-disable-next-line react/display-name
const ItemSlot = memo(({itemName, itemIcon, itemQuality, itemSlot, onMouse}) => {

  const qualityStyles = {
    Uncommon: {
      borderColor: "border-green-500",
      textColor: "text-green-500",
    },
    Rare: {
      borderColor: "border-blue-700",
      textColor: "text-blue-700",
    },
    Epic: {
      borderColor: "border-purple-700",
      textColor: "text-purple-600",
    },
    Legendary: {
      borderColor: "border-orange-600",
      textColor: "text-orange-600"
    },
    Default: {
      borderColor: "border-gray-700",
      textColor: "text-white",
    }
  }

  const { borderColor, textColor} = qualityStyles[itemQuality] || qualityStyles.Default;

  const slotPositions = {
    Head: { position: "top-0", direction: "" },
    Neck: { position: "top-16", direction: "" },
    Shoulders: { position: "top-32", direction: "" },
    Back: { position: "top-48", direction: "" },
    Chest: { position: "top-64", direction: "" },
    Wrist: { position: "top-112", direction: "" },
    Hands: { position: "top-0 right-0", direction: "flex-row-reverse text-right" },
    Waist: { position: "top-16 right-0", direction: "flex-row-reverse text-right" },
    Legs: { position: "top-32 right-0", direction: "flex-row-reverse text-right" },
    Feet: { position: "top-48 right-0", direction: "flex-row-reverse text-right" },
    "Ring 1": { position: "top-64 right-0", direction: "flex-row-reverse text-right" },
    "Ring 2": { position: "top-80 right-0", direction: "flex-row-reverse text-right" },
    "Trinket 1": { position: "top-96 right-0", direction: "flex-row-reverse text-right" },
    "Trinket 2": { position: "top-112 right-0", direction: "flex-row-reverse text-right" },
    "Main Hand": { position: "top-128 right-1/2", direction: "flex-row-reverse text-right" },
    "Off Hand": { position: "top-128 left-1/2", direction: "" },
    Shirt: { position: "top-80", direction: "" },
    Tabard: { position: "top-96", direction: ""},
    Ranged: { position: "top-144 right-1/2", direction: "flex-row-reverse text-right" },
  }

  const { position, direction} = slotPositions[itemSlot] || { position: "", direction: "" };


  return (
    <div className={`flex ${position} ${direction} gap-x-2  h-14 absolute`}>
       <img 
          onMouseEnter={() => onMouse(itemSlot)}
          onMouseLeave={() => onMouse(null)}
          src={itemIcon} 
          className={`border-2 ${borderColor} rounded-md hover:cursor-pointer`}
          height={56}
          alt={itemName}
       />
       <div className={`${textColor} overflow-hidden font-semibold w-1/3 text-sm text-ellipsis text-wrap sm:text-nowrap sm:w-60 md:w-72 md:text-base`}>{itemName}</div>
    </div>
  )
})


export default ItemSlot