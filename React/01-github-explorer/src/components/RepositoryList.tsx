import { IRepository, RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'
import { useEffect, useState } from "react";

const repository = {
    name: "Anderson", description: "Forms in React", link: "https://github"
}

//https://api.github.com/users/AndersonGui/repos

export function RepositoryList() {
    const [repositories, setRepositories] = useState<IRepository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/AndersonGui/repos').then(response => response.json()).then((data: IRepository[]) => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {
                    repositories.map(repo => {
                        let repository = {
                            name: repo.name,
                            description: repo.description,
                            html_url: repo.html_url
                        }

                        return <RepositoryItem key={repo.name} repository={repository} />
                    })
                }
            </ul>
        </section>
    )
}