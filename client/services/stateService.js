import { BehaviorSubject } from "rxjs";
import { getBounds } from "./apiServices";

const defaultCoordinates = {
  latitude: 0,
  longitude: 0,
};

const defaultBounds = getBounds({ latitude: 0, longitude: 0 });

const defaultMarker = {
  placeName: "place name",
  icon: "icon name",
  latitude: 0,
  longitude: 0,
  description: "no-description",
  score: 0,
};

const defaultCoordinates = {
  latitude: 0,
  longitude: 0,
};

// map-related
export const markers$ = new BehaviorSubject([]);
// TODO: rename to region
export const currentCoordinates$ = new BehaviorSubject(defaultCoordinates);
export const bounds$ = new BehaviorSubject(defaultBounds);

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
