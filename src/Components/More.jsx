import { useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";
import "./More.css";
const More=()=>{
    const navigate=useNavigate();
const onLogoutClick=()=>{
    navigate("/");
}

    return (
        <div>
            <Dashboard/>
            
            <div className="ui centered card c2">
                <div className="moreButtonSection">
                    <button onClick={onLogoutClick} className="negative ui button">Logout</button><br/>
                    <button className="primary ui button">Contact</button><br/>
                    <button className="primary ui button">About</button>
                </div>
              
            </div>
        </div>
    )
};
export default More;