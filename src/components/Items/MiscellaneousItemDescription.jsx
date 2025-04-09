import {itemNameColor} from "../../lib/utils.js";

const MiscellaneousItemDescription = ({
  itemSlot, itemName, itemBinding,
  itemStats, itemLevelRequirement, itemEnchantments, itemUniqueEquipped,
  itemQuality
}) => {


  const textColor = itemNameColor(itemQuality)

  const itemPosition = {
    Neck: { position: "top-16 left-16"},
    "Ring 1": { position: "top-64 right-16"},
    "Ring 2": { position: "top-80 right-16"},
  }

  const { position } = itemPosition[itemSlot]

  return (
    <div className={`absolute rounded-md border max-w-sm border-white ${position} z-10 bg-slate-950/95 px-3 py-2 hidden lg:block`}>
      <div className={`${textColor}`}>{itemName}</div>
      <div className="text-white">{itemBinding}</div>
      {
        itemUniqueEquipped && (
          <div className="text-white">{itemUniqueEquipped}</div>
        )
      }
      <div className="text-white">{itemSlot}</div>
      <div className="text-white">{itemLevelRequirement}</div>
      {
        itemEnchantments && itemEnchantments.map((enchantment, index) => (
          <div key={index} className="text-white">
            {enchantment.display_string}
          </div>
        ))
      }
      {
        itemStats && itemStats.map((stat, index) => (
            <div key={index} className="text-white">
              {stat.display.display_string}
            </div>
          ))
      }
    </div>
  )
}

export default MiscellaneousItemDescription