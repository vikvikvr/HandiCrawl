import {
  markers$,
  marker$,
  sheet$,
  region$,
  modal$,
  bounds$,
} from "./stateService";
import { maxZoom, getBounds } from "./mapService";
import { isWithinBounds } from "../utils/utils";
import { getMarkers } from "./apiServices";

export function startToAddNewMarker(event) {
  const { latitude, longitude, latitudeDelta } = event.nativeEvent.coordinate;

  if (latitudeDelta > maxZoom) {
    console.log("too zoomed out to add marker");
    return;
  }

  marker$.next({ ...marker$.value, latitude, longitude });
  sheet$.next("select-new-marker-icon");
}

export async function updateMarkersBasedOnPosition({ latitude, longitude }) {
  region$.next({ latitude, longitude });

  const inBounds = isWithinBounds(region$.value, bounds$.value);

  if (!inBounds) {
    // create new bounds
    const newBounds = getBounds({ latitude, longitude });
    bounds$.next(newBounds);

    try {
      // load new markers
      const newMarkers = await getMarkers();
      markers$.next(newMarkers);
    } catch (error) {
      console.log("failed to get new markers");
    }
  }
}

function findMarkerByRegion({ latitude, longitude }) {
  return markers$.value.find((marker) => {
    const sameLatitude = marker.latitude === latitude;
    const sameLongitude = marker.longitude === longitude;
    return sameLatitude && sameLongitude;
  });
}

export function showMarkerInfo(e) {
  const matchedMarker = findMarkerByRegion(e.nativeEvent.coordinate);

  if (matchedMarker) {
    marker$.next(matchedMarker);
    modal$.next("show-existing-marker-info");
  }
}

export async function updateMarkersWithinBounds() {
  // get only markers within bounds
  const markers = await getMarkers();
  markers$.next(markers);
}

export function selectExistingMarkerIcon(icon = "") {
  marker$.next({ ...marker$.value, icon });
  modal$.next("edit-existing-marker-info");
}

export function saveMarkerChanges() {
  // TODO: add marker to db
  modal$.next("");
  const { id } = marker$.value;

  const newMarkers = markers$.value.map((m) => {
    return m.id === id ? marker$.value : m;
  });
  markers$.next(newMarkers);
}

export async function saveNewMarker() {
  const marker = marker$.value;
  const newMarker = { ...marker };
  markers$.next([...markers$.value, newMarker]);
  try {
    // TODO: save to database
    // const { _id: id } = await addMarker(marker);
  } catch (error) {
    console.log("failed to add marker to db");
  } finally {
    sheet$.next("");
  }
}

export function selectNewMarkerIcon(icon = "") {
  const marker = marker$.value;
  marker$.next({ ...marker, icon });
  sheet$.next("edit-new-marker-info");
}

export function voteMarker(amount = 0) {
  const marker = marker$.value;
  // TODO: save also to db and all markers in state
  const score = marker.score + amount;
  marker$.next({ ...marker, score });
}

export function deleteMarker() {
  modal$.next("");
  const marker = marker$.value;
  const { id } = marker;
  const newMarkers = markers$.value.filter((marker) => marker.id !== id);
  markers$.next(newMarkers);
  // TODO: remove current marker from db
}
