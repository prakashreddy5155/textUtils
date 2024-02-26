import React,{useState} from 'react'
import '../styles/About.css';

export default function About(props) {

  // const [togglerButtonColor,togglerButtonColorChanger]  = useState({
  //   color:"white",
  //   backgroundColor:"black"
  // });

  // const [togglerText, changeTogglerText] = useState("Enable Dark Mode");
  // const [currentMode,switchMode] = useState({
  //   backgroundColor:"white",
  //   color:"black"
  // });



  // const modeToggleHandler = () =>
  // {

  //   if(currentMode.color === "black")
  //   {
  //     switchMode({
  //       backgroundColor:"black",
  //       color:"white"
  //     });
  //     togglerButtonColorChanger(
  //       {
  //         backgroundColor:"white",
  //         color:"black"
  //       }
  //     )
  //     changeTogglerText("Enable Light Mode");
  //   }
  //   else
  //   {

  //     switchMode({
  //       backgroundColor:"white",
  //       color:"black"
        
  //     });
  //     togglerButtonColorChanger(
  //       {
  //         backgroundColor:"black",
  //         color:"white"
  //       }
  //     )
  //     changeTogglerText("Enable Dark Mode");
      
  //   }
  // }


    
  return (
    

<div className="mainContainerAbout">
    <h1>Why DataStructures and Algorithms are Important ?</h1>
    <div  className="about-component-main-container"style = {props.lightState}  >
     {/*Dark mode functionality to be shown */}
While many companies seek candidates with a good grasp of Machine Learning concepts, there are companies like Amazon that take another route. Candidates with sound knowledge of data structures and algorithms make the cut for them. The list below explains the wide-ranging applications of learning data structures and algorithms for future data scientists or software developers.

Career as a data scientist: Data science is the meeting point of statistics and computer science. Using the well-devised principles of statistics, these experts code to solve the problems cropping up in large datasets. As a data scientist, you will be required to develop these fields as your strengths:
Data structures
Algorithms
Statistics
Additionally, a solid understanding of data structures and algorithms will enable you with the knowledge required for innovating scalable solutions to every type of new and future problem. Also, it increases your productivity and efficiency in any type of coding job you perform.
Cracking interviews: Many companies take a generalized approach while asking questions related to data structures and algorithms. Instead of asking technical ones, they ask real-world or scenario-based questions that test your capability to apply your theoretical knowledge. Some commonly asked questions are:
When can you best apply binary search? Give a real-world example.
Explain a linked list in your own words.
What is the difference between a stack and a queue?
Explain the difference between LIFO and FIFO.
Most times, companies question candidates to test their data structure knowledge instead of the tool or framework-specific knowledge. This is because data structures are the fundamental blocks that help programmers in achieving complex results in a short time.
Optimizing your code: Primarily, every Linux and SQL command is developed over data structures. This is the basic design of every software. With the help of hash tables, linked lists, trees, graphs, and algorithms like searching, backtracking, recursive, and brute force, programmers, can optimize their code depending on the demand of the servers and end users.
Companies like Amazon, Google, and Facebook look for candidates with a thorough knowledge of algorithms and data structures. This is because most of their time goes into developing optimized algorithms for achieving the desired result, as opposed to coding. Additionally, the knowledge of these concepts helps programmers understand the basic structure of frameworks. You can master any framework with ease and smoothly adopt new ones if you learn data structures.
Solving real-world problems: Data structures and algorithms help in effectively organizing any messed-up environment. With a deep understanding of linked lists, trees, and other structures, you can perform many activities efficiently. These include activities like arranging books on a bookshelf, ordering a stack of cards, searching for a word in a dictionary, etc., among many others.
Fostering innovation: As the concepts under consideration help in solving real-world problems, they significantly develop your personality and creativity. There are many problems in the world with insufficient or no solutions. Programmers like you can observe these problems in-depth and devise out-of-the-box solutions that make a significant impact. This is why you must learn data structures from the best institute that offers practical exposure to theoretical concepts.
Learn Data structures and Algorithms from the best!

By taking the best Data Structures and Algorithms course, you will gain exposure to the most fundamental concepts of software development. Newton School presents a comprehensive Data Structures and Algorithms course that delves into the core of the subject while providing several practical assignments. These courses are trusted by over 800 hiring partners who offer a salary between INR 8 to 50 per annum. Visit the website to know more!


    </div>

<div className="containerButtonAbout">
    <button onClick={props.modeToggler} style={props.mode?{backgroundColor:"white",color:"black"}:{backgroundColor:"black",color:"white"}} className = "toggleButton"> {props.oldTextState} </button>
    </div>


    </div>

   
  )
}
