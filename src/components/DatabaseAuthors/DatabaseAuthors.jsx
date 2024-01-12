
function DatabaseAuthors({data}) {

  return (
    <>
    {console.log(JSON.parse(data[0].umbrellaGenre))}
      <h2>Authors Currently In Database = {data.length}</h2>
      {data.map((author) => {
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
                  website: &#34;{author.website}&#34;,
                  <br />
                </>
              ) : null}
              {/* TODO: Pick which way to display the below and also apply to subGenre section */}
              umbrellaGenre: {author.umbrellaGenre}
              <br />
              OR
              umbrellaGenre: [
              {JSON.parse(author.umbrellaGenre).map((each, index, array) => (
                <>
                  &#34;{each}&#34;{index === array.length - 1 ? "" : ","}
                </>
              ))}
              ],
              <br />
              subGenre: {author.subGenre}
              {/* {author.dataValues.subGenre.map((each, index, array) => (
                <>
                  &#34;{each}&#34;{index === array.length - 1 ? "" : ","}
                </>
              ))} */}
              ,
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
              bio: &#34;{author.bio}&#34;,
              <br />
              &#125;,
            </p>
          </>
        );
      })}
    </>
  );
}

export default DatabaseAuthors;
