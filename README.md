# IBV-Helper-Functions
 
## Purpose:
- When transitioning the Indie Book Vault website from a front-end project to a full stack project changes were made to the way author's details were saved to make it easier to deal with in the MySQL database. These changes meant having to alter the way listings were stored for over 190 authors. To decrease the manual time doing this, functions were created to achieve the goals while decreasing the time required. These functions may have use in the future, but are not useful in the deployed project so are being kept separate. 

## Objectives:
- Create a function that takes the author's bio object and combines the array of separate paragraphs into one section with the paragraphs separated by /n to allow it to be stored in the database as one thing instead of separate parts
- Create a function that takes an author's bio and removes the double quotations and replaces them with &quot to allow it to be stored in the database without multiple " in the json sent
- Create a function that reverses the /n and &quot to create a list of authors that can be stored in the IBV front-end code while working out financial concerns of having the database called every time the website is viewed by a user (currently the database is only accessed when a user submits an application for listing) 
- Create a function that removes key/value pairs from a socialMedia keyed object and lists them as their own key/value pairs. For example:
socialMedia: {
    instagram: this,
    facebook: that,
    tiktok: theotherthing
}

needs to become - 

instagram: this, 
facebook: that,
tiktok: theotherthing
