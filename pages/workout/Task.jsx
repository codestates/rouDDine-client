import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDraggin ? "green" : "#f3f5f7")};
`;

class Task extends Component {
  render() {
    // console.log(this.props.task.id);
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDraggin={snapshot.isDragging}
          >
            <div>
              <div>{this.props.task.name}</div>
              <div>운동 시간{this.props.task.set_time}</div>
              <div>쉬는 시간{this.props.task.rest_time}</div>
            </div>
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Task;
