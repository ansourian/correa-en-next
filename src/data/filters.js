export const filtros = {
  colores: [
    { value: "negro", label: "Negro" },
    {
      value: ["natural", "arena"],
      label: "Natural / Arena",
    },
    {
      value: ["suela", "maiz"],
      label: "Suela / Maíz",
    },
    { value: "marron", label: "Marrón" },
    {
      value: ["cafe", "chocolate"],
      label: "Chocolate / Café",
    },
    {
      value: ["rojo", "guinda"],
      label: "Rojo / Guinda",
    },
    { value: "azul", label: "Azul" },
    { value: "verde", label: "Verde" },
    { value: "gris", label: "Gris" },
    { value: "violeta", label: "Violeta" },
    { value: "amarillo", label: "Amarillo" },
  ],
  cuero: [
    { value: "vacuno", label: "Cuero Vacuno" },
    { value: "vacuno (graneado)", label: "Cuero Vacuno Graneado" },
    { value: "gamuza", label: "Gamuza" },
    { value: "shell cordovan", label: "Shell Cordovan" },
    { value: "combinado", label: "Combinado" },
    { value: "cabretilla", label: "Cabretilla" },
    { value: "carpincho", label: "Carpincho" },
    { value: "vegetal", label: "Cuero Vegetal" },
  ],
  sewing: [
    { value: "Estándar", label: "Plantillado a mano" },
    { value: "Blake Rapid", label: "Blake Rapid" },
    {
      value: "Blake Rapid (suelas anchas)",
      label: "Blake Rapid (suelas anchas)",
    },
    { value: "Alpina", label: "Alpina / Vira Volcada" },
    { value: "Norvegese", label: "Norvegese" },
    { value: "diente-de-caballo", label: "Diente de Caballo" },
    { value: "diente-de-perro", label: "Diente de Perro" },
  ],
  linea: [
    { value: "ready-to-wear", label: "Ready To Wear" },
    { value: "made-to-order", label: "Made To Order" },
    { value: "bespoke", label: "Bespoke" },
  ],
  estilo: [
    { value: "wingtip-full-brogued", label: "Wingtip Full Brogued" },
    { value: "wingtip-semi-brogued", label: "Wingtip Semi Brogued" },
    { value: "wingtip", label: "Wingtip" },
    { value: "captoe-full-brogued", label: "Captoe Full Brogued" },
    { value: "captoe-semi-brogued", label: "Captoe Semi Brogued" },
    { value: "split-toe", label: "Split Toe" },
    { value: "captoe", label: "Captoe" },
    { value: "plain-toe-full-brogued", label: "Plain Toe Full Brogued" },
    { value: "plain-toe-semi-brogued", label: "Plain Toe Semi Brogued" },
    { value: "plain-toe", label: "Plain Toe" },
    { value: "wholecut", label: "Wholecut" },
  ],
  modelos: {
    zapatos: [
      { value: "oxfords", label: "Oxfords" },
      { value: "swann", label: "Swann" },
      { value: "derby", label: "Derby" },
      { value: "dandy", label: "Dandy" },
      { value: "con-hebillas", label: "Con Hebillas" },
    ],
    mocasines: [
      { value: "nauticos", label: "Náuticos" },
      { value: "archibaldo", label: "Archibaldo" },
      { value: "clasicos", label: "Clásicos" },
      { value: "vegetal", label: "Vegetal" },
    ],
    escarpines: [
      { value: "slipper", label: "Slipper" },
      { value: "MP", label: "MP" },
      { value: "americano", label: "Americano" },
    ],
    botas: [
      { value: "inglesa", label: "Inglesa" },
      { value: "chelsea", label: "Chelsea" },
      { value: "petta", label: "Petta" },
      { value: "dandy", label: "Dandy" },
      { value: "carioca", label: "Carioca" },
      { value: "ET", label: "ET" },
      { value: "alpina", label: "Alpina" },
      { value: "manchester", label: "Manchester" },
    ],
    borcegos: [
      { value: "altos", label: "Altos" },
      { value: "bajos", label: "Bajos" },
    ],
    sneakers: [
      { value: "urbana", label: "Urbana" },
      { value: "bota", label: "Bota" },
      { value: "SC", label: "SC" },
    ],
  },
}

export const codigosPorModelo = {
  oxfords: [
    { value: "1122", label: "1122" },
    { value: "1108", label: "1108" },
    { value: "1107", label: "1107" },
    { value: "1103", label: "1103" },
  ],
  swann: [
    { value: "Mod. Swann", label: "Estándar" },
    { value: "club", label: "Club" },
    { value: "wookie", label: "Wookie" },
    { value: "tatuado", label: "Tatuado" },
  ],
  derby: [
    { value: "1119", label: "1119" },
    { value: "1116", label: "1116" },
    { value: "1115", label: "1115" },
    { value: "1100", label: "1100" },
    { value: "coll", label: "Coll" },
  ],
  "con-hebillas": [
    { value: "2 hebillas", label: "2 Hebillas" },
    { value: "1 hebilla", label: "1 Hebilla" },
  ],
}

// export const colorGroups = [
//   {
//     label: "Negro",
//     values: ["negro"],
//   },
//   {
//     label: "Natural",
//     values: ["natural", "arena"],
//   },
//   {
//     label: "Suela / Maíz",
//     values: ["suela", "maiz"],
//   },
//   {
//     label: "Marrón",
//     values: ["marron", "tabaco"],
//   },
//   {
//     label: "Chocolate",
//     values: ["cafe", "chocolate"],
//   },
//   {
//     label: "Rojo",
//     values: ["rojo", "guinda"],
//   },
//   {
//     label: "Azul",
//     values: ["azul"],
//   },
//   {
//     label: "Verde",
//     values: ["verde"],
//   },
//   {
//     label: "Gris",
//     values: ["gris"],
//   },
//   {
//     label: "Violeta",
//     values: ["violeta"],
//   },
//   {
//     label: "Amarillo",
//     values: ["amarillo"],
//   },
// ]
