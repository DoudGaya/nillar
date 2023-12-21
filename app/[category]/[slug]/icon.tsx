import { ImageResponse } from "next/server"

export const size = {
    width: 32,
    height: 32
}

export const contentType = "image/png"


export default function icon() {
    return new ImageResponse(
      (
        <div tw=" font-bold rounded-md text-xl p-3 font-lg bg-black w-full text-white h-full flex items-center justify-center">
          N
        </div>
      ), size
    );
}