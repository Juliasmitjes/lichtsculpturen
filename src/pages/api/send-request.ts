import type { NextApiRequest, NextApiResponse } from "next";
import XLSX from "xlsx";
import fs from "fs";
import path from "path";

type Data = {
  success: boolean;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const { name, email, phone, quantity } = req.body;

  // Pad naar Excel bestand
  const filePath = path.join(process.cwd(), "requests.xlsx");

  let workbook;
  let worksheet;

  // Check of bestand al bestaat
  if (fs.existsSync(filePath)) {
    workbook = XLSX.readFile(filePath);
    worksheet = workbook.Sheets[workbook.SheetNames[0]];
  } else {
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.json_to_sheet([]);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Requests");
  }

  // Bestaande data lezen
  const existingData = XLSX.utils.sheet_to_json(worksheet);

  // Nieuwe rij toevoegen
  existingData.push({ name, email, phone, quantity, date: new Date().toISOString() });

  // Terug naar sheet
  const newSheet = XLSX.utils.json_to_sheet(existingData);
  workbook.Sheets[workbook.SheetNames[0]] = newSheet;

  // Opslaan
  XLSX.writeFile(workbook, filePath);

  return res.status(200).json({ success: true });
}
