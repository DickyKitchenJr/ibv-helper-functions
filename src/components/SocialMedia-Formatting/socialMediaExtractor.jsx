// PURPOSE: to extract each link from socialMedia and have them listed as their own object vs an array of objects

export const socialMediaExtractor = (authorListing) => {
    {
      authorListing.socialMedia.instagram
        ? (authorListing.instagram = authorListing.socialMedia.instagram)
        : null;
    }
    {
        authorListing.socialMedia.facebook
          ? (authorListing.facebook = authorListing.socialMedia.facebook)
          : null;
    }
    {
        authorListing.socialMedia.twitter
          ? (authorListing.twitter = authorListing.socialMedia.twitter)
          : null;
      }
    {
        authorListing.socialMedia.tiktok
          ? (authorListing.tiktok = authorListing.socialMedia.tiktok)
          : null;
      }
    {
        authorListing.socialMedia.goodreads
          ? (authorListing.goodreads = authorListing.socialMedia.goodreads)
          : null;
      }
    {
        authorListing.socialMedia.mastodon
          ? (authorListing.mastodon = authorListing.socialMedia.mastodon)
          : null;
      }
    {
        authorListing.socialMedia.amazonBio
          ? (authorListing.amazonBio = authorListing.socialMedia.amazonBio)
          : null;
      }
    {
        authorListing.socialMedia.threads
          ? (authorListing.threads = authorListing.socialMedia.threads)
          : null;
      }
    {
        authorListing.socialMedia.bookbub
          ? (authorListing.bookbub = authorListing.socialMedia.bookbub)
          : null;
      }

    delete authorListing.socialMedia;
    
    return authorListing
}