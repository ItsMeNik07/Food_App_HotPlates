import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterComponent(props){
    const ReactIcon = props.reactIcon;
    return(
        <div className="flex space-x-2 flex-wrap text-md cursor-pointer">
            {props.icon?<FontAwesomeIcon icon = {props.icon} className="mt-[3px]"/>:""}
            {ReactIcon?<ReactIcon className="mt-[3px]"/>:""}
            <p className="text-wrap break-words w-28 md:w-auto hover:underline transition-all ease-in-out duration-300 hover:text-red-600">{props.title}</p>
        </div>
    )
}

export default FooterComponent;