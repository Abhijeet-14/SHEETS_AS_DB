"... SHEETS as a Database ..."

"Open google sheet, give permission to edit by everyone"


".. Method 1 .. [3 connections, 500 requests/month, Full CRUD API, Google Sheets connection]"

"Step 1: go-to https://sheet.best > connection"

"Step 2: PUT url of GOOGLE SHEET shared by everyone[VIEW] in sheet"

"Step 3: CONNECTION COMPLETE... copy url and enjoy"

"Step 4: TO use REST methods -> share sheet to everyone[EDIT]"

"And REPEAT Steop 1 2 3"



".. METHOD 2 .."

"Step 1: File > publish to web > web page"
" Step 2: copy the link"

"Copy sheet ID from url"

"paste to SHEET_ID below"
"https://spreadsheets.google.com/feeds/worksheets/SHEET_ID/public/basic?alt=json"


"NOW"
"We will get JSOM object >> go-to FEED > ENTRY > LINK > LINK[1]"

"copy this LINK[1] url"

"LINK[1]?alt=json"  // to convert to json

"Get DATA by row"
"FEED > ENTRY >  content > $t"

