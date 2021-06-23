import * as markerService from "./markerService";
import {
  marker$,
  sheet$,
  region$,
  resetState,
  defaultBounds,
  bounds$,
} from "./stateService";

beforeEach(resetState);

describe("markerService", () => {
  const region = { latitude: 20, longitude: 20 };
  describe("startToAddNewMarker", () => {
    const invalidEvent = {
      nativeEvent: { coordinate: { ...region, latitudeDelta: 1 } },
    };
    const validEvent = {
      nativeEvent: { coordinate: { ...region, latitudeDelta: 0.01 } },
    };
    it("should not modify marker if too zoomed out", () => {
      const initialMarker = marker$.value;
      markerService.startToAddNewMarker(invalidEvent);
      expect(marker$.value).toEqual(initialMarker);
    });
    it("should not modify sheet if too zoomed out", () => {
      const initialSheet = sheet$.value;
      markerService.startToAddNewMarker(invalidEvent);
      expect(sheet$.value).toEqual(initialSheet);
    });
    it("should update marker coordinates if within zoom range", () => {
      markerService.startToAddNewMarker(validEvent);
      expect(marker$.value.latitude).toBe(20);
      expect(marker$.value.longitude).toBe(20);
    });
    it("should show select new marker icon sheet if within zoom range", () => {
      markerService.startToAddNewMarker(validEvent);
      expect(sheet$.value).toBe("select-n0ew-marker-icon");
    });
  });
  describe.only("updateMarkersBasedOnPosition", () => {
    it("should update the region", () => {
      markerService.updateMarkersBasedOnPosition(region);
      expect(region$.value).toEqual(region);
    });
    it("should not update the bounds if still within bounds", () => {
      markerService.updateMarkersBasedOnPosition(region$.value);
      expect(bounds$.value).toEqual(defaultBounds);
    });
    it.todo("should update the bounds if not within bounds anymore");
    it.todo("should update the markers if not within bounds anymore");
  });
  describe("findMarkerByRegion", () => {});
  describe("showMarkerInfo", () => {});
  describe("updateMarkersWithinBounds", () => {});
  describe("selectExistingMarkerIcon", () => {});
  describe("saveMarkerChanges", () => {});
  describe("saveNewMarker", () => {});
  describe("selectNewMarkerIcon", () => {});
  describe("voteMarker", () => {});
  describe("deleteMarker", () => {});
});
