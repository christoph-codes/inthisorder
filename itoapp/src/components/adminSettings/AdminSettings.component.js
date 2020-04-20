import React, { useContext } from "react";
import { AuthContext } from "../auth/Auth";

export default function AdminSettings() {
    
  const { userData } = useContext(AuthContext);

    return (
        <div className="AdminSettings">
            <div className="uk-container uk-text-center">
                <div className="uk-grid">
                    <div className="uk-width-1-2">
                        <p>Family Name</p>
                    </div>
                    <div className="uk-width-1-2">
                        <p>{userData.familyname}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}