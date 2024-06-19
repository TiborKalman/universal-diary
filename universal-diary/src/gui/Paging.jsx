import styled from "styled-components";
import { PAGING_SIZE } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const StyledPaging = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PagingButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey5)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand6);
    color: var(--color-brand-50);
  }
`;

/* eslint-disable react/prop-types */
function Paging({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGING_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount < 1) return null;

  return (
    <>
      <StyledPaging>
        <P>
          Elements <span>{(currentPage - 1) * PAGING_SIZE + 1}</span> to{" "}
          <span>
            {currentPage === pageCount ? count : currentPage * PAGING_SIZE}
          </span>{" "}
          of <span>{count}</span> results
        </P>

        <Buttons>
          <PagingButton onClick={prevPage} disabled={currentPage === 1}>
            <HiChevronLeft /> <span>Rew</span>
          </PagingButton>

          <PagingButton onClick={nextPage} disabled={currentPage === pageCount}>
            <span>FF</span>
            <HiChevronRight />
          </PagingButton>
        </Buttons>
      </StyledPaging>
    </>
  );
}

export default Paging;
