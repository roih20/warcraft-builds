/* eslint-disable react/prop-types */


import {itemNameColor} from "../../lib/utils.js";

const TrinketItemDescription = ({
  itemName, itemSlot, itemBinding, itemLimit,
  itemSpells, itemLevelRequirement, itemStats,
  itemQuality
}) => {

  const itemPosition = {
    "Trinket 1": { position: "top-96 right-16"},
    "Trinket 2": { position: "top-112 right-16"},
  }

  const { position } = itemPosition[itemSlot]

  const textColor = itemNameColor(itemQuality)

  return (
    <div className={`absolute rounded-md border max-w-sm border-white ${position} z-10 bg-slate-950/95 px-3 py-2 hidden lg:block`}>
      <div className={textColor}>{itemName}</div>
      <div className="text-white">{itemBinding}</div>
      <div className="text-white">{itemLimit}</div>
      <div className="text-white">{itemSlot}</div>
      {
        itemStats && itemStats.map((stat, index) => (
          <div key={index} className="text-white"> 
            {stat.display.display_string}
          </div>
        ))
      }
      <div className="text-white">{itemLevelRequirement}</div>
      {
        itemSpells && itemSpells.map((spell) => (
          <div key={spell.spell.id} style={{ color: "rgba(0, 255, 0, 1)"}}>
            {spell.description}
          </div>
        ))
      }
    </div>
  )
}

export default TrinketItemDescription