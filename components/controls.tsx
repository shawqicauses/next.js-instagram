// DONE REVIEWING: GITHUB COMMIT 🛰️
import DomToImage from "dom-to-image"
import {useContext} from "react"
import {aligns, backgrounds, dimensions, positions} from "../helpers/data"
import {Context} from "./frame"
import {List} from "./list"

export const Controls = function Controls() {
  const {
    id,
    dimension,
    setDimension,
    background,
    setBackground,
    isBackgroundImage,
    setIsBackgroundImage,
    heading,
    setHeading
  } = useContext(Context)

  const pngDownload = function pngDownload() {
    const node = document.getElementById(id.toString()) as Node
    DomToImage.toPng(node).then((value) => {
      const anchorElement = document.createElement("a")
      anchorElement.href = value
      anchorElement.download = id.toString()
      anchorElement.click()
    })
  }

  return (
    <div dir="ltr" className="sh-flex-col !gap-5">
      <h2 className="text-xl-2 font-bold leading-none">Controls</h2>
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        <div className="sh-flex-col flex-1">
          <h3 className="text-lg font-normal leading-none text-stone-950">
            Dimension
          </h3>
          <List
            options={dimensions}
            compare={dimension}
            action={setDimension}
          />
        </div>
        <div className="sh-flex-col flex-1">
          <h3 className="text-lg font-normal leading-none text-stone-950">
            Heading
          </h3>
          <div className="w-full">
            <textarea
              id="heading-value"
              name="heading-value"
              rows={8}
              className="input w-full"
              onChange={({currentTarget: {value}}) =>
                setHeading((previous) => ({...previous, value}))
              }
            />
          </div>
          <List
            options={positions}
            compare={heading.position}
            action={(value) => {
              setHeading((previous) => ({
                ...previous,
                position: value
              }))
            }}
          />
          <List
            options={aligns}
            compare={heading.align}
            action={(value) => {
              setHeading((previous) => ({
                ...previous,
                align: value
              }))
            }}
          />
          <List
            options={backgrounds}
            compare={heading.background}
            action={(value) => {
              setHeading((previous) => ({
                ...previous,
                background: value
              }))
            }}
          />
          <List
            options={backgrounds}
            compare={heading.color}
            action={(value) => {
              setHeading((previous) => ({
                ...previous,
                color: value
              }))
            }}
          />
        </div>
        <div className="sh-flex-col flex-1">
          <h3 className="text-lg font-normal leading-none text-stone-950">
            Background
          </h3>
          <List
            options={backgrounds}
            compare={background}
            action={(value) => {
              setBackground(value)
              setIsBackgroundImage(false)
            }}
          />
          <div className="sh-flex !w-max">
            <input
              type="checkbox"
              id="is-background-image"
              name="is-background-image"
              checked={Boolean(isBackgroundImage)}
              onChange={({currentTarget: {checked}}) => {
                setIsBackgroundImage(checked)
              }}
            />
            <label htmlFor="is-background-image">Image</label>
          </div>
          {isBackgroundImage ? (
            <div>
              <input
                type="file"
                id="background-image"
                name="background-image"
                onChange={({currentTarget: {files}}) => {
                  if (files)
                    if (files[0])
                      setBackground(URL.createObjectURL(files[0]) as "image")
                }}
              />
            </div>
          ) : null}
        </div>
        <div className="sh-flex-col flex-1">
          <h3 className="text-lg font-normal leading-none text-stone-950">
            Download
          </h3>
          <ul className="sh-flex-start">
            <li>
              <button
                type="button"
                className="button button-secondary"
                onClick={pngDownload}>
                PNG
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
