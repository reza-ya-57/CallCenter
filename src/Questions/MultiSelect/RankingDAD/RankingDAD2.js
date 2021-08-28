import React, { Component} from "react";
import { withStyles } from "@material-ui/core/styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import QuestionTemplate from "../../../Components/UI/WrapperComponent/QuestionTemplate";
import clsx from "clsx";
import { blueGrey } from "@material-ui/core/colors";
// fake data generator
// const getItems = count =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
//     id: `item-${k}`,
//     choice: `item ${k}`
//   }));

const styles = theme => ({
  DraggAbleListIsDraggin: {
    backgroundColor: theme.palette.success.main , 
    color: "blue" , 
  } , 

  DraggAbleListNotDragging: {
    backgroundColor: blueGrey[700]
  }
});

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
  // background: isDragging ? "green" : "hsl(215, 14%, 37.5%)",
  color: "white" ,
  borderRadius: "10px",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" ,
  height: "40px" ,
  border: "3px balck solid" ,


  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "",
  padding: "10px 50px",
  width: "70%" , 
  margin: "auto" ,
  borderRadius: "10px" , 
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
    const { classes } = this.props;
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
                      className={clsx({
                        [classes.DraggAbleListIsDraggin]: snapshot.isDragging ,
                        [classes.DraggAbleListNotDragging]: !snapshot.isDragging
                      })}
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

export default  withStyles(styles, { withTheme: true })(RankingDAD2);
// Put the thing into the DOM!
