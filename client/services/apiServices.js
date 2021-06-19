import fakeMarkers from "../fakedb";
import { bounds$ } from "./stateService";
import { makeBoundsFilter } from "../utils/utils";
import dbh from "./databaseConnection";

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
