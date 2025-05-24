
function WriteMessage() {
  return (
    <div className="mt-auto mb-8 bg-[#f5f5f5] rounded-xl p-4 relative text-center">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#fcd64ab2] w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
          <img src="/images/img_lampon.svg" alt="Lamp" className="w-6 h-6" />
        </div>
        <h3 className="text-sm font-medium text-black mt-2">Thoughts Time</h3>
        <p className="text-xs text-[#787486] text-center mt-1">
          We don't have any notice for you, till then you can share your thoughts with your peers.
        </p>
        <button className="w-full mt-3 py-3 px-4 bg-white rounded text-sm font-medium">
          Write a message
        </button>
      </div>
  )
}

export default WriteMessage
