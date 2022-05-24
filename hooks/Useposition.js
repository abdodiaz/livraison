import * as Location from 'expo-location';
import { useEffect ,useState } from 'react';

const Useposstion = () => {

const [errorMessage, setErrorMessage] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

useEffect(() => {
  load()
},[latitude, longitude]);


  const load = async () => {

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage('Access to location is needed to run this app');
        return
      }
      const location = await Location.getCurrentPositionAsync();

      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    } catch (error) {

      setErrorMessage(error.message);
    }
  }
 return [latitude, longitude, errorMessage];
}
export default Useposstion;