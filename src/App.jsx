import './App.css';
import { bioForJson } from './components/Bio-Formatting/bioForJson';
import { bioForListing } from './components/Bio-Formatting/bioForListing';
import { Authors } from './assets/Authors';

// create a copy of Authors to modify that can be compared with the original Authors list if needed
let authorsToProcess = Authors

const authorListings = [];

// create a function that goes through the entire authorsToProcess list and updates the bio
const processAuthors = (listOfAuthors) => {
    while(listOfAuthors.length > 0){
      let currentAuthor = listOfAuthors[0];
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
      {/* converting author array bio into single string */}
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
            umbrellaGenre: [&#34;{author.umbrellaGenre}&#34;],
            <br />
            subGenre: [&#34;{author.subGenre}&#34;],
            <br />
            {author.socialMedia.instagram ? (
              <>
                instagram: &#34;{author.socialMedia.instagram}&#34;,
                <br />
              </>
            ) : null}
            {author.socialMedia.facebook ? (
              <>
                facebook: &#34;{author.socialMedia.facebook}&#34;,
                <br />
              </>
            ) : null}
            {author.socialMedia.twitter ? (
              <>
                twitter: &#34;{author.socialMedia.twitter}&#34;,
                <br />
              </>
            ) : null}
            {author.socialMedia.tiktok ? (
              <>
                tiktok: &#34;{author.socialMedia.tiktok}&#34;,
                <br />
              </>
            ) : null}
            {author.socialMedia.goodreads ? (
              <>
                goodreads: &#34;{author.socialMedia.goodreads}&#34;,
                <br />
              </>
            ) : null}
            {author.socialMedia.mastodon ? (
              <>
                mastodon: &#34;{author.socialMedia.mastodon}&#34;,
                <br />
              </>
            ) : null}
            {author.socialMedia.amazonBio ? (
              <>
                amazonBio: &#34;{author.socialMedia.amazonBio}&#34;,
                <br />
              </>
            ) : null}
            {author.socialMedia.threads ? (
              <>
                threads: &#34;{author.socialMedia.threads}&#34;,
                <br />
              </>
            ) : null}
            {author.socialMedia.bookbub ? (
              <>
                bookbub: &#34;{author.socialMedia.bookbub}&#34;,
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