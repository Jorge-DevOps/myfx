
type MenuItemProps = {  
    title: string;
    icon?: string;
    link: string;
    active?: boolean;
}


export const MenuItem = ({title,active,icon,link }: MenuItemProps) => {
    return (
        <div className="menu_item"> 
            <div className="menu_item_title">
                <a href={link}>
                    {title}
                </a>
            </div>

        </div>
    )

}