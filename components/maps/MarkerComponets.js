
import React from 'react'
import MapView from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CalloutComponents from './CalloutComponents';

export default function MarkerComponents(props) {
    const { latitude, longitude } = props;
    typeof (latitude, longitude)
    if (latitude && longitude) {
        return (
            <>
                <MapView.Marker
                    title="Scouter"
                    description="Scouter"
                    coordinate={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <MaterialCommunityIcons name="scooter" size={50} color="black" />
                    <CalloutComponents />
                </MapView.Marker>
            </>
        )
    }

}

