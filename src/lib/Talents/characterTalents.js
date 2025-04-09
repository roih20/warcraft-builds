import {armsTalents, furyTalents, protectionTalents} from "./warrior.js";
import {bloodTalents, frostTalents, unholyTalents} from "./deathKnight.js";
import {afflictionTalents, demonologyTalents, destructionTalents} from "./warlock.js";
import {assassinationTalents, combatTalents, subtletyTalents} from "./rogue.js";
import {beastMasteryTalents, marksmanshipTalents, survivalTalents} from "./hunter.js";
import {arcaneTalents, fireTalents, frostMageTalents} from "./mage.js";
import {holyTalents, protectionPaladinTalents, retributionTalents} from "./paladin.js";
import {elementalTalents, enhancementTalents, restorationTalents} from "./shaman.js";
import {balanceTalents, feralCombatTalents, restorationDruidTalents} from "./druid.js";

export const characterTalents = {
  Warrior: {
    Arms: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_savageblow.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/746.jpg)]",
      specTalents: armsTalents
    },
    Fury: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_innerrage.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/815.jpg)]",
      specTalents: furyTalents
    },
    Protection: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_defensivestance.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/845.jpg)]",
      specTalents: protectionTalents
    }
  },
  "Death Knight": {
    Blood: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_bloodpresence.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/398.jpg)]",
      specTalents: bloodTalents,
    },
    Frost: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_frostpresence.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/399.jpg)]",
      specTalents: frostTalents
    },
    Unholy: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_unholypresence.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/400.jpg)]",
      specTalents: unholyTalents,
    }
  },
  Warlock: {
    Affliction: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_deathcoil.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/871.jpg)]",
      specTalents: afflictionTalents
    },
    Demonology: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_metamorphosis.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/867.jpg)]",
      specTalents: demonologyTalents
    },
    Destruction: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_rainoffire.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/865.jpg)]",
      specTalents: destructionTalents
    }
  },
  Rogue: {
    Assassination: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_eviscerate.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/182.jpg)]",
      specTalents: assassinationTalents
    },
    Combat: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/ability_backstab.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/181.jpg)]",
      specTalents: combatTalents
    },
    Subtlety: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/ability_stealth.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/183.jpg)]",
      specTalents: subtletyTalents
    }
  },
  Hunter: {
    "Beast Mastery": {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_bestialdiscipline.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/811.jpg)]",
      specTalents: beastMasteryTalents
    },
    Marksmanship: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_focusedaim.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/807.jpg)]",
      specTalents: marksmanshipTalents
    },
    Survival: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_camouflage.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/809.jpg)]",
      specTalents: survivalTalents
    }
  },
  Mage: {
    Arcane: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_magicalsentry.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/799.jpg)]",
      specTalents: arcaneTalents
    },
    Fire: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_firebolt02.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/851.jpg)]",
      specTalents: fireTalents
    },
    Frost: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_frostbolt02.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/823.jpg)]",
      specTalents: frostMageTalents
    }
  },
  Paladin: {
    Holy: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_holybolt.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/831.jpg)]",
      specTalents: holyTalents
    },
    Protection: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/ability_paladin_shieldofthetemplar.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/839.jpg)]",
      specTalents: protectionPaladinTalents
    },
    Retribution: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auraoflight.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/855.jpg)]",
      specTalents: retributionTalents
    }
  },
  Shaman: {
    Elemental: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_lightning.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/261.jpg)]",
      specTalents: elementalTalents
    },
    Enhancement: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_lightningshield.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/263.jpg)]",
      specTalents: enhancementTalents
    },
    Restoration: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_magicimmunity.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/262.jpg)]",
      specTalents: restorationTalents
    }
  },
  Druid: {
    Balance: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_starfall.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/752.jpg)]",
      specTalents: balanceTalents
    },
    "Feral Combat": {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/ability_racial_bearform.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/750.jpg)]",
      specTalents: feralCombatTalents
    },
    Restoration: {
      specIcon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_healingtouch.jpg",
      specBg: "bg-[url(https://wow.zamimg.com/images/wow/talents/backgrounds/cata/748.jpg)]",
      specTalents: restorationDruidTalents
    }
  }
}
