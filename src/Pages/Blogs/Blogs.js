import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-10'>
            <div className="collapse collapse-plus bg-red-400">
                <input type="radio" name="blogs-accordion" defaultChecked />
                <div className="collapse-title text-2xl font-medium text-white">
                What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-white border-2 border-black rounded-lg border-b-4 border-r-8 border-r-red-400 text-black text-xl">
                    <p className='font-semibold'>There are some different ways to manage a state in a react application. these are: - </p>
                    <ol className='list-inside list-decimal text-start mx-8 my-2'>
                        <li className='list-item p-1 shadow-md'>useState hook: the useState hook allows functional components to manage state without using class components. It returns the current state value and a function to update it.</li>
                        <li className='list-item p-1 shadow-md'>Context Api: React's Context API allows you to share state across the component tree without having to pass props manually through every level of the tree. It's suitable for managing global state or sharing state between components.</li>
                        <li className='list-item p-1 shadow-md'>Redux: Redux is a popular library for managing application state in React.</li>
                        <li className='list-item p-1 shadow-md'>useReducer Hook: The useReducer hook is an alternative to useState for managing state in functional components. It is more suitable for complex state logic that involves multiple values or when the next state depends on the previous one.</li>
                    </ol>
                </div>
            </div>
            <div className="collapse collapse-plus bg-green-400">
                <input type="radio" name="blogs-accordion" defaultChecked />
                <div className="collapse-title text-2xl font-medium text-white">
                How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-white border-2 border-black rounded-lg border-b-4 border-l-8 border-l-green-400 text-black text-xl">
                    <p>Prototypical inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. It is the mechanism by which JavaScript objects are linked to other objects, forming a prototype chain. By simplified, By linking objects to other objects through their prototypes, JavaScript achieves inheritance. If an object doesn't have a property or method, it can inherit it from its prototype, which may inherit from another prototype, forming a chain of inheritance. When you access a property or method of an object, js first checks if the property or method exist on the object. if not, it follows Prototypical chain by looking the prototype of the object and checks if the property exists here. this is continoues repetly untill the Prototypical chain come to the end or the property found. </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-cyan-400">
                <input type="radio" name="blogs-accordion" defaultChecked />
                <div className="collapse-title text-2xl font-medium text-white">
                What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content bg-white border-2 border-black rounded-lg border-b-4 border-l-8 border-r-cyan-400 text-black text-xl">
                    <p>A unit test is a type of software testing where individual units or components of a application are tested in isolation. These units can be functions, methods, classes, or modules, representing the smallest testable parts of the codebase. We should write unit tests, because they ensure that each unit of the code performs as expected. By testing individual units in isolation, we can verify that each component behaves correctly under the conditions. And unit tests are important to check out the error.</p>
                </div>
            </div>
            <div className="collapse collapse-plus" style={{backgroundColor: '#ff00ff'}}>
                <input type="radio" name="blogs-accordion" defaultChecked />
                <div className="collapse-title text-2xl font-medium text-white">
                React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content bg-white border-2 border-black rounded-lg border-b-4 border-l-8 border-r-cyan-400 text-black text-xl">
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;