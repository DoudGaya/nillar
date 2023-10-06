import { topicItems } from "@/data/schemas"
import { Topic } from "./Topics/Topic"


const topics: string[] = ['Business', 'Finance', 'Productivity']

export const Topics = () => {
    return (
        <div className=" max-w-[1200px] px-4 mx-auto grid lg:gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           {
                topics.map(item=><Topic key={item} single={item} />)
           }
        </div>
    )
}
