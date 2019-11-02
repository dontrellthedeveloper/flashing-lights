import React from 'react';
import {SpinnerContainer} from "./with-spinner.styles";
import {SpinnerOverlay} from "./with-spinner.styles";

const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps}/>
        )
    };
    return Spinner;
};
export default WithSpinner;