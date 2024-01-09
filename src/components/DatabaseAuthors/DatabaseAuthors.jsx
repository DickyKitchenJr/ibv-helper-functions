
function DatabaseAuthors({data}) {

  return (
    <>
    {console.log(data)}
      <h2>Authors Currently In Database = {data.length}</h2>
      
      {data.map((author) => {
        return (
          <>
            <p>
              &#123;
              <br />
              firstName: &#34;{author.dataValues.firstName}&#34;,
              <br />
              lastName: &#34;{author.dataValues.lastName}&#34;,
              <br />
              {author.dataValues.website ? (
                <>
                  website &#34;{author.dataValues.website}&#34;,
                  <br />
                </>
              ) : null}
              umbrellaGenre: [
              {author.dataValues.umbrellaGenre.map((each, index, array) => (
                <>
                  &#34;{each}&#34;{index === array.length - 1 ? "" : ","}
                </>
              ))}
              ],
              <br />
              subGenre: [
              {author.dataValues.subGenre.map((each, index, array) => (
                <>
                  &#34;{each}&#34;{index === array.length - 1 ? "" : ","}
                </>
              ))}
              ],
              <br />
              {author.dataValues.instagram ? (
                <>
                  instagram: &#34;{author.dataValues.instagram}&#34;,
                  <br />
                </>
              ) : null}
              {author.dataValues.facebook ? (
                <>
                  facebook: &#34;{author.dataValues.facebook}&#34;,
                  <br />
                </>
              ) : null}
              {author.dataValues.twitter ? (
                <>
                  twitter: &#34;{author.dataValues.twitter}&#34;,
                  <br />
                </>
              ) : null}
              {author.dataValues.tiktok ? (
                <>
                  tiktok: &#34;{author.dataValues.tiktok}&#34;,
                  <br />
                </>
              ) : null}
              {author.dataValues.goodreads ? (
                <>
                  goodreads: &#34;{author.dataValues.goodreads}&#34;,
                  <br />
                </>
              ) : null}
              {author.dataValues.mastodon ? (
                <>
                  mastodon: &#34;{author.dataValues.mastodon}&#34;,
                  <br />
                </>
              ) : null}
              {author.dataValues.amazonBio ? (
                <>
                  amazonBio: &#34;{author.dataValues.amazonBio}&#34;,
                  <br />
                </>
              ) : null}
              {author.dataValues.threads ? (
                <>
                  threads: &#34;{author.dataValues.threads}&#34;,
                  <br />
                </>
              ) : null}
              {author.dataValues.bookbub ? (
                <>
                  bookbub: &#34;{author.dataValues.bookbub}&#34;,
                  <br />
                </>
              ) : null}
              bio: &#34;{author.dataValues.bio}&#34;
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
