

function Card(props){
    const {data} = props
    const {title, descriptioin} = data
    return (
        <div>
            <h2>{title}</h2>
            <p>{descriptioin}</p>
        </div>
    )
}

export default Card