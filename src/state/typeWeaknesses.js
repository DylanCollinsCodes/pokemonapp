const typeWeaknesses = {
    grass: ['flying','bug','fire','ice','posison'],
    fire: ['ground','rock','water'],
    water: ['electric','grass'],
    bug: ['fire','flying','rock'],
    dark: ['bug','fairy','fighting'],
    dragon: ['dragon','fairy','ice'],
    electric: ['ground'],
    fairy: ['poison','steel'],
    fighting: ['fairy','flying','psychic'],
    flying: ['electric','ice','rock'],
    ghost: ['dark','ghost'],
    ground: ['grass','ice','water'],
    ice: ['fighting','rock','fire','steel'],
    normal: ['fighting'],
    poison: ['ground','psychic'],
    psychic: ['bug','dark','ghost'],
    rock: ['fighting','grass','ground','steel','water'],
    steel: ['fighting','fire','ground'],
  }

  export default typeWeaknesses