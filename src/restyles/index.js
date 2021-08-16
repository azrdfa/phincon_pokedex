const restyleId = (id) => {
  const idLen = id.toString().length
  return "#" + "0".repeat(4 - idLen) + id.toString()
}
const restyleName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1)
}
const restyleHeight = (height) => {
  const heightInMeter = height / 10
  return heightInMeter.toString() + " m"
}
const restyleWeight = (weight) => {
  const weightInKilogram = weight / 10
  return weightInKilogram.toString() + " kg"
}
const restyleAbilities = (abilities) => {
  const result = abilities.map((elem, index) => {
    const name = elem.ability.name
    if (index === abilities.length - 1) {
      return name.charAt(0).toUpperCase() + name.slice(1)
    } else {
      return name.charAt(0).toUpperCase() + name.slice(1) + ", "
    }
  })
  return result
}
const restyleLabel = (label) => {
  if (label === "special-attack" || label === "special-defense") {
    const labelArr = label.split("-")
    return "Sp." + labelArr[1].charAt(0).toUpperCase() + labelArr[1].slice(1)
  }
  return label.charAt(0).toUpperCase() + label.slice(1)
}
const restyleMoveName = (name) => {
  const nameArr = name.split("-")
  if (nameArr.length > 1) {
    let concatenateName = ""
    nameArr.forEach(elem => {
      concatenateName += elem.charAt(0).toUpperCase() + elem.slice(1) + " "
    })
    return concatenateName
  }
  return name.charAt(0).toUpperCase() + name.slice(1)
}
const restyleLevel = (level) => {
  return "Level " + level.toString()
}
export {
  restyleId,
  restyleName,
  restyleHeight,
  restyleWeight,
  restyleAbilities,
  restyleLabel,
  restyleMoveName,
  restyleLevel
}