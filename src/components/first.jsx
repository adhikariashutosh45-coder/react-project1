function First(props){
    return (
        <div className="first">
            <img className="img"src={props.img} alt={props.name} />
            <h1>My name is {props.name}</h1>
            <h2>Age : {props.age}</h2>
            <p>lorem ipsum dolor sit amet</p>
            <button className="bg-blue-400 py-2 px-4 rounded text-white">View Profile</button>
        </div>
    )
}

export default First;