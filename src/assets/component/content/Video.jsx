export default function Video({videoLink, vImg, chImg,vidTitle, chName, churl, views}) {
    return (
        <div className="video">
            <a target="_blank" href={videoLink}>
            <img src={vImg}></img>
            <div className="prop">
                <a target="_blank" href={churl}> <img src={chImg}></img> </a>
                <div className="info">
                    <p>{vidTitle}</p>
                    <div className="ch-name">
                      <a href={churl} target="_blank" ><span className="">{chName}</span></a>
                      <br/>
                      <span className="">{views}</span>
                    </div>

                </div>

            </div>
        </a>
        </div>
    );
}