import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x5D56D89535f4c6cc6BCa43A24e9302249c8A6Baa",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Water breathing",
        description: "This NFT will give you access to DemonSlayerDAO!",
        image: readFileSync("scripts/assets/waterb.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()