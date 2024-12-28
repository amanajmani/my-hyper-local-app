import AddItem from "../components/AddItem"
import ListItems from "@/components/ListItems"

export default function Home() {
  return (
    <div className="bg-white h-screen w-screen text-black flex flex-col justify-center items-center">
      <h1>Welcome to My Next.js App</h1>
      <AddItem />
      <ListItems />
    </div>
  )
}
