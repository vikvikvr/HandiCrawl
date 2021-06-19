import { BehaviorSubject } from "rxjs";

// iconEvent.coordinate.longitude,
const defaultCoordinates = {
  latitude: 0,
  longitude: 0,
};

const defaultMarker = {
  placeName: "place name",
  icon: "icon name",
  latitude: 0,
  longitude: 0,
  description: "no-description",
  score: 0,
};

const defaultRegion = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0,
  longitudeDelta: 0,
};

// map-related
export const markers$ = new BehaviorSubject([]);
export const pressedCoordinates$ = new BehaviorSubject(defaultCoordinates);
export const region$ = new BehaviorSubject(defaultRegion);

// app-related
export const currentModal$ = new BehaviorSubject("");
export const currentSheet$ = new BehaviorSubject("");
export const selectedMarker$ = new BehaviorSubject(defaultMarker);

export function setModal(modalName = "") {
  currentModal$.next(modalName);
}

export function setSheet(sheetName = "") {
  currentSheet$.next(sheetName);
}
