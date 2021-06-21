import * as s from "./stateService";

describe("stateService", () => {
  it("should create the right defaults", () => {
    expect(s.defaultBounds).toEqual({
      minLatitude: -1500,
      maxLatitude: 1500,
      minLongitude: -1500,
      maxLongitude: 1500,
    });
  });
  it("should export subjects with the default values", () => {
    expect(s.markers$.value).toEqual([]);
    expect(s.region$.value).toEqual(s.defaultRegion);
    expect(s.bounds$.value).toEqual(s.defaultBounds);
    expect(s.modal$.value).toEqual("");
    expect(s.sheet$.value).toEqual("");
    expect(s.marker$.value).toEqual(s.defaultMarker);
  });
  it("should provide helper function to modify modal", () => {
    s.setModal("new-modal");
    expect(s.modal$.value).toEqual("new-modal");
  });
  it("should provide helper function to modify sheet", () => {
    s.setSheet("new-sheet");
    expect(s.sheet$.value).toEqual("new-sheet");
  });
});
