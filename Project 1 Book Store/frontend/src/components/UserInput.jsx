import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";

function UserInput({ userData, setUserData }) {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-600">
          Title:
        </label>
        <input
          type="text"
          id="title"
          className="w-full border rounded-md px-3 py-2 text-sm text-gray-600"
          value={userData.title}
          onChange={(e) =>
            setUserData({
              title: e.target.value,
              author: userData.author,
              publishYear: userData.publishYear,
            })
          }
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block text-sm font-medium text-gray-600">
          Author:
        </label>
        <input
          type="text"
          id="author"
          className="w-full border rounded-md px-3 py-2 text-sm text-gray-600"
          value={userData.author}
          onChange={(e) =>
            setUserData({
              title: userData.title,
              author: e.target.value,
              publishYear: userData.publishYear,
            })
          }
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="publishYear" className="block text-sm font-medium text-gray-600">
          Publish Year:
        </label>
        <input
          type="number"
          id="publishYear"
          className="w-full border rounded-md px-3 py-2 text-sm text-gray-600"
          value={userData.publishYear}
          onChange={(e) =>
            setUserData({
              title: userData.title,
              author: userData.author,
              publishYear: e.target.value,
            })
          }
          required
        />
      </div>
      <div className="text-center flex justify-between items-center">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
        <Link to={'/'}>
          <button
            type="button"
            className="text-red-500 hover:text-red-600 bg-gray-300 hover:bg-gray-400 rounded-md py-2 px-4"
            onClick={() => {
              enqueueSnackbar('Canceled', { variant: 'Canceled' });
            }}
          >
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserInput;
