import { ImageResponse } from 'next/og';

export async function GET() {
  return new ImageResponse(
    (
        <div tw="flex">
            <div tw="text-white flex flex-col w-full h-full bg-black items-center justify-center">
                <div tw=" flex flex-col w-full items-center text-center h-full justify-center">
                    <h1 tw=" text-8xl">NiLLAR</h1>
                        <p tw=" -mt-[16px] tracking-[3] text-xl">The Financial Magazine</p>
                    <span tw=" bg-red-500 px-5 py-2 text-xl"> Breaking News</span>
                </div>
            </div>
        </div>
    ),
    {
      width: 1061,
      height: 897,
    },
  );
}