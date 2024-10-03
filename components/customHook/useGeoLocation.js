import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        cordinates: { lat: "", lng: "",}
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            cordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            error,
        });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

  return location;
};

export default useGeoLocation;
