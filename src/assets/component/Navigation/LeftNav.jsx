import NavItem from "./NavItem";
import { useState } from 'react'
import Subscriptions from "./Subscriptions";
export default function LeftNav({isNavOpen}) {


    const [listExpand, setListExpand] = useState(false);

    const listexpandOnClk = () => {
        setListExpand(!listExpand);
    }

    const [subscripExpand, setSubscripExpand] = useState(false);

    const subscripExpandOnClk = () => {
        setSubscripExpand(!subscripExpand);
    }

    return(
        <div style={{ display: isNavOpen? "" : "none" }} className="left-navigation">
            {/* <nav> */}
            <div>
            <NavItem iconName={"Home"} icon={<i class="material-icons">home</i>}/>
            <NavItem iconName={"Shorts"} icon={<i class="material-icons">play_circle_outline</i>} />
            <NavItem iconName={"Explore"} icon={<i class="material-icons-outlined">explore</i>} />
            <NavItem iconName={"Subscriptions"} icon={<i class="material-icons-outlined">subscriptions</i>} />
            <hr className="hr"/>
            </div>

            
            <NavItem url={"https://www.youtube.com/feed/you"} iconName={""} icon={<i style={{display: "flex", marginRight: "20px"}} class="material-icons-outlined"> <span style={{margin: "4px", fontSize: "16px"}}> <b>You</b> </span> chevron_right</i>} />

          <div style={{maxHeight: listExpand? "" : "180px",height: "auto", overflowY: "hidden"}}>
            <NavItem iconName={"Your channel"} icon={<i class="material-icons">person</i>} />
            <NavItem iconName={"history"} icon={<i class="material-icons">history</i>} />
            <NavItem iconName={"Your videos"} icon={<i class="material-icons">play_circle_outline</i>} />
            <NavItem iconName={"Watch later"} icon={<i class="material-icons">schedule</i>} />

            {/* playlists  */}
            <NavItem iconName={"Learn CSS In Arabic 2021"} url={"https://www.youtube.com/playlist?list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe"} icon={<i class="material-icons">playlist_play</i>} />
            <NavItem iconName={"السيرة النبوية"} url={"https://www.youtube.com/playlist?list=PL1i_D1Vw3d5MJuAkduJ6TaiGEVac6GePK"} icon={<i class="material-icons">playlist_play</i>} />
            <NavItem iconName={"Computer Modeling & Simulation"} url={"https://www.youtube.com/playlist?list=PLgIcgtYuFpGTJ-R5ROmHsZyXr9rPqDdby"} icon={<i class="material-icons">playlist_play</i>} />
            <NavItem iconName={"Operating Systems"} url={"https://www.youtube.com/playlist?list=PL6KMWPQP_DM-7tMNjUa7X2zGrc8jipPeI"} icon={<i class="material-icons">playlist_play</i>} />
            <NavItem iconName={"React 18 Tutorial"} url={"https://www.youtube.com/playlist?list=PLnHJACx3NwAep5koWkniVHw8PK7dWCO21"} icon={<i class="material-icons">playlist_play</i>} />
            <NavItem iconName={"Learn JavaScript in Arabic 2021"} url={"https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv"} icon={<i class="material-icons">playlist_play</i>} />
            <NavItem iconName={"MS SQL Server For Beginners"} url={"https://www.youtube.com/playlist?list=PL1DUmTEdeA6J6oDLTveTt4Z7E5qEfFluE"} icon={<i class="material-icons">playlist_play</i>} />

            


            </div >
            <button onClick={listexpandOnClk} style={{backgroundColor: "white", border: "none", padding: "0", marginBottom: "" , width: "100%"}}>
            <NavItem iconName={ listExpand? "Show less" : "Show more"} icon={<i style={{color:"#4e4e4e" }} class="material-icons">{listExpand? "expand_less" : "expand_more" } </i>} />
            </button>
            <hr/>

            <p style={{margin: "0 0  3px 21px", fontSize: "16px"}}><b>Subscriptions</b></p>
            
           <div style={{maxHeight: subscripExpand ? "" : "284px", height: "auto", overflowY: "hidden"}}>

            {
                Subscriptions.map(subscription => (
                    <NavItem iconName={subscription.name} icon={<img src={subscription.imageURL}/>} url={subscription.channelURL} />
                ))

            }
        

           </div>

           <button onClick={subscripExpandOnClk} style={{backgroundColor: "white", border: "none", padding: "0", marginTop: "" , width: "100%"}}>
            <NavItem iconName={ subscripExpand? "Show less" : "Show more"} icon={<i style={{color:"#4e4e4e" }} class="material-icons">{subscripExpand? "expand_less" : "expand_more" } </i>} />
            </button>
            <hr/>


        </div>

    );
}