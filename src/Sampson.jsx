import img from "./gray.png";

function Sampson () {
    return (
        <>
        <div className = "name">Meet Sampson Huang</div>
        <br/>
        <div>
            <img className = "photo" src = {img}/>
        </div>
        <br/>
        <br/>
        <div>
            <button className = "btn">About me</button>
            <button className = "btn">Background Information</button>
            <button className = "btn">Experience</button>
            <button className = "btn">Hobbies</button>
        </div>
        
        </>
    )
}

export default Sampson;