import React, {useEffect} from 'react';
import {Link, Navigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import NotAuthorized from '../components/NotAuthorized';
import VoterProfile from '../components/Dashboard/VoterProfile';
import Loading from '../components/Loading';

function Dashboard() {

    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect({
                appState: {
                    targetUrl: window.location.href,
                },
            });
        }
    }, [isLoading, isAuthenticated]);

    if (isLoading || !isAuthenticated) {
        return <Loading loading={isLoading} size="large" />;
    }

    return (
        <div><h1 class="text-5xl font-bold mx-48 mt-32 font-mono">Dashboard</h1>
           <VoterProfile />
        </div>

    );
}

export default Dashboard;