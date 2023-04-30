import Details from "./Details"

export default function Product(props){
    return (
        <div style={{
            // display:"flex",
            // flexDirection:"column",
            width:"20%",
            // justifyContent:"space-between",
            alignItems:"center",
            gap:"20px",
            border:"0.5px solid gray",
            textAlign:"center",
            margin:"10px"
        }}>
            
            <img src={props.img} style={{
                height:"200px",
                width:"100%",
            }}/>
            <h3 style={{
                color:"royalblue",
                height:"90px"
            }}>{props.title}</h3>
            <h4 style={{
                fontWeight:"normal",
                color:"gray"
            }}>Price : {props.price} $</h4>
            <a href=""  style={{
                textDecoration:"none",
                fontSize:"18px",
                color:"gray",
                fontWeight:"normal",
               
                
            }}>see details</a>
        </div>
    )
}