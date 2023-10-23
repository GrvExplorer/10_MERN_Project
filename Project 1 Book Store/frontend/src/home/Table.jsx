import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

function Table({ books }) {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr className="">
          <th className="rounded-md border border-slate-600">S.No</th>
          <th className="rounded-md border border-slate-600">Title</th>
          <th className="rounded-md border border-slate-600 max-md:hidden">
            Author
          </th>
          <th className="rounded-md border border-slate-600 max-md:hidden">
            Publish Year
          </th>
          <th className="rounded-md border border-slate-600">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, i) => (
          <tr key={book._id} className="h-8">
            <td className="rounded-md border border-slate-700 text-center">
              {i + 1}
            </td>
            <td className="rounded-md border border-slate-700 text-center">
              {book.title}
            </td>
            <td className="rounded-md border border-slate-700 text-center max-md:hidden">
              {book.author}
            </td>
            <td className="rounded-md border border-slate-700 text-center max-md:hidden">
              {book.publishYear}
            </td>
            <td className="rounded-md border border-slate-700 text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/show/${book._id}`}>
                  <IoEyeSharp className="text-2xl text-purple-600" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/books/delete/${book._id}/${book.title}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
