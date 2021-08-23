import React from "react";
import "./RankingDAD.css";
import { makeStyles } from "@material-ui/core";
import {  DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import QuestionTemplate from "../../../Components/UI/WrapperComponent/QuestionTemplate";


const useStyles = makeStyles(theme => ({
    Root: {
        width: "400px" , 
    }
}))

const { useEffect, useState, } = React;
// const { DragDropContext, Draggable, Droppable } = ReactBeautifulDnd;

const DATA = [
  {
    id: 'af1',
    label: 'موارد را به ترتیب کنید',
    items: [
      {id: 'af2', label: 'Item 1'},
      {id: 'af3', label: 'Item 2'},
      {id: 'af4', label: 'Item 3'},
      {id: 'af5', label: 'Item 4'},
      {id: 'af6', label: 'Item 5'},
    ],
    tint: 1,
  },
  {
    id: 'af4',
    label: 'Closing leads',
    items: [
      {id: 'af5', label: 'Item 1'}, 
      {id: 'af6', label: 'Item 2'}, 
    ],
    tint: 2,
  },
  {
    id: 'af7', label: 'On hold', 
    items: [
      {id: 'af8', label: 'Item 1'}, 
      {id: 'af9', label: 'Item 2'}, 
    ],
    tint: 3,
  }, 
];


function RankingDAD(props) {
    const classes = useStyles();
    
  const [items, setItems] = useState([]);
  const [groups, setGroups] = useState({});
  
  useEffect(() => {
    // Mock an API call.
    buildAndSave(DATA);
  }, []);
  
  function buildAndSave(items)
  {
    const groups = {};
    for (let i = 0; i < Object.keys(items).length; ++i) {
      const currentGroup = items[i];
      groups[currentGroup.id] = i;
    }
    
    // Set the data.
    setItems(items);
    
    // Makes the groups searchable via their id.
    setGroups(groups);
  }

  
  
  return (
      <QuestionTemplate number={props.number} text={props.text}>
    <div className={classes.Root}>
        <DragDropContext 
      onDragEnd={(result) => {
        const { destination, draggableId, source, type, } = result;

        if (!destination) {
          return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
          return;
        }
        
        if ('group' === type) {
          const sourceIndex = source.index;
          const targetIndex = destination.index;
          
          const workValue = items.slice();
          const [deletedItem, ] = workValue.splice(sourceIndex, 1);
          workValue.splice(targetIndex, 0, deletedItem);

          buildAndSave(workValue);
          
          return;
        }

        const sourceDroppableIndex = groups[source.droppableId];
        const targetDroppableIndex = groups[destination.droppableId];
        const sourceItems = items[sourceDroppableIndex].items.slice();
        const targetItems = source.droppableId !== destination.droppableId ? items[targetDroppableIndex].items.slice() : sourceItems;
        
        // Pull the item from the source.
        const [deletedItem, ] = sourceItems.splice(source.index, 1);
        targetItems.splice(destination.index, 0, deletedItem);
        
        const workValue = items.slice();
        workValue[sourceDroppableIndex] = {
          ...items[sourceDroppableIndex],
          items: sourceItems,
        };
        workValue[targetDroppableIndex] = {
          ...items[targetDroppableIndex],
          items: targetItems,
        };
        
        
        setItems(workValue);
      }}
    >
      <Droppable droppableId='ROOT' type='group'>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
              <Draggable 
                draggableId={item.id}
                key={item.id}
                index={index}
              >
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <DroppableList
                      key={item.id}
                      {...item}
                    />
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



function DroppableList({ id, items, label, tint, })
{
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className={`holder holder--tint-${tint}`}>
            <div className='holder__title'>
              {label}
            </div>
            <div className='holder__content'>
              <ul className='list'>
                {items.map((item, index) => (
                  <li 
                    className='list__item'
                    key={item.id}
                  >
                    <Draggable 
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className='card'
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {item.label}
                        </div>
                      )}
                    </Draggable>
                  </li>
                ))}
                {provided.placeholder}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
}

export default RankingDAD;