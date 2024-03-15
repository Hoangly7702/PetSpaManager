import React from 'react';
import { Result, Button } from 'antd';

const NotFoundPage = () => {
    

    const handleBackHome = () => {
        window.location.href="/";
    };

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={handleBackHome}>Back Home</Button>}
        />
    );
};

export default NotFoundPage;
