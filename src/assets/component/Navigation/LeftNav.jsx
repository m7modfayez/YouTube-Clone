import NavItem from "./NavItem";
export default function LeftNav() {
    return(
        <div className="left-navigation">
            {/* <nav> */}
            
            <NavItem iconName={"Home"} icon={<i class="material-icons">home</i>}/>
            <NavItem iconName={"Shorts"} icon={<i class="material-icons">play_circle_outline</i>} />
            <NavItem iconName={"Explore"} icon={<i class="material-icons-outlined">explore</i>} />
            <NavItem iconName={"Subscriptions"} icon={<i class="material-icons-outlined">subscriptions</i>} />
            <hr className="hr"/>
            <span style={{display: "flex" , marginLeft:"25px", cursor:"pointer"}} ><span style={{marginTop: "4px"}} >You</span>  <i style={{margin: "0px 0px 12px 5px",}} class="material-icons-outlined">chevron_right</i></span>

            {/* <NavItem iconName={"Your Videos"} icon={<i class="material-icons-outlined">ondemand_video</i>} /> */}
          
            <NavItem iconName={"Your channel"} icon={<i class="material-icons">person</i>} />
            <NavItem iconName={"history"} icon={<i class="material-icons">history</i>} />
            {/* <NavItem iconName={"Your videos"} icon={<i class="material-icons">smart_display</i>} /> */}
            <NavItem iconName={"Your videos"} icon={<i class="material-icons">play_circle_outline</i>} />
            <NavItem iconName={"Watch later"} icon={<i class="material-icons">schedule</i>} />
            <NavItem iconName={"Show more"} icon={<i style={{color:"#4e4e4e" }} class="material-icons">expand_more</i>} />
            <hr/>
            

        </div>

    );
}