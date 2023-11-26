import "./Pagination.scss";
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronDoubleRight } from "react-icons/hi2";
import { HiChevronDoubleLeft } from "react-icons/hi2";
export default function Pagination({
  currentPage,
  totalPage,
  handlePgae,
  tasks,
  page,
}) {
  const prevClasses = ["page-item", currentPage == 1 ? "disabled" : ""].join(
    " "
  );
  const nextClasses = [
    "page-item",
    currentPage == totalPage ? "disabled" : "",
  ].join(" ");

  let pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(
      <li className="page-item" key={i}>
        <span
          className={"page-link " + (currentPage == i ? "active" : "")}
          onClick={() => handlePgae(i)}
        >
          {i}
        </span>
      </li>
    );
  }

  if (tasks.length == 0 && page == 1) {
    return;
  }
  return (
    <ul className="pagination paginate">
      {totalPage > 4 ? (
        <li className={nextClasses}>
          <span className="page-link" aria-label="Next">
            <span
              aria-hidden="true"
              onClick={() => handlePgae(currentPage + 1)}
            >
              First
            </span>
          </span>
        </li>
      ) : (
        ""
      )}
      <li className={prevClasses}>
        <span className="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </span>
      </li>
      {totalPage < 5 ? (
        pages
      ) : (
        <div>
          <span>
            <input className=" numberOfPage" />
          </span>
          <span className="totalNumberOfPage">of {totalPage}</span>
        </div>
      )}
      <li className={nextClasses}>
        <span className="page-link" aria-label="Next">
          <span aria-hidden="true" onClick={() => handlePgae(currentPage + 1)}>
            &raquo;
          </span>
        </span>
      </li>
      {totalPage > 4 ? (
        <li className={nextClasses}>
          <span className="page-link" aria-label="Next">
            <span aria-hidden="true">Last</span>
          </span>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
}
