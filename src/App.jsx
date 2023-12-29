import './App.css';
import { bioForJson } from './components/Bio-Formatting/bioForJson';
import { bioForListing } from './components/Bio-Formatting/bioForListing';
import { Authors } from './assets/Authors';

function App() {

  let authorsToProcess = Authors

  let authorListings;

  const processAuthors = (listOfAuthors) => {
    while(listOfAuthors.length > 0){
      let currentAuthor = listOfAuthors[0];
      currentAuthor.bio = bioForJson(currentAuthor["bio"]);
      authorListings.push(currentAuthor);  
      console.log(authorListings[0].firstName)
      listOfAuthors.shift();
    }
  }

  return (
    <>
      {console.log(processAuthors(Authors))}
      <h1>Testing Area</h1>
      {/* converting author array bio into single string */}
      <h2>Bio</h2>
      <p>{bioForJson(Authors[2].bio)}</p>
      <p>{Authors[2].bio}</p>
    </>
  );
}

export default App
