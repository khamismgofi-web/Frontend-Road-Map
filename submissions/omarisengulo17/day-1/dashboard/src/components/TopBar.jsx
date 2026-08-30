function TopBar() {
  return (
    <div className="flex justify-between items-center p-4">
    <h1 className="text-2xl font-bold text-gray-900">
  Dashboard
</h1>
    <div className="flex items-center gap-2">
     <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 font-bold">
      O
    </div>
    <span>Omari</span>
    </div>
    </div>
  )
}

export default TopBar