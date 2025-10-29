const parent=document.getElementById("parent");
console.log(parent);

const root=ReactDOM.createRoot(parent);
const h2=React.createElement("h2",{style:{color:"aquamarine",backgroundColor:"black"}},"Welcome to React App");

//JSX
const nam=<h2>Ankit Yadav</h2>
const branch=<h2>CS-B</h2>
const pic=<img src="https://wallpaperaccess.com/full/682452.jpg" style={{width:"100px",height:"100px",borderRadius:"10px", marginTop:"10px"}}/>
const college=<h2>ABES Engineering College</h2>
const container=(
    <div style={{display:"grid", placeItems:"center", border:"3px solid black", backgroundColor:"lightblue"}}>
        {pic}
        {nam}
        {branch}
        {college}
        
    </div>
)

root.render(container);