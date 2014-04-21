#target InDesign-7.0

/* @options{{ */
var DATA = {
  src: "/Users/nbqx/Desktop/package/test.indd",
  dst: "/Users/nbqx/Desktop/package/test"
};
/* }}@options */

app.scriptPreferences.userInteractionLevel = UserInteractionLevels.NEVER_INTERACT;
app.open(DATA.src);
app.activeDocument.packageForPrint(
  DATA.dst, // File
  true, // copyingFonts
  true, // copyingLinkedGraphics
  true, // copyingProfiles
  true, // updatingGraphics
  true, // includingHiddenLayers
  true, // ignorePreflightErrors
  true, // creatingReport
  "test", // versionComments
  true // forceSave
);
app.activeDocument.close(SaveOptions.NO);
