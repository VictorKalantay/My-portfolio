import React, {useEffect, useState} from 'react';
import Loader from "../UI/Loader";
import Repository from "./Repository";
import MySelect from "../UI/MySelect";
import classes from "./Portfolio.module.css";
import useFetch from "../../hooks/useFetch";
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';


const FadeIn = styled.div`animation: 3s ${keyframes`${fadeIn}`} `;


const Portfolio = () => {


    const [repositories, setRepositories] = useState([])
    const {get, loading} = useFetch("https://api.github.com/users/")
    useEffect(() => {

        get('victorkalantay/repos')
            .then(data => setRepositories(data))
            .catch(error => console.log(error))
    }, [])


    const [selectedSort, setSelectedSort] = useState('')
    const sortRepos = (sort) => {
        setSelectedSort(sort)
        if (sort === 'DateNew') {
            setRepositories([...repositories].sort((a, b) => b.id - a.id))
        } else if (sort === 'DateOld') {
            setRepositories([...repositories].sort((a, b) => a.id - b.id))
        } else {
            setRepositories([...repositories].sort((a, b) => a[sort].localeCompare(b[sort])))
        }
    }

    return (
        <FadeIn>
            <div className={classes.container}>
                <div className={classes.gitWrapper}>
                <div className={classes.gitlink}><a href="https://github.com/VictorKalantay"> My GitHub</a></div>
                <MySelect
                    value={selectedSort}
                    onChange={sortRepos}
                    defaultValue="Sort by"
                    options={[
                        {value: 'name', name: "By name"},
                        {value: 'DateNew', name: "From newer"},
                        {value: 'DateOld', name: "From older"},
                    ]}
                />
                </div>

                {loading && <Loader/>}
                {repositories.map(repo => {
                        if (repo.visibility === 'public' && repo.name !== "My-portfolio")
                            return (
                                <Repository
                                    key={repo.id}
                                    visibility={repo.visibility}
                                    created={repo.created_at.slice(0, 10)}
                                    name={repo.name}
                                    description={repo.description}
                                    homepage={repo.homepage}
                                >
                                </Repository>
                            )
                    }
                )}


            </div>
        </FadeIn>
    )
}

export default Portfolio;
