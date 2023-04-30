// import faker from "faker";
// import diamond from "../imgs/diamond.png"

const imgName = require('./imgs/diamond.png')
const Header = ()=>{
    return (
        
        <div style={{width:"100%",
        height:"10%",
        background:"linear-gradient(135deg  , purple , mediumpurple)",
        marginTop:"0px",
        marginBottom:"5px"
        
}}>
    <div style={{
        display:"flex",
        flexDirection:"row",
        justifyItems:"center"
        
        
    }}>
        <img src={imgName} style={{width:"60px" , height:"70px" , marginLeft:"30px", marginTop:"10px" }}/>
            <ul style={{listStyleType:"none",color:"white",marginLeft:"0px"}}>
                <li style={{fontSize:"30px"}}>Online Shopping</li>
                <li>All Products In One Place</li>
            </ul>
    </div>
       
            
            
            
            <h3 style={{color:"white" ,alignItems:"center",display:"flex",
             flexDirection:"column-reverse", paddingBottom:"20px",margin:"0px"}}>
        Amazing things will happen when listen to the consumer</h3>
            
    </div>
   
    
    )
}

export default Header;