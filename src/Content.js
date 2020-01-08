import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "./AppContext";
import Counter from "./Counter";

const Content = () => {
    const { username } = useContext(AppContext);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setCount(8);
            setLoading(false);
        }, 500);
    }, [count]);

    return (
        <div className="starter-template">
            <h1>{username}，欢迎您</h1>
            <div className="lead">
                {
                    loading === true ?
                        <div>loading...</div> :
                        <Counter initialCount={count}/>
                }
            </div>
        </div>
    )
};

export default Content;