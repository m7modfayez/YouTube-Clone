export default function Header() {
    return(
    
    <header className="head">
        <div className="left">
          <i class="material-icons">menu</i>
          <img className="icon" src="https://res.cloudinary.com/dbltmxwep/image/upload/v1709744669/youtube%20clone/hvo54qm2cvzqcna4siyz.png" alt=""></img>
        </div>
        <div className="mid">
            <input type="text" placeholder="Search"></input>
            <button><i class="material-icons">search</i></button>
            <i class="material-icons mic">mic</i>
        </div>
        <div className="right">
          <a href="#"><i class="material-icons icons">video_call</i></a>
          <a href="#"><i class="material-icons icons">notifications</i></a>
          <a href="#"><img style={{width: "33px", borderRadius: "100%"}} src="https://yt3.ggpht.com/yti/ANjgQV_3E4YLw_XNhIYu-Th7ysf2pxRMjolJ60dJEokLHA=s88-c-k-c0x00ffffff-no-rj" alt=""></img> </a>
        </div>
    </header> 
    );
}