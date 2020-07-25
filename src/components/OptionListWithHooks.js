import React, { useState } from "react";
import LoaderComp from "../loader/LoaderComp";

const OptionListWithHooks = (props) => {
  // Initialize all state hooks
  const [primaryList, setPrimaryList] = useState([
    { id: 1, value: "use state" },
    { id: 2, value: "use effect" },
  ]);
  const [secondaryList, setSecondaryList] = useState([
    { id: 1, value: "task list" },
    { id: 2, value: "pie chart" },
  ]);
  const [tertiaryList, setTertiaryList] = useState([
    { id: 1, value: "loader" },
    { id: 2, value: "responsive" },
	]);
	// Lists visibility
  const [isSecondaryListVisible, setIsSecondaryListVisible] = useState(false);
	const [isTertiaryListVisible, setIsTertiaryListVisible] = useState(false);
	// Loaders
  const [isSecondaryLoaderVisible, setIsSecondaryLoaderVisible] = useState(
    false
  );
  const [isTertiaryLoaderVisible, setIsTertiaryLoaderVisible] = useState(false);

  const renderPrimaryList = () => {
    return (
      <div className="col-sm">
        <h1>List one</h1>
        <ul className="container">
          {primaryList.map((item) => (
            <li className="radio" key={item.id}>
              <input
                id={`radio-list-one-${item.id}`}
                name="radio-list-one"
                type="radio"
                onChange={(e) => onPrimaryListChange(e, item.id)}
              />
              <label htmlFor={`radio-list-one-${item.id}`} className="radio-label">
                {item.value}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderSecondaryList = () => {
		// Check if list or loader is visible
    if (isSecondaryLoaderVisible || isSecondaryListVisible) {
      let secondaryListContent = <></>;
      if (isSecondaryLoaderVisible) {
				// second Loader visible 
        secondaryListContent = <LoaderComp />;
      } else {
				// Second list visible
        secondaryListContent = (
          <>
            <h1>List two</h1>
            {secondaryList.map((item) => (
              <li className="radio" key={item.id}>
                <input
                  id={`radio-list-two-${item.id}`}
                  name="radio-list-two"
                  type="radio"
                  onChange={(e) => onSecondaryListChange(e, item.id)}
                />
                <label htmlFor={`radio-list-two-${item.id}`} className="radio-label">
                  {item.value}
                </label>
              </li>
            ))}
          </>
        );
      }
      return <div className="col-sm">{secondaryListContent}</div>;
    } else {
      // Nothing to render
      return <></>;
    }
	};
	
	const renderTertiaryList = () => {
    // Check if list or loader is visible
    if (isTertiaryLoaderVisible || isTertiaryListVisible) {
      let tertiarytListContent = <></>;
      if (isTertiaryLoaderVisible) {
				// third Loader visible 
        tertiarytListContent = <LoaderComp />;
      } else {
				// third list visible
        tertiarytListContent = (
          <>
            <h1>List three</h1>
            {tertiaryList.map((item) => (
              <li className="radio" key={item.id}>
                <input
                  id={`radio-list-three-${item.id}`}
                  name="radio-list-three"
                  type="radio"
                  onChange={(e) => onTertiaryListChange(e, item.id)}
                />
                <label htmlFor={`radio-list-three-${item.id}`} className="radio-label">
                  {item.value}
                </label>
              </li>
            ))}
          </>
        );
      }
      return <div className="col-sm">{tertiarytListContent}</div>;
    } else {
      // Nothing to render
      return <></>;
    }
	};
	
  const onPrimaryListChange = (event, itemId) => {
		// Reset third list 
		setIsTertiaryListVisible(false);
    // Initially show loader in the place of second list
    setIsSecondaryLoaderVisible(true);
    // Make a pseudo async call
    setTimeout(() => {
      // Once done, hide the loader
      setIsSecondaryLoaderVisible(false);
      // Make the second list visible
      setIsSecondaryListVisible(true);
    }, 2000);
  };

  const onSecondaryListChange = (event, itemId) => {
    // Initially show loader in the place of third list
    setIsTertiaryLoaderVisible(true);
    // Make a pseudo async call
    setTimeout(() => {
      // Once done, hide the loader
      setIsTertiaryLoaderVisible(false);
      // Make the third list visible
      setIsTertiaryListVisible(true);
    }, 2000);
	};
	
	const onTertiaryListChange = (event, itemId) => {
    // Further logic goes here
  };
	
  return (
    <div className="container">
      <div className="row">
        {renderPrimaryList()}
        {renderSecondaryList()}
        {renderTertiaryList()}
      </div>
    </div>
  );
};

export default OptionListWithHooks;
