// DONE REVIEWING: GITHUB COMMIT ⚠️
import {Dispatch, SetStateAction} from "react"

/* eslint no-unused-vars: "off" */
export type Dimensions = "square" | "landscape" | "portrait"
export type DimensionsClasses = {width: 67.5; height: 35.375 | 67.5 | 84.375}

export type Positions = "top" | "middle" | "bottom"
export type PositionsClasses = "mt-auto" | "my-auto" | "mb-auto"

export type Aligns = "left" | "center" | "right"
export type AlignsClasses =
  | "text-left mr-auto"
  | "text-center mx-auto"
  | "text-right ml-auto"

export type Backgrounds = "primary" | "secondary" | "dark" | "light" | "image"
export type BackgroundsClasses =
  | "bg-red-300"
  | "bg-violet-300"
  | "bg-stone-950"
  | "bg-stone-50"

export type TextsClasses =
  | "text-red-300"
  | "text-violet-300"
  | "text-stone-950"
  | "text-stone-50"

export type Values = string | null
export type Heading = {
  position: Positions
  align: Aligns
  value: Values
  background: Backgrounds
  color: Backgrounds
}

export type ID = string | number
export type IsBackgroundImage = boolean | string

export interface IContext {
  id: ID
  dimension: Dimensions
  setDimension: (dimension: Dimensions) => void
  background: Backgrounds
  setBackground: Dispatch<SetStateAction<Backgrounds>>
  isBackgroundImage: IsBackgroundImage
  setIsBackgroundImage: Dispatch<SetStateAction<IsBackgroundImage>>
  heading: Heading
  setHeading: Dispatch<SetStateAction<Heading>>
}
