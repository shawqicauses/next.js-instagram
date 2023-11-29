// DONE REVIEWING: GITHUB COMMIT ♾️
import {Fragment} from "react"
import {Frame} from "../components/frame"

const IndexPage = function IndexPage() {
  return (
    <main>
      <div className="container mx-auto px-3 py-5">
        <div className="sh-flex h-full w-full flex-col">
          <Frame id="instagram-post">
            <Fragment>
              <Frame.Controls />
              <div className="sh-flex h-full w-full flex-col overflow-scroll">
                <Frame.Post>
                  <Frame.Post.Content>
                    <Frame.Post.Heading />
                  </Frame.Post.Content>
                </Frame.Post>
                <Frame.Dimension />
              </div>
            </Fragment>
          </Frame>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
