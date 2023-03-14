import "./SingleCard.css"

const ipath = process.env.PUBLIC_URL

export default function SingleCard() {
    return (
        <div className="card">
        <img src={ipath+'/img/deckblatt.png'} />
        </div>
    )
}