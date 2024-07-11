import './index.css'

const TextItem = (props) => {
    const {text, color} = props
    return(
        <div style={{background: color}} className="notification-item">
            <p> {text}</p>
        </div>
    )
}

export default TextItem