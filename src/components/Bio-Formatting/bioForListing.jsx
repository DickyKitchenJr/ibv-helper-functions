// PURPOSE: to take bio section of author listing from the database and format it for use on the front-end

export const bioForListing = (bioString) => {
  // replace &quot; with " to show on the front-end properly
  const bio = bioString.replace(/&quot;/g, '"');
  // create an array of separate strings by separating the current string every time there is a \n
  const bioArray = bio.split("\\n");

  return bioArray;
};