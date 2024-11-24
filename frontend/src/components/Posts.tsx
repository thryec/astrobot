"use client";

export function Posts() {
  return (
    <>
      {[1, 2, 3].map((item) => (
        <div key={item} className="bg-white rounded-lg shadow-sm p-4 space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div>
              <h3 className="font-medium">User Name</h3>
              <p className="text-sm text-gray-500">2h ago</p>
            </div>
          </div>
          <p className="text-gray-700">Sample post content {item}</p>
        </div>
      ))}
    </>
  );
}
