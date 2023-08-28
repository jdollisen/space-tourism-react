import { SearchField } from "../components/common/SearchField"
import { ErrorModal } from "../components/ui/ErrorModal";
import classes from "../components/css/spaceSavvy.module.scss"
import { useState } from "react";

export const SpaceSavvy = () => {

  const [error, setError] = useState();

  const getErrorData = (data) => {
    setError(data);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (<>
    {(error) && <ErrorModal title="Error" message={error.message} onConfirm={errorHandler} /> }
    <main id="main" className='grid-container--spacesavvy'>
      <div id="results" className={classes.results_container}>
        <div className={classes.results}>
          <SearchField errorMessage={getErrorData} />
        </div>
        <a className={classes.top} href="#results">Back to top</a>
      </div>
      <footer>Copyright &copy; 2023 Space Savvy</footer>
    </main>
    </>);
}
