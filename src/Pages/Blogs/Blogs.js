import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const Blogs = () => {

    const chartData = [
        { name: 'Angular', value: 22.96 },
        { name: 'Vue', value: 18.97 },
        { name: 'React', value: 40.13 },
    ];

    const colors = ['#DD0031', '#42b883', '#61DAFB'];
    const radian = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * radian);
        const y = cy + radius * Math.sin(-midAngle * radian);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className='mx-10'>
            {/* Accordion Child 1 */}
            <div className="collapse collapse-plus bg-red-400">
                <input type="radio" name="blogs-accordion" defaultChecked />
                <div className="collapse-title text-2xl font-medium text-white">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-white border-2 border-black rounded-lg border-b-4 border-r-8 border-r-red-400 text-black ">
                    <p className='font-bold text-2xl'>There are some different ways to manage a state in a react application. these are: - </p>
                    <ol className='list-inside list-decimal text-start mx-8 my-2 text-xl font-semibold'>
                        <li className='list-item p-1 shadow-md'>useState hook: the useState hook allows functional components to manage state without using class components. It returns the current state value and a function to update it.</li>
                        <li className='list-item p-1 shadow-md'>Context Api: React's Context API allows you to share state across the component tree without having to pass props manually through every level of the tree. It's suitable for managing global state or sharing state between components.</li>
                        <li className='list-item p-1 shadow-md'>Redux: Redux is a popular library for managing application state in React.</li>
                        <li className='list-item p-1 shadow-md'>useReducer Hook: The useReducer hook is an alternative to useState for managing state in functional components. It is more suitable for complex state logic that involves multiple values or when the next state depends on the previous one.</li>
                    </ol>
                </div>
            </div>
            {/* Accordion Child 2 */}
            <div className="collapse collapse-plus bg-green-400">
                <input type="radio" name="blogs-accordion" />
                <div className="collapse-title text-2xl font-medium text-white">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-white border-2 border-black rounded-lg border-b-4 border-l-8 border-l-green-400 text-black text-xl font-semibold">
                    <p>Prototypical inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. It is the mechanism by which JavaScript objects are linked to other objects, forming a prototype chain. By simplified, By linking objects to other objects through their prototypes, JavaScript achieves inheritance. If an object doesn't have a property or method, it can inherit it from its prototype, which may inherit from another prototype, forming a chain of inheritance. When you access a property or method of an object, js first checks if the property or method exist on the object. if not, it follows Prototypical chain by looking the prototype of the object and checks if the property exists here. this is continoues repetly untill the Prototypical chain come to the end or the property found. </p>
                </div>
            </div>
            {/* Accordion Child 3 */}
            <div className="collapse collapse-plus bg-cyan-400">
                <input type="radio" name="blogs-accordion" />
                <div className="collapse-title text-2xl font-medium text-white">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content bg-white border-2 border-black rounded-lg border-b-4 border-r-8 border-r-cyan-400 text-black text-xl font-semibold">
                    <p>A unit test is a type of software testing where individual units or components of a application are tested in isolation. These units can be functions, methods, classes, or modules, representing the smallest testable parts of the codebase. We should write unit tests, because they ensure that each unit of the code performs as expected. By testing individual units in isolation, we can verify that each component behaves correctly under the conditions. And unit tests are important to check out the error.</p>
                </div>
            </div>
            {/* Accordion Child 4 */}
            <div className="collapse collapse-plus" style={{ backgroundColor: '#ff00ff' }}>
                <input type="radio" name="blogs-accordion" />
                <div className="collapse-title text-2xl font-medium text-white">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content bg-white border-2 border-black rounded-lg border-b-4 border-l-8 border-l-fuchsia-500 text-black text-xl">
                    <div>
                        <div className="lg:flex lg:justify-center lg:items-center">
                            {/* Pie Chart */}

                            <ResponsiveContainer
                                width='100%'
                                height={250}
                            >
                                <PieChart
                                    margin={{
                                        top: 10,
                                        left: 10,
                                        right: 10,
                                        bottom: 10
                                    }}
                                >
                                    <Pie
                                        dataKey="value"
                                        isAnimationActive={true}
                                        data={chartData}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        fill="#8884d8"
                                        label
                                    >
                                        {chartData?.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip></Tooltip>
                                    <Legend></Legend>
                                </PieChart>
                            </ResponsiveContainer>
                            <p>React is regarded as the most widely used JavaScript framework by 40.13% of developers. It is followed by Angular and Vue, with 22.96% and 18.97%, respectively.</p>
                        </div>
                        <ol className="list list-decimal text-start mx-5 my-2">
                            <li className="list-item p-1 shadow-lg m-2 shadow-blue-400">React: React is a free, open-source JavaScript library, and most popular library than framework or libraries in now time . It works best to build user interfaces by combining sections of code, known as components , into full websites.  React uses one-way data binding and virtual DOM, it is very faster and easier to learn. it is mainly used for building single-page and multi-page interfaces. you can install any components as you want in react. React uses JSX. React. js provides better performance and scalability.</li>
                            <li className="list-item p-1 shadow-lg m-2 shadow-blue-400">Angular: AngularJS is a popular open-source framework that simplifies web development by creating interactive single-page applications. It is a fully complete framework and includes almost everything, but very very hard to learn .Angular uses two-way data binding and real DOM. you can install any components as you want in angular. Angular is more opinionated and less flexible compared to Vue. It enforces certain conventions and patterns, which might limit developers' flexibility and customization options.</li>
                            <li className="list-item p-1 shadow-lg m-2 shadow-blue-400">Vue: Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you to develop user interfaces of any complexity. Vue is a progressive framework. It uses Html templates expect for JSX. It not has many thing, it is on progress. And it is not popular than angular. Vue.js offers more simplicity and flexibility, and it has less components. </li>
                        </ol>
                        <p>
                            <strong>I recommended to use React. i think it is better than other. and i also use react.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;