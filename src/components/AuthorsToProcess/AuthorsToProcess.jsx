import { Authors } from "../../assets/Authors";
import { AwaitingAuthors } from "../../assets/AwaitingAuthors";
import { bioForJson } from "../Bio-Formatting/bioForJson";
import { socialMediaExtractor } from "../SocialMedia-Formatting/socialMediaExtractor";
import { useEffect } from "react";

// create a copy of Authors to modify that can be compared with the original Authors list if needed
let authorsToProcess = null //insert Authors or AwaitingAuthors to process

const authorListings = [];

// create a function that goes through the entire authorsToProcess list and updates the bio and extracts everything from socialMedia
const processAuthors = (listOfAuthors) => {
    while(listOfAuthors.length > 0){
      let currentAuthor = listOfAuthors[0];
      // socialMediaExtractor(currentAuthor); To be used if links are in "socialMedia" object; not to be used if listed individually
      // currentAuthor.bio = bioForJson(currentAuthor["bio"]); To be used if bio is stored in an array (also addresses double quotes)
      authorListings.push(currentAuthor);  
      listOfAuthors.shift();
    }
    return authorListings;
  }

// call processAuthors on authorsToProcess to create the list for use in App  
processAuthors(authorsToProcess);

function AuthorsToProcess() {
  // Used in loading authors currently listed on the front-end onto the database. Will it be used again? Unsure at this time.
  useEffect(() => {
    async function sendPostRequest(data) {
      const apiAddress = import.meta.env.VITE_API_ADDRESS;

      try {
        const response = await fetch(apiAddress, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        console.log("Post request successful:", responseData);
      } catch (error) {
        console.error("Error sending post request:", error);
      }
    }

    async function sendArraySequentially() {
      for (const item of authorListings) {
        await sendPostRequest(item);
      }
    }
    // Trigger the array processing when the component mounts
    sendArraySequentially();
  }, []);

  return (
    <>
      <h2>Authors Processed</h2>
      {authorListings.map((author) => {
        return (
          <>
            <p>
              &#123;
              <br />
              firstName: &#34;{author.firstName}&#34;,
              <br />
              lastName: &#34;{author.lastName}&#34;,
              <br />
              {author.website ? (
                <>
                  website &#34;{author.website}&#34;,
                  <br />
                </>
              ) : null}
              umbrellaGenre: [
              {author.umbrellaGenre.map((each, index, array) => (
                <>
                  &#34;{each}&#34;{index === array.length - 1 ? "" : ","}
                </>
              ))}
              ],
              <br />
              subGenre: [
              {author.subGenre.map((each, index, array) => (
                <>
                  &#34;{each}&#34;{index === array.length - 1 ? "" : ","}
                </>
              ))}
              ],
              <br />
              {author.instagram ? (
                <>
                  instagram: &#34;{author.instagram}&#34;,
                  <br />
                </>
              ) : null}
              {author.facebook ? (
                <>
                  facebook: &#34;{author.facebook}&#34;,
                  <br />
                </>
              ) : null}
              {author.twitter ? (
                <>
                  twitter: &#34;{author.twitter}&#34;,
                  <br />
                </>
              ) : null}
              {author.tiktok ? (
                <>
                  tiktok: &#34;{author.tiktok}&#34;,
                  <br />
                </>
              ) : null}
              {author.goodreads ? (
                <>
                  goodreads: &#34;{author.goodreads}&#34;,
                  <br />
                </>
              ) : null}
              {author.mastodon ? (
                <>
                  mastodon: &#34;{author.mastodon}&#34;,
                  <br />
                </>
              ) : null}
              {author.amazonBio ? (
                <>
                  amazonBio: &#34;{author.amazonBio}&#34;,
                  <br />
                </>
              ) : null}
              {author.threads ? (
                <>
                  threads: &#34;{author.threads}&#34;,
                  <br />
                </>
              ) : null}
              {author.bookbub ? (
                <>
                  bookbub: &#34;{author.bookbub}&#34;,
                  <br />
                </>
              ) : null}
              bio: &#34;{author.bio}&#34;
              <br />
              &#125;,
            </p>
          </>
        );
      })}
    </>
  );
}

export default AuthorsToProcess;