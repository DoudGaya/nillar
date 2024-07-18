import { Category, urlLinks } from "@/typings";
import Link from "next/link";
import { Suspense } from "react";
import { SideNavLoading } from "../loading-uis/sidenav-loading";
import { fetchAllCategory } from "@/actions/articles";
import { SheetTrigger } from "../ui/sheet";
import { DarkButton } from "../DarkButton";

const categories = await fetchAllCategory() as Category[]

export const NavContents = () => {
  return (
    <div className=" flex flex-col">
      <h2 className=" text-lg">Article Categories </h2>
      <Suspense fallback={<SideNavLoading />}>
        <div className=" flex flex-col space-y-1">
        {
          categories.map((category: Category) => {
            return (
              <Link href={ category.slug.current } key={category._id} className=" hover:bg-neutral-100 dark:hover:bg-black/80 w-full py-2 px-4">
                <SheetTrigger>{ category.title }</SheetTrigger>
              </Link>
            )
          })
         }
        </div>
    </Suspense>
    <div className="">
     <SheetTrigger>
        <DarkButton />
     </SheetTrigger>
    </div>
    </div>

  );
};
