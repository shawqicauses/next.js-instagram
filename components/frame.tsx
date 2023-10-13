// DONE REVIEWING: GITHUB COMMIT ⚔️
import {ReactElement, createContext, useContext, useMemo} from "react"

const Context = createContext({width: 67.5, height: 67.5} as {
  width: number
  height: number
})

interface IFrameProps {
  dimension?: "square" | "landscape" | "portrait"
  children: ReactElement
}

export const Frame = function Frame({
  dimension = "square",
  children
}: IFrameProps) {
  const width = 67.5
  const height =
    dimension === "landscape"
      ? 35.375
      : dimension === "portrait"
      ? 84.375
      : 67.5

  const value = useMemo(() => ({width, height}), [width, height])
  return <Context.Provider value={value}>{children}</Context.Provider>
}

interface IPostProps {
  background?: "primary" | "secondary" | "dark" | "light" | string
  children: ReactElement
}

const Post = function Post({background = "dark", children}: IPostProps) {
  const {width, height} = useContext(Context)
  const backgrounds: {[key: string]: string} = {
    primary: "bg-red-600",
    secondary: "bg-violet-600",
    dark: "bg-stone-950",
    light: "bg-stone-50"
  }

  const isBackgroundImage = !Object.keys(backgrounds).includes(background)
  return (
    <div
      className={[
        "relative flex flex-col items-center justify-center overflow-hidden",
        !isBackgroundImage
          ? backgrounds[background]
          : "bg-cover bg-center bg-no-repeat"
      ].join(" ")}
      style={{
        width: width * 16,
        height: height * 16,
        ...(isBackgroundImage ? {backgroundImage: `url(${background})`} : {})
      }}>
      {children}
    </div>
  )
}

interface IOverlayProps {
  opacity?: 25 | 50 | 75
}

const Overlay = function Overlay({opacity = 25}: IOverlayProps) {
  const opacities: {[key: number]: string} = {
    25: "bg-stone-950/25",
    50: "bg-stone-950/50",
    75: "bg-stone-950/75"
  }

  return (
    <div
      className={[
        "absolute top-0 left-0 right-0 bottom-0 z-10 h-full w-full",
        opacities[opacity]
      ].join(" ")}
    />
  )
}

interface IContentProps {
  children: ReactElement
}

const Content = function Content({children}: IContentProps) {
  return (
    <div className="relative z-20 flex h-full max-h-[49.375rem] w-full max-w-[55rem] flex-col items-center justify-center gap-10 border-2 border-white p-[calc(2.5rem-0.125rem)] backdrop-grayscale">
      {children}
    </div>
  )
}

interface IHeadingProps {
  position?: "top" | "middle" | "bottom"
  text: string
}

const Heading = function Heading({position = "middle", text}: IHeadingProps) {
  const positions: {[key: string]: string} = {
    top: "mb-auto",
    middle: "my-auto",
    bottom: "mt-auto"
  }

  return (
    <h1
      className={[
        "bg-text text-stone-950 text-center text-xl-7 font-black leading-relaxed",
        positions[position]
      ].join(" ")}>
      <span className="bg-white decoration-clone px-5 py-2 text-current">
        {text}
      </span>
    </h1>
  )
}

const Dimension = function Dimension() {
  const {width, height} = useContext(Context)
  return (
    <p className="text-stone-950 font-medium leading-none">
      W: {width * 16} / H: {height * 16}
    </p>
  )
}

Frame.defaultProps = {dimension: "square"}
Post.defaultProps = {background: "dark"}
Overlay.defaultProps = {opacity: 25}
Heading.defaultProps = {position: "middle"}

Frame.Post = Post
Frame.Dimension = Dimension
Post.Overlay = Overlay
Post.Content = Content
Post.Heading = Heading

export default Frame
