export default function NavItem({icon, iconName, url}) {
    return(
        <div className="nav-item">
            <a target="_blank" href={url}>
            {icon} 
            <span>{iconName}</span>
            </a>
        </div>
        
    );
}