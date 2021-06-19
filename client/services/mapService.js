import * as Location from "expo-location";
import { currentCoordinates$, bounds$ } from "./stateService";
// above this zoom level, don't show markers
export const maxZoom = 0.022;

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

export function isWithinBounds() {
  const { latitude, longitude } = currentCoordinates$.value;
  const { maxLatitude, maxLongitude, minLatitude, minLongitude } =
    bounds$.value;

  const latitudeOk = latitude <= maxLatitude && latitude >= minLatitude;
  const longitudeOk = longitude <= maxLongitude && longitude >= minLongitude;

  return latitudeOk && longitudeOk;
}
