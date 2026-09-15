/**
 * Code.gs
 * Google Apps Script Web App bound to the "Free Stuff Subscribers" Google
 * Sheet. Receives POST requests from the /free-stuff pages on
 * malikstewart.com and upserts one subscriber row per normalized email.
 *
 * This file is version-controlled for reference, but Apps Script does not
 * read it from Git — paste its contents into the Apps Script editor and
 * redeploy whenever it changes. See README.md in this folder for setup.
 */

// Server-side source of truth for approved resource IDs -> display names.
// Must stay in sync with src/lib/resources.ts on the frontend. The client
// only ever sends an id; an id missing here is rejected rather than trusted.
var RESOURCES = {
  "ai-harness": "AI Coding Harness",
};

var SHEET_NAME = "Subscribers";
var HEADER_ROW = ["Name", "Email", "Resource", "Created At", "Last Downloaded At"];

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    var name = String(body.name || "").trim();
    var email = String(body.email || "").trim().toLowerCase();
    var resourceId = String(body.resourceId || "").trim();

    if (!name) {
      return jsonResponse({ ok: false, error: "Name is required." });
    }
    if (!isValidEmail(email)) {
      return jsonResponse({ ok: false, error: "A valid email is required." });
    }
    if (!RESOURCES[resourceId]) {
      return jsonResponse({ ok: false, error: "Unknown resource." });
    }

    var resourceName = RESOURCES[resourceId];
    var sheet = getSheet();
    var data = sheet.getDataRange().getValues();
    var now = new Date().toISOString();

    for (var i = 1; i < data.length; i++) {
      var rowEmail = String(data[i][1] || "").trim().toLowerCase();
      if (rowEmail === email) {
        var rowNumber = i + 1;
        sheet.getRange(rowNumber, 5).setValue(now); // Last Downloaded At

        var existingResources = String(data[i][2] || "");
        if (existingResources.indexOf(resourceName) === -1) {
          var updatedResources = existingResources ? existingResources + ", " + resourceName : resourceName;
          sheet.getRange(rowNumber, 3).setValue(updatedResources);
        }

        return jsonResponse({ ok: true, status: "existing" });
      }
    }

    sheet.appendRow([name, email, resourceName, now, now]);
    return jsonResponse({ ok: true, status: "created" });
  } catch (err) {
    return jsonResponse({ ok: false, error: "Server error." });
  }
}

function getSheet() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADER_ROW);
  }
  return sheet;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
