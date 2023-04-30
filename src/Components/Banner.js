
const imgName = require('./imgs/back4.jpg');
// const img1 = require('./imgs/c1.jfif');
// const img2 = require('./imgs/a2.jpg');
// const img3 = require('./imgs/a3.jpg')
const Banner = () =>
{
    return(
        <div style={{
            width:"100%",
            background:`url(${imgName})`,
            height:"600px",
            display:"flex",
            flexDirection:"column",
            textAlign:"center",
            backgroundRepeat:"no-repeat"

        }}>
            <h1 style={{color:"white",fontSize:"50px"}}>Webtoon all in one <br/>Place</h1>
            <div style={{width:"100%",flexDirection:"row",
                        justifyContent:"space-around"}}>
                            {/* <img src={img1}></img> */}
                            {/* <img src={img2}/>
                            <img src={img3}/> */}
                        </div>
        </div>
    )
}

export default Banner;