import React, { useEffect, useState } from 'react'

const Contributors = (props) => {
    const [contributors, setContributors] = useState(null);

    useEffect(() => {
        // Fetch GitHub repo contributors
        if (props) {
            const handleRepoData = async () => {
                try {
                    const response = await fetch(props);
                    setContributors(response);

                } catch (error) {
                    console.error('Error fetching GitHub data:', error);
                }
            };

            handleRepoData();
        }
    }, [props]);
    if (contributors)
        return (

            <div>{console.log(contributors)}{contributors.user}</div>
        )}

export default Contributors