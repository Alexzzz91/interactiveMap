import * as React from 'react';

const useIsClientDetection = () => {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient;
};

export {
    useIsClientDetection,
};
