// DONE REVIEWING: GITHUB COMMIT ⚠️
import {Dispatch, SetStateAction} from "react"
import {ID} from "../types/frame"

export interface IListProps {
  options: {id: ID; value: any}[]
  compare: string
  action: Dispatch<SetStateAction<any>>
}

export const List = function List({options, compare, action}: IListProps) {
  return (
    <ul className="sh-flex-start">
      {options.map((element) => (
        <li key={element.id}>
          <button
            type="button"
            className={[
              "button capitalize",
              element.value === compare ? "button-primary" : "button-secondary"
            ].join(" ")}
            onClick={() => action(element.value)}>
            {element.value}
          </button>
        </li>
      ))}
    </ul>
  )
}
