

export  function Header({dashboard}) {
  

  return (
    <header className="mb-8 mt-5 p-5 md:flex md:items-center md:justify-between">
      <div className="border-b border-slate-700 pb-1">
     <h1 className="text-2xl font-bold"> {dashboard.title} </h1>
     <p className="text-sm font-bold text-slate-400">Total Followers : {dashboard.totalFollowers}</p>
     </div>
     <div className="mt-4 flex items-center justify-between">
     <p className="text-sm font-bold text-slate-400"> Dark Mode</p> 
    </div>
    </header>
  )
}
