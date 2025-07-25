export default function SubmitBtn({ isValid, dirty , isSubmitting }) {
  return (
    <button
      className={`w-full bg-black text-white 
              p-2 rounded-2xl cursor-pointer hover:bg-white
                hover:text-black hover:border
                hover:border-gray-500
              ${
                !isValid || !dirty || isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100"
              }
              `}
      type="submit"
      disabled={!dirty || !isValid || isSubmitting}
    >
      Submit
    </button>
  )
}
