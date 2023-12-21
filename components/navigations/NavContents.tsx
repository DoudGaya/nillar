import { urlLinks } from "@/typings";
import Link from "next/link";

export const NavContents = ({
  categories,
  title,
  setNavSwitch,
}: {
  categories: urlLinks[];
  title: string;
  setNavSwitch: any;
}) => {
  return (
    <div className=" flex flex-col px-4 py-2">
      <p className=" text-2xl text-black dark:text-gray-200 font-semibold border-b border-gray-200 dark:border-gray-800 py-1">
        {title}
      </p>
      <div className=" flex flex-col py-2 space-y-2">
        {categories.map((category: urlLinks) => {
          return (
            <Link
              key={ category.label}
              href={category.to}
              onClick={() => {
                setNavSwitch();
              }}>
              <p className=" text-black dark:text-gray-200 hover:translate-x-1 hover:font-semibold transition-all  text-lg">
                {""}
                {category.label}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
