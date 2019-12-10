import {useEffect, useState} from 'react';
import {constants} from "../Constants";
import {ServerData} from "../Interfaces";

const useGetProductListData = () => {
    const [result, setResult] = useState<ServerData>();


    useEffect(() => {
        fetch(constants.dataApi)
            .then(response => response.json())
            .then(response => setResult({metadata: response.metadata, results: response.results}))
    }, []);

    return result;
};

export default useGetProductListData;

