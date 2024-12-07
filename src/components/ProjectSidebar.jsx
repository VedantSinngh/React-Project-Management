export default function ProjectSidebar() {
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
        <div>
            <button className="px-3 py-3 text-xs md:text-base rounded-md text-stone-500 bg-stone-700 hover:bg-stone-600 hover:text-stone-100 ">+ Add Project</button>
        </div>
    </aside>
}