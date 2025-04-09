import SpecializationPanel from "./SpecializationPanel.jsx";

const CharacterTalents = ({ specializations, specializationPanels }) => {
  return <div className="flex flex-row gap-x-2.5 overflow-x-auto lg:overflow-hidden lg:grid lg:grid-cols-3">
    {
      specializations && specializations
        .sort((a, b) => a.specialization_name.localeCompare(b.specialization_name))
        .map((specialization) => {
          const { specialization_name: specName, spent_points: spentPoints, talents } = specialization
          const { specIcon, specBg, specTalents } = specializationPanels[specName]
          return (
            <SpecializationPanel
              key={specName}
              specName={specName}
              spentPoints={spentPoints}
              talents={talents}
              specTalents={specTalents}
              specIcon={specIcon}
              specBg={specBg}
            />
          )

        })
    }
  </div>
}

export default CharacterTalents