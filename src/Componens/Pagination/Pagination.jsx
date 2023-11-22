import "./Pagination.scss";

export default function Pagination({ currentPage, totalPage }) {
  const prevClasses = ["page-item", currentPage == 1 ? "disabled" : ""].join(
    " "
  );
  const nextClasses = [
    "page-item",
    currentPage == totalPage ? "disabled" : "",
  ].join(" ");

  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(
      <li className="page-item" key={i}>
        <span className={"page-link " + (currentPage == i ? "active" : "")}>
          {i}
        </span>
      </li>
    );
  }
  return (
    <ul className="pagination paginate">
      <li className={prevClasses}>
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      {pages}
      <li className={nextClasses}>
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  );
}
