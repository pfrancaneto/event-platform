import { Header } from "../components/Header";
import { Lesson } from "../components/Lesson";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-1 min-h-screen">
        <Video />
        <Sidebar />
      </main>
    </div>
  )
}