import React, { Component} from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import QuestionTemplate from "../../../Components/UI/WrapperComponent/QuestionTemplate";
// fake data generator
// const getItems = count =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
//     id: `item-${k}`,
//     choice: `item ${k}`
//   }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;


const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  // padding: grid * 2,
  padding: "10px 30px" ,
  margin: `0 0 ${grid}px 0`,
  color: isDragging ? "black" : "white", 

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "#006a4e",
  borderRadius: "20px",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" ,
  height: "40px" ,


  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: "10px 50px",
  width: "100%" , 
  borderRadius: "10px" , 
  backgroundColor: "f9f9f9"
});

class RankingDAD2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.choices.map(item => {
        return {id: item.id.toString() , choice: item.choice}
      })
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  



  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

  

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {

    return (
      <QuestionTemplate number={this.props.number} text={this.props.text}>
          <div >
          <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable style={{backgroundColor: "red"}} droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.choice}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      </div>
      </QuestionTemplate>
    );
  }
}

export default RankingDAD2;
// Put the thing into the DOM!
