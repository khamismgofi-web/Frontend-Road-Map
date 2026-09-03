import { useState } from 'react'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
  return (

    
    <nav className="px-6 py-4">
      <div className="flex justify-between items-center">
        <span>OMARI</span>
      
      <div className="hidden md:flex gap-6">
        <a href="#"  className="text-blue-600 font-semibold">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contacts</a>
        </div>
          
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
  ☰
</button>

      </div>
      
        <div
  className={`flex flex-col gap-4 mt-4 overflow-hidden transition-all duration-300 ${
    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
  }`}
>
    <a href="#"  className="text-blue-600 font-semibold">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contacts</a>
  </div>

    </nav>
  )
}

export default Navbar