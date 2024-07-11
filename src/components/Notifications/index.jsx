import TextItem from "./TextItem"

const Notification = () => {
    return(
        <div>
            <h1> Notifications</h1>
            <TextItem text="success" color="green" />
            <TextItem text="Error" color="red" />
            <TextItem text="Warning" color="yellow" />
            <TextItem text="Info" color="blue" />
        </div>
    )
}

export default Notification