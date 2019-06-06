import React, { useState } from 'react';
import SignUpWrapper from'./SignUpWrapper';
import SignUpButtons from '../../components/SignUpButtons/SignUpButtons';
import SignUpSteps from '../../components/SignUpSteps/SignUpSteps';

const SignUp = () => {
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  function handleNextPage() {
    setPage(page + 1);
    setLastPage(page);
  }

  function handlePreviousPage() {
    if (page === 0) {
      setPage(page);
    }
    else {
      setLastPage(page);
      setPage(page - 1);
    }
  }

  return (
    <SignUpWrapper id="SignUp"page={page} lastPage={lastPage}>
    <SignUpSteps page={page} />
    <SignUpButtons page={page} handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage} />
  </SignUpWrapper>
  )
}

export default SignUp;
