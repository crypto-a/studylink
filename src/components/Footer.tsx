import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-amber-50 p-4 mt-8 shadow-inner">
      <div className="max-w-7xl mx-auto text-center text-sm text-amber-800">
        &copy; {new Date().getFullYear()} StudyLink Canada. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
