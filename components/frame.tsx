// DONE REVIEWING: GITHUB COMMIT 🔓
import {ReactElement, createContext, useContext, useMemo, useState} from "react"
import {
  alignsClasses,
  backgroundsClasses,
  dimensionsClasses,
  positionsClasses,
  textsClasses
} from "../helpers/data"
import {
  Backgrounds,
  Dimensions,
  Heading as HeadingType,
  IContext,
  ID,
  IsBackgroundImage
} from "../types/frame"
import {Controls} from "./controls"

export const Context = createContext({
  dimension: "square",
  background: "dark",
  isBackgroundImage: false,
  heading: {
    position: "middle",
    align: "center",
    value: null,
    background: "light",
    color: "dark"
  }
} as IContext)

interface IFrameProps {
  id: ID
  children: ReactElement
}

export const Frame = function Frame({id, children}: IFrameProps) {
  const [dimension, setDimension] = useState<Dimensions>("square")
  const [background, setBackground] = useState<Backgrounds>("dark")
  const [isBackgroundImage, setIsBackgroundImage] =
    useState<IsBackgroundImage>(false)
  const [heading, setHeading] = useState<HeadingType>({
    position: "middle",
    align: "center",
    value: null,
    background: "light",
    color: "dark"
  })

  const value = useMemo(
    () => ({
      id,
      dimension,
      setDimension,
      background,
      setBackground,
      isBackgroundImage,
      setIsBackgroundImage,
      heading,
      setHeading
    }),
    [
      id,
      dimension,
      setDimension,
      background,
      setBackground,
      isBackgroundImage,
      setIsBackgroundImage,
      heading,
      setHeading
    ]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

interface IPostProps {
  children: ReactElement
}

const Post = function Post({children}: IPostProps) {
  const {id, dimension, background, isBackgroundImage} = useContext(Context)
  return (
    <div className="sh-flex mx-auto !w-max border border-stone-200">
      <div
        id={id.toString()}
        className={[
          "relative flex flex-col items-center justify-center overflow-hidden",
          !isBackgroundImage
            ? backgroundsClasses[background]
            : "bg-cover bg-center bg-no-repeat"
        ].join(" ")}
        style={{
          width: dimensionsClasses[dimension].width * 16,
          height: dimensionsClasses[dimension].height * 16,
          ...(isBackgroundImage ? {backgroundImage: `url(${background})`} : {})
        }}>
        {children}
      </div>
    </div>
  )
}

interface IContentProps {
  children: ReactElement
}

const Content = function Content({children}: IContentProps) {
  const {dimension, background, isBackgroundImage} = useContext(Context)
  const classes = `relative z-20 flex h-full max-h-[49.375rem] w-full ${
    dimension === "story" ? "max-w-full" : "max-w-[55rem]"
  } flex-col items-center justify-center gap-10 p-[calc(2.5rem-0.125rem)]`

  return isBackgroundImage ? (
    <div
      className={[
        classes,
        dimension === "landscape" ? "border-x-2" : "border-2",
        "border-white bg-cover bg-center bg-no-repeat grayscale"
      ].join(" ")}
      style={{backgroundImage: `url(${background})`}}>
      {children}
    </div>
  ) : (
    <div className={classes}>{children}</div>
  )
}

const Heading = function Heading() {
  const {dimension, heading} = useContext(Context)
  const fontClasses =
    dimension === "avatar"
      ? "font-semi-bold text-[20rem] leading-none"
      : dimension === "story"
      ? "font-medium text-xl-6 leading-[2]"
      : "font-bold text-xl-7 leading-[9rem]"

  return heading.value ? (
    <h1
      className={[
        "bg-text",
        textsClasses[heading.color],
        positionsClasses[heading.position],
        alignsClasses[heading.align],
        fontClasses
      ].join(" ")}>
      <span
        className={[
          "decoration-clone px-5 py-2 text-current",
          backgroundsClasses[heading.background]
        ].join(" ")}>
        {heading.value}
      </span>
    </h1>
  ) : null
}

const Dimension = function Dimension() {
  const {dimension} = useContext(Context)
  return (
    <p className="my-5 text-center font-medium leading-none text-stone-950">
      W: {dimensionsClasses[dimension].width * 16} / H:{" "}
      {dimensionsClasses[dimension].height * 16}
    </p>
  )
}

Frame.Controls = Controls
Frame.Post = Post
Frame.Dimension = Dimension
Post.Content = Content
Post.Heading = Heading

export default Frame
