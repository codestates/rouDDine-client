import React, { Component, use } from "react";
import styled from "styled-components";
import Task from "./Task";
// import Task from './Task';
import { Droppable, Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? "skyblue" : "inherit"};
  flex-grow: 1;
  min-height: 100px;
`;



export default function Column({column, index, tasks, getWorkout}) {
  // const [workouts, setWorkouts] = useState(tasks)
  // console.log(workouts)
  return (
      <Draggable id={column.id} draggableId={column.id} index={index}>
        {(provided) => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <Title {...provided.dragHandleProps}>
              {column.title}
            </Title>
            <Droppable droppableId={column.id} type="task">
              {(provided, snapshot) => (
                <TaskList
                id={column.id}
                {...provided.droppableProps}
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
                >
                  {tasks.map((task, index) => (
                    <Task 
                      getWorkout={getWorkout} 
                      id={column.id} 
                      key={task.id} 
                      task={task} 
                      index={index} />
                    ))}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
  )
}

// class Column extends Component {
//   render() {
//     console.log(this.props.tasks)
//     // console.log(this.props.getWorkout);
//     // console.log(this.props);
//     return (
//       <Draggable id={this.props.column.id} draggableId={this.props.column.id} index={this.props.index}>
//         {(provided) => (
//           <Container {...provided.draggableProps} ref={provided.innerRef}>
//             <Title {...provided.dragHandleProps}>
//               {this.props.column.title}
//             </Title>
//             <Droppable droppableId={this.props.column.id} type="task">
//               {(provided, snapshot) => (
//                 <TaskList
//                 id={this.props.column.id}
//                 {...provided.droppableProps}
//                 ref={provided.innerRef}
//                 isDraggingOver={snapshot.isDraggingOver}
//                 >
//                   {this.props.tasks.map((task, index) => (
//                     <Task 
//                       getWorkout={this.props.getWorkout} 
//                       id={this.props.column.id} 
//                       key={task.id} 
//                       task={task} 
//                       index={index} />
//                     ))}
//                   {provided.placeholder}
//                 </TaskList>
//               )}
//             </Droppable>
//           </Container>
//         )}
//       </Draggable>
//     );
//   }
// }

// export default Column;
