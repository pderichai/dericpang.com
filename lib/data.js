import path from "path";
import { promises as fs } from "fs";

export async function readJsonData(filename) {
  // Find the absolute path of the data directory.
  const jsonDirectory = path.join(process.cwd(), "data");

  // Read the JSON file.
  const data = await fs.readFile(
    jsonDirectory + "/" + filename,
    "utf8"
  );

  return data;
}
