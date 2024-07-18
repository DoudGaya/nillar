import { Topic } from "./Topics/Topic"


const topics: string[] = ['Business', 'Finance', 'Productivity']

export const Topics = () => {
    return (
        <div className=" max-w-[1200px] px-4 mx-auto grid grid-cols-1">
           {
                topics.map(item=><Topic key={item.length} single={item} />)
           }
        </div>
    )
}
