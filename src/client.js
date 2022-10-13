import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "ypl2yc17", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
  apiVersion: "2022-10-13", 
  token: process.env.REACT_PUBLIC_SANITY_TOKEN, // or leave blank to be anonymous user
});