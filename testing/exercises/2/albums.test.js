const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("album names are in alphabetical order", () => {
    spotify.search.mockResolvedValue(spotifyResolvedVal);
    return getAlbumNames("meat loaf").then((albumNames) => {
        console.log("album names", albumNames);
        expect(albumNames).toEqual(albumNames.slice().sort());
        console.log(albumNames.slice().sort());
    });
});
const spotifyResolvedVal = {
    albums: {
        items: [{ name: "c" }, { name: "a" }, { name: "b" }],
    },
};
