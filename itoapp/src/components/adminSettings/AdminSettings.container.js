import React from 'react';
import AdminSettings from './AdminSettings.component';
import './AdminSettings.scss'

export default function AdminSettingsContainer() {
    return (
        <div className="AdminSettingsContainer">
            <h1 className="uk-text-center">Account Settings</h1>
            <AdminSettings />
        </div>
    )
}