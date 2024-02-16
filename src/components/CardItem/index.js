import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem

// Write your code here.
/*import './index.css'

const BannerCardItem = props => {
  const {bannerCard} = props
  const {title, description, imgUrl, className} = bannerCard
  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
        <img src={imgUrl} className="imaaaaa" />
      </div>
    </li>
  )
}

export default BannerCardItem

import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
*/
