import { itemNameColor } from "../../lib/utils.js";

const ArmorItemDescription = ({
    itemName, itemSlot, itemBinding, 
    itemSubClass, itemArmor, itemStats,
    itemEnchantments, itemDurability,
    itemClassRequirement, itemLevelRequirement,
    itemSet, itemQuality
  }) => {

  const armorPosition = {
    Head: { position: "top-0 left-16"},
    Shoulders: { position: "top-32 left-16"},
    Back: { position: "top-48 left-16"},
    Chest: { position: "top-64 left-16"},
    Hands: { position: "top-0 right-16"},
    Waist: { position: "top-16 right-16"},
    Legs: { position: "top-32 right-16"},
    Feet: { position: "top-48 right-16"},
    Wrist: { position: "top-112 left-16"},
  }

  const { position } = armorPosition[itemSlot]
  const textColor = itemNameColor(itemQuality)

  return (
    <div className={`absolute rounded-md border max-w-md border-white ${position} z-10 bg-slate-950/95 px-3 py-2 hidden lg:block`}>
      <div className={`${textColor}`}>{itemName}</div>
      <div className="text-white">{itemBinding}</div>
      <div className="flex flex-row items-center justify-between">
        <div className="text-white">{itemSlot}</div>
        <div className="text-white">{itemSubClass}</div>
      </div>
      <div className="text-white">{itemArmor}</div>
      {
        itemStats?.map((stat, i) => (
          <div key={i} className="text-white">
            {stat.display.display_string}
          </div>
        ))
      }
       {
        itemEnchantments?.map((enchat, index) => (
          <div key={index} className="text-white">
            {enchat.display_string}
          </div>
        ))
       }
       <div className="text-white">
        {itemDurability}
       </div>
       {
        itemClassRequirement && (
          <div className="text-white">
            {itemClassRequirement}
          </div>
        )
       }
       <div className="text-white">
        {itemLevelRequirement}
       </div>
       {
        itemSet && <>
          <div className="text-yellow-300 mt-4">
            {itemSet.display_string}
          </div>
          <div className="pl-3">
            {itemSet.items.map((item) => (
              <div key={item.item.id} className={`${item.is_equipped === true ? "text-yellow-300" : "text-gray-300"}`}>
                {item.item.name}
              </div>
            ))}
          </div>
          {
           itemSet.effects.map((effect, index) => (
             <div key={index} className={`${effect.is_active === true ? "text-yellow-300" : "text-gray-300"} mt-4`}> 
               {effect.display_string}
             </div>
           ))
          }
        </>
       }
    </div>
  )
}

export default ArmorItemDescription