import { client } from "./client";
import  imageUrlBuilder from "@sanity/image-url";


const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
    return builder.image(source)
}