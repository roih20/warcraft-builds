import {itemNameColor} from "../../lib/utils.js";

const WeaponItemDescription = ({
  itemSlot, itemName, itemBinding,
  itemDamage, itemSpeed, itemDps, itemStats, itemSpells,
  itemDurability, itemLevelRequirement, itemEnchantments, itemSubclass,
  itemQuality, itemType
}) => {
  const textColor = itemNameColor(itemQuality)

  const itemPosition = {
    "Main Hand": { position: "top-128 left-0"},
    "Off Hand": { position: "top-128 right-0"},
    Ranged: { position: "top-144 left-0"},
  }

  const { position } = itemPosition[itemSlot]
  return (
    <div className={`absolute rounded-md border max-w-sm w-full border-white ${position} z-10 bg-slate-950/95 px-3 py-2 hidden lg:block`}>
      <div className={`${textColor}`}>{itemName}</div>
      <div className="text-white">{itemBinding}</div>
      <div className="flex flex-row items-center justify-between text-white">
        <div>{itemType}</div>
        <div>{itemSubclass}</div>
      </div>
      <div className="flex flex-row items-center justify-between text-white">
        <div>{itemDamage}</div>
        <div>{itemSpeed}</div>
      </div>
      <div className="text-white">{itemDps}</div>
      {
        itemStats && itemStats.map((stat, index) => (
          <div key={index} className="text-white">{stat.display.display_string}</div>
        ))
      }
      {
        itemEnchantments && itemEnchantments.map((enchantment, index) => (
          <div key={index} className="text-white">{enchantment.display_string}</div>
        ))
      }
      <div className="text-white">{itemDurability}</div>
      <div className="text-white">{itemLevelRequirement}</div>
      {
        itemSpells && itemSpells.map((spell, index) => (
          <div key={index} style={{ color: "rgba(0,255,0,1)"}}> 
            {spell.description}
          </div>
        ))
      }
    </div>
   )
}

export default WeaponItemDescription