import fakeMarkers from "../fakedb";
import { getDistance, getBoundsOfDistance } from "geolib";
export const maxDistance = 3000; //max distance from the current region to load icons from
import { currentCoordinates$, bounds$ } from "./stateService";
import dbh from "./databaseConnection";

export function getBounds({ latitude, longitude }) {
  const side = maxDistance / 2;

  return {
    minLatitude: latitude - side,
    maxLatitude: latitude + side,
    minLongitude: longitude - side,
    maxLongitude: longitude + side,
  };
}

// allMarkers.filter(insideBoundsFilter)

// insideBoundsFilter(someBounds) -> (marker)=>bool

function makeBoundsFilter({
  maxLatitude,
  maxLongitude,
  minLatitude,
  minLongitude,
}) {
  return function ({ latitude, longitude }) {
    const insideLatitude = latitude <= maxLatitude && latitude >= minLatitude;
    const insideLongitude =
      longitude <= maxLongitude && longitude >= minLongitude;
    return insideLatitude && insideLongitude;
  };
}

//fetches the appropriate data from the database
export async function getMarkers() {
  const bounds = bounds$.value;
  const boundsFilter = makeBoundsFilter(bounds);
  return fakeMarkers.filter(boundsFilter);

  // ACTUAL DATABASE CALL

  // const coordinates = dbh.collection("coordinates");

  // const query = await coordinates
  //   .where("latitude", ">=", bounds.minLatitude)
  //   .where("latitude", "<=", bounds.maxLatitude)
  //   .where("longitude", ">=", bounds.minLongitude)
  //   .where("longitude", "<=", bounds.maxLongitude)
  //   .get();

  // query.docs.forEach((doc) => {
  //   // console.log("doc data", doc.id);
  //   coordsArray.push({
  //     ...doc.data(),
  //     id: doc.id,
  //   });
  // });
}

export async function addMarker(marker = {}) {
  // console.log("in async posting", coord)
  const document = await dbh.collection("coordinates").add(marker);
  console.log("marker added", !!document);
  return document;
}

export async function sendUpdateCoord(coord) {
  const res = await dbh.collection("coordinates").doc(coord.id).set(coord);
  console.log("uuuupdaaated", !!res);
}

export async function deleteCoord(coord) {
  const res = await dbh.collection("coordinates").doc(coord.id).delete();
  console.log("deleted snif snif ", !!res);
}
