// PURPOSE: format bio section of author application for use in json to send to the database

export const bioForJson = (bioArray) => {
  // add \n to represent line breaks between paragraphs (as each new thing in the array represents a new paragraph)
  const formattedBio = bioArray.join("\\n");
  // replace double quotes with &quot; to align with json requirements
  const finalBio = formattedBio.replace(/"/g, "&quot;");

  return finalBio;
};