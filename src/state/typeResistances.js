const typeResistances = {
    normal: ['ghost'],
    fighting: ['rock','bug','dark'],
    flying: ['fighting','ground','bug','grass'],
    poison: ['fighting','poison','grass','fairy'],
    ground: ['poison','rock','electric'],
    rock: ['normal','flying','poison','fire'],
    bug: ['fighting','ground','grass'],
    ghost: ['normal','fighting','poison','bug'],
    steel: ['normal','flying','poison','rock','bug','steel','grass','psychic','ice','dragon','fairy'],
    fire: ['bug','steel','fire','grass','ice'],
    water: ['steel','fire','water','ice'],
    grass: ['ground','water','grass','electric'],
    electric: ['flying','steel','electric'],
    psychic: ['fighting','psychic'],
    ice: ['ice'],
    dragon: ['fire','water','grass','electric'],
    fairy: ['fighting','bug','dragon','dark'],
    dark: ['ghost','psychic','dark']
  }

  export default typeResistances