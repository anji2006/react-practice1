import Card from "./Card"


const Techonlogy = () => {
    const data = [
        {
            title : "Data scientist",
            descriptioin: "he will work with data and sql..."
        },
        {
            title : "Iot Devloper",
            descriptioin: "he will work with data and sql..."
        },
        {
            title : "VR developer",
            descriptioin: "he will work with data and sql..."
        },
        {
            title : "ML Engineer",
            descriptioin: "He is expertize in ml"
        }
    ]
    return(
        <div>
            <h1> Techonlogy Cards</h1>
            {/* <Card data={data[0]} />
            <Card data={data[1]}/>
            <Card data={data[2]}/>
            <Card data={data[3]}/> */}
            {data.map(each => <Card key={each.title} data={each} />)}
        </div>
    )
}

export default Techonlogy