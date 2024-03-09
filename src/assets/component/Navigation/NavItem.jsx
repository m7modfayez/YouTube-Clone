export default function NavItem({icon, iconName}) {
    return(
        <div className="nav-item">
            <a href="#">
            {icon}
            <span>{iconName}</span>
            </a>
        </div>
        
    );
}