import  { createClient } from '@sanity/client'
import sanityImageUrl from '@sanity/image-url'


export const client = createClient({
    projectId:process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset:'production',
    apiVersion:'2023-12-18',
    useCdn:true,
    token:process.env.REACT_APP_SANITY_TOKEN
})

const builder = sanityImageUrl(client);

export const urlFor = (source) => builder.image(source)