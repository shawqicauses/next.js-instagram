// DONE REVIEWING: GITHUB COMMIT 🛰️
import {
  Aligns,
  AlignsClasses,
  Backgrounds,
  BackgroundsClasses,
  Dimensions,
  DimensionsClasses,
  ID,
  Positions,
  PositionsClasses,
  TextsClasses
} from "../types/frame"

export const dimensions: {id: ID; value: Dimensions}[] = [
  {id: 0, value: "square"},
  {id: 1, value: "landscape"},
  {id: 2, value: "portrait"},
  {id: 3, value: "story"},
  {id: 4, value: "avatar"}
]

export const dimensionsClasses: {[key: string]: DimensionsClasses} = {
  square: {width: 67.5, height: 67.5},
  landscape: {width: 67.5, height: 35.375},
  portrait: {width: 67.5, height: 84.375},
  story: {width: 67.5, height: 120},
  avatar: {width: 67.5, height: 67.5}
}

export const positions: {id: ID; value: Positions}[] = [
  {id: 0, value: "top"},
  {id: 1, value: "middle"},
  {id: 2, value: "bottom"}
]

export const positionsClasses: {[key: string]: PositionsClasses} = {
  top: "mb-auto",
  middle: "my-auto",
  bottom: "mt-auto"
}

export const aligns: {id: ID; value: Aligns}[] = [
  {id: 0, value: "left"},
  {id: 1, value: "center"},
  {id: 2, value: "right"}
]

export const alignsClasses: {[key: string]: AlignsClasses} = {
  left: "text-left mr-auto",
  center: "text-center mx-auto",
  right: "text-right ml-auto"
}

export const backgrounds: {id: ID; value: Backgrounds}[] = [
  {id: 0, value: "primary"},
  {id: 1, value: "secondary"},
  {id: 2, value: "dark"},
  {id: 3, value: "light"}
]

export const backgroundsClasses: {[key: string]: BackgroundsClasses} = {
  primary: "bg-red-300",
  secondary: "bg-violet-300",
  dark: "bg-stone-950",
  light: "bg-stone-50"
}

export const textsClasses: {[key: string]: TextsClasses} = {
  primary: "text-red-300",
  secondary: "text-violet-300",
  dark: "text-stone-950",
  light: "text-stone-50"
}
