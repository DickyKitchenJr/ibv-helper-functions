import './App.css';
import { bioForJson } from './components/Bio-Formatting/bioForJson';
import { socialMediaExtractor } from './components/SocialMedia-Formatting/socialMediaExtractor';
import { Authors } from './assets/Authors';

// create a copy of Authors to modify that can be compared with the original Authors list if needed
let authorsToProcess = Authors

const authorListings = [];

// create a function that goes through the entire authorsToProcess list and updates the bio
const processAuthors = (listOfAuthors) => {
    while(listOfAuthors.length > 0){
      let currentAuthor = listOfAuthors[0];
      socialMediaExtractor(currentAuthor);
      currentAuthor.bio = bioForJson(currentAuthor["bio"]);
      authorListings.push(currentAuthor);  
      listOfAuthors.shift();
    }
    return authorListings;
  }

// call processAuthors on authorsToProcess to create the list for use in App  
processAuthors(authorsToProcess);

function App() {



  return (
    <>
      <h1>Testing Area</h1>
      <h2>Listings</h2>
      {authorListings.map((author) => {return (
        <>
          <p>
            &#123;
            <br />
            firstName: &#34;{author.firstName}&#34;,
            <br />
            lastName: &#34;{author.lastName}&#34;,
            <br />
            email: &#34;{author.email}&#34;,
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
      );})}
    </>
  );
}




export default App