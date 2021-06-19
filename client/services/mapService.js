import * as Location from "expo-location";
import { region$, bounds$, marker$ } from "./stateService";
import { updateMarkersWithinBounds } from "./markerService";
import { reverseGeocodeAsync } from "expo-location";

// above this zoom level, don't show markers
export const maxZoom = 0.022;

//max distance from the current region to load icons from
export const maxDistance = 3000;

export function getBounds({ latitude, longitude }) {
  const side = maxDistance / 2;

  return {
    minLatitude: latitude - side,
    maxLatitude: latitude + side,
    minLongitude: longitude - side,
    maxLongitude: longitude + side,
  };
}

export async function hasLocationPermission() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    return false;
  }
  return true;
}

export async function getUserLocation() {
  const { coords } = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.High,
  });
  return coords;
}

export async function setupMarkers() {
  const hasPermission = await hasLocationPermission();
  if (!hasPermission) {
    return;
  }
  // get GPS position
  const { latitude, longitude } = await getUserLocation();
  region$.next({ latitude, longitude });
  // calculate square bounds
  const bounds = getBounds({ latitude, longitude });
  bounds$.next(bounds);
  await updateMarkersWithinBounds();
  return true;
}

export function tryToGetPlaceName() {
  const marker = marker$.value;
  const region = {
    latitude: marker.latitude,
    longitude: marker.longitude,
  };
  reverseGeocodeAsync(region).then((addresses) => {
    const { name, street } = addresses[0];
    const hasNumber = /\d/.test(name);
    const placeName = hasNumber ? street + " " + name : name;
    marker$.next({ ...marker, placeName });
  });
}
