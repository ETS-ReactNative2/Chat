import React from 'react';
import PostsContainer from "./posts/postsContainer";

const TestMap = (props) => {
    return (<div>
            <div className="users">
                {props.users.map((itm) => {
                    return <li className="userItm" key={itm.id}>{itm.name} {itm.lastName} {itm.text}</li>
                })}
            </div>
            <div className="grid">
                {/*<div>item-1</div>*/}
                {/*<div>item-2</div>*/}
                {/*<div>item-3</div>*/}
                {/*<div>item-4</div>*/}
                {/*<div>item-5</div>*/}
               <header>Header</header>
                <article>
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet cupiditate delectus deserunt dicta dolore dolorum eveniet, ex fugiat harum id magni maiores nesciunt officiis repellat sed totam unde veritatis.</p>
                </article>
                <aside>Sidebar</aside>
                <footer>Footer</footer>

            </div>

        </div>

    )
}
export default TestMap;