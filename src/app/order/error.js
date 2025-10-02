"use client";

export default function Error({ error, reset }) {
  return (
    <div className="p-4 text-center">
      <h2 className="text-red-600 font-bold">Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-3 cursor-pointer px-4 py-2 bg-blue-600 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}
