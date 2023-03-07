import "./Dashboard.css"
import { ImStatsBars } from "react-icons/im";
import { MdLocalLibrary, MdMoreVert, MdMenu} from "react-icons/md";
import { Link } from "react-router-dom";
const Dashboard=()=>{
    return(
        <div>
            <div className="ui center aligned segment">
            <h2 className="ui center aligned header">Hashim's Dashboard</h2>
            </div>

            <div className="ui vertical menu">
           <div className="menuHead"><h3>Menu</h3></div>
            <Link to="/stats" className="teal item"><ImStatsBars/>&nbsp;&nbsp;&nbsp;Stats</Link>
            <Link to="/book" className="item"><MdLocalLibrary/>&nbsp;&nbsp;&nbsp;Book Consultant</Link>
            <Link to="/more" className="item"><MdMoreVert/>&nbsp;&nbsp;&nbsp;More</Link>
            </div>

            <div className="ui vertical menu responsivex">
           <div className="menuHead"><MdMenu/></div>
            <Link to="/stats" className="teal item"><ImStatsBars/></Link>
            <Link to="/book" className="item"><MdLocalLibrary/></Link>
            <Link to="/more" className="item"><MdMoreVert/></Link>
            </div>
        </div>
       
    )
};
export default Dashboard;