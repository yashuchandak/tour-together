import "./CardGuide.css";

const CardGuide=({guide})=>{
    console.log(guide);
    return(
        <div className="card">
            <div className="myflexdivsb">
                <div>
                    <strong>{guide.username}</strong>
                </div>
            </div>
            <br></br>
            <span>Name  &emsp; &emsp; &emsp; &emsp; &nbsp; : {guide.name}</span>
            <br/><br/>
            <span>City &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp;: {guide.city}</span>
            <br/><br/>
            <span>Known Languages : {guide.languages}</span>
            <br/><br/>
            <span>Mobile Number &emsp;  : {guide.mobile}</span>
            <br/><br/>
            <span>Fees  &emsp; &emsp; &emsp; &emsp; &ensp; &nbsp;: {guide.fees}</span>
            <br/><br/>
            <span>Instagram Id  &emsp; &emsp; : {guide.insta_username}</span>
            <br/><br/>

            {/* <div className="myflexdivsa"> */}
                {/* <div>
                    <span>yash &nbsp;&nbsp; TO &nbsp;&nbsp; yash</span>
                </div> */}
                
                {/* <span>yash<span>&nbsp;Days</span></span> */}
                {/* <span><span>&#8377;</span>&nbsp;yash</span> */}
            {/* </div> */}
            {/* <br></br>
            <pre>
                yash
            </pre>
            <br></br>
            <div>
                yash
            </div> */}
        </div>

    );
}

export default CardGuide;