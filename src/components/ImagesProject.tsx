import ImageProject from "./ImageProject"

function ImagesProject() {
  return (
    <div className="images">
      {
        [1, 2, 3].map(i =>
          <div key={i} className={`images__image images__image--${i}`}>
            <ImageProject />
          </div>
        )
      }
    </div>
  )
}
export default ImagesProject