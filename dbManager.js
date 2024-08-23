const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("chinook.db");

db.all("SELECT FirstName,LastName,Email FROM Customers", (err, rows) => {
  if (err) {
    console.log(err.message);
  } else {
    rows.map((row) => {
      console.log(
        "Customer ID :",
        row.FirstName + " " + row.LastName + " " + row.Email
      );
    });
  }
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("ปิดการเชื่อมต่อฐานข้อมูลเรียบร้อยแล้ว");
  }
});
