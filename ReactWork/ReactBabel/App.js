const parent=document.getElementById("parent");
// console.log(parent);

const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:"aquamarine",backgroundColor:"black"}},"Welcome to React App");
// root.render(h2);

// const li1=React.createElement("li",{},"Java");
// const li2=React.createElement("li",{},"Python");
// const li3=React.createElement("li",{},"React");
// const ul=React.createElement("ul",{style:{color:"White",backgroundColor:"black"}},[li1,li2,li3]);


// const pic=React.createElement(
// 	"img",
// 	{
// 		src: "https://wallpaperaccess.com/full/682452.jpg",
// 		style: {width:"500px",height:"300px",borderRadius:"10px",marginTop:"20px"}
// 	}
// );
// const myname=React.createElement("h3",{style:{padding:"20px",paddingTop:"50px"}},"Ankit Yadav");
// root.render(myname);
// root.render(pic);    
// const container=React.createElement("div",{style:{display:"flex"}},[pic,myname]);


// const wrapper=React.createElement("div",{style:{padding:"20px"}},[h2,container,ul]);

//JSX

const h2=<h1>Hello using JSX</h1>
const li1=<li>Java</li>;
const li2=<li>Python</li>;
const li3=<li>React</li>;
const li=<ul>{[li1,li2,li3]}</ul>;
const container=(
    <>
    {h2}
    {li}

    </>
)


root.render(h2);
root.render(container);
// root.render(wrapper);

