import { BehaviorSubject } from "rxjs";
import { getBounds } from "./mapService";

// default states

export const defaultMarker = {
  placeName: "place name",
  icon: "icon name",
  latitude: 0,
  longitude: 0,
  description: "no-description",
  score: 0,
};

export const defaultRegion = {
  latitude: 0,
  longitude: 0,
};

export const defaultBounds = getBounds(defaultRegion);

// behaviours subjects

// map-related
export const markers$ = new BehaviorSubject([]);
export const region$ = new BehaviorSubject(defaultRegion);
export const bounds$ = new BehaviorSubject(defaultBounds);

// app-related
export const modal$ = new BehaviorSubject("");
export const sheet$ = new BehaviorSubject("");
export const marker$ = new BehaviorSubject(defaultMarker);

// helper functions

export function setModal(modalName = "") {
  modal$.next(modalName);
}

export function setSheet(sheetName = "") {
  sheet$.next(sheetName);
}
