import React from 'react';

const Blog = () => {
    return (
        <div>
            <p>Question-1: what is the purpose of react router?</p><br></br>
            <p> Answer: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p><br></br>
            <p>Question-2: How does context api work?</p><br />
            <p>Answer: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p><br />
            <p>Question-3: what is useref in react</p><br />
            <p>Answer: Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with inside div ref=myRef here myRef is in secound breacket, React will set its .current property to the corresponding DOM node whenever that node changes.</p>
        </div>
    );
};

export default Blog;