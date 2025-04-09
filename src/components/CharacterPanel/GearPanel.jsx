import { useState, useEffect } from "react"
import { getWoWAccessToken } from "../../lib/oauth.js"
import { fetchData } from "../../lib/utils.js"
import ItemSlot from "../Items/ItemSlot.jsx"
import ArmorItemDescription from "../Items/ArmorItemDescription.jsx"
import MiscellaneousItemDescription from "../Items/MiscellaneousItemDescription.jsx"
import TrinketItemDescription from "../Items/TrinketItemDescription.jsx"
import WeaponItemDescription from "../Items/WeaponItemDescription.jsx"
import Loading from "../Loading.jsx";

const GearPanel = ({ realm , player, setError }) => {

  const [characterEquipment, setCharacterEquipment] = useState({
    character: {},
    equipment: [],
  })

  const [hoveredItemSlot, setHoveredItemSlot] = useState(null)

  const [loading, setLoading] = useState(true)


  useEffect(() => {
        const fetchCharacterEquipment = async () => {

          try {

            setLoading(true)

            const accessToken = await getWoWAccessToken()

            const characterEquipmentResponse = await fetchData(
              `https://us.api.blizzard.com/profile/wow/character/${realm}/${player}/equipment?namespace=profile-classic-us&locale=en_US`,
              accessToken
            )

            const { character, equipped_items} = characterEquipmentResponse

            //fetch array of urls
            const equipmentArray = await Promise.all(
              equipped_items.map(async (item) => {
              const mediaResponse = await fetchData(
                `https://us.api.blizzard.com/data/wow/media/item/${item.item.id}?namespace=static-us&locale=en_US`,
                accessToken
              )

              return {
                ...item,
                asset: {
                  fileDataId: mediaResponse.assets[0].file_data_id,
                  url: mediaResponse.assets[0].value
                }
              }
            }))

            setCharacterEquipment({
              character: {
                id: character.id,
                name: character.name,
                realm: {
                  id: character.realm.id,
                  name: character.realm.name,
                  slug: character.realm.slug
                }
              },
              equipment: equipmentArray,
            })

            setError(false)
            setLoading(false)
          } catch (e) {
            setLoading(false)
            setError(true)
          }
        }


        fetchCharacterEquipment()
    }, [player, realm, setError])


  const renderItemDescription = (item) => {

    if (hoveredItemSlot !== item.slot.name) return null

    if (["Plate", "Mail", "Leather", "Cloth"].includes(item.item_subclass.name)) {
      return (
        <ArmorItemDescription
          itemQuality={item.quality.name}
          itemName={item.name}
          itemBinding={item.binding.name}
          itemSlot={item.slot.name}
          itemSubClass={item.item_subclass.name}
          itemArmor={item.armor?.display?.display_string || ""}
          itemStats={item?.stats || []}
          itemEnchantments={item?.enchantments || []}
          itemDurability={item.durability?.display_string || ""}
          itemClassRequirement={item.requirements?.playable_classes?.display_string || ""}
          itemLevelRequirement={item.requirements?.level?.display_string || ""}
          itemSet={item?.set}
        />
      )
    }

    if (["Neck", "Finger"].includes(item.inventory_type.name)) {
      return (
        <MiscellaneousItemDescription
          itemSlot={item.slot.name}
          itemName={item.name}
          itemBinding={item.binding.name}
          itemQuality={item.quality.name}
          itemStats={item?.stats || []}
          itemEnchantments={item?.enchantments || []}
          itemLevelRequirement={item?.requirements?.level?.display_string}
          itemUniqueEquipped={item?.unique_equipped || ""}
        />
      )
    }

    if (item.inventory_type.name === "Trinket") {
      return (
        <TrinketItemDescription
          itemSlot={item.slot.name}
          itemName={item.name}
          itemQuality={item.quality.name}
          itemBinding={item.binding.name}
          itemStats={item?.stats || []}
          itemLevelRequirement={item.requirements.level.display_string}
          itemLimit={item.limit_category}
          itemSpells={item?.spells || []}
        />
      )
    }

    if (["Main Hand", "One-Hand", "Two-Hand", "Staff", "Ranged", "Relic", "Thrown", "Off Hand", "Held in Off-Hand"].includes(item.inventory_type.name)) {
      return (
        <WeaponItemDescription
          itemSlot={item.slot.name}
          itemType={item.inventory_type.name}
          itemName={item.name}
          itemBinding={item.binding.name}
          itemQuality={item.quality.name}
          itemStats={item?.stats || []}
          itemLevelRequirement={item.requirements.level.display_string}
          itemEnchantments={item?.enchantments || []}
          itemDurability={item?.durability?.display_string || ""}
          itemSubclass={item.item_subclass.name}
          itemSpells={item?.spells || []}
          itemDps={item?.weapon?.dps?.display_string || ""}
          itemSpeed={item?.weapon?.attack_speed?.display_string || ""}
          itemDamage={item?.weapon?.damage?.display_string || ""}
        />
      )
    }

    return null
  }



  return (
    <>
      {
        !loading ? (
          <div className="relative">
            {
              characterEquipment.equipment.map((item, index) => (
                <>
                  <ItemSlot
                    key={index}
                    onMouse={setHoveredItemSlot}
                    itemIcon={item.asset.url}
                    itemName={item.name}
                    itemQuality={item.quality.name}
                    itemSlot={item.slot.name}
                  />
                  {
                    renderItemDescription(item)
                  }
                </>
              ))
            }
          </div>
        ) : (
          <Loading />
        )
      }
    </>
  )
}


export default GearPanel