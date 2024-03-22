import React, { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
// import Draggable from "./Draggable";
// import { Droppable } from "./Droppable";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchlessons } from "../../store/lesson";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function LessonsList() {
  // const [parent, setParent] = useState(null);
  const lessons = useSelector((state) => state.lessonSlice.lessons.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchlessons());
  }, [dispatch]);
  const navigate = useNavigate();
  // const draggable = (
  //   <Draggable id="draggable">
  //     {lessons.map((lesson) => (
  //       <div className="d-flex">
  //         <div
  //           className="card d-flex justify-content-center"
  //           style={{ width: "10rem" }}
  //         >
  //           <p className="text-center">{lesson.title}</p>
  //         </div>
  //       </div>
  //     ))}
  //   </Draggable>
  // );

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "lesson",
    item: { id: "1" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(isDragging);


  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "lesson",
      drop: (item) => addItemToSection(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
  );

  const addItemToSection = (id) => {
    console.log("droped", id);
    
  };
    


  return (
    <div className="d-flex justify-content-between gap-5 px-5">
      <div
        className={`card rounded-md  ${isOver ? "bg-secondary" : ""}`}
        style={{ width: "50rem" }}
        ref={drop}
      >
        hiiiiiii
      </div>

      <div className="px-5 py-4 card d-flex gap-4 ">
        <h1
          id="1"
          ref={drag}
          className={`card d-flex justify-content-center ${
            isDragging ? "opacity-25" : "opacity-100"
          } `}
        >
          hello
        </h1>
        {lessons.map((lesson) => (
          <div
            className={`card d-flex justify-content-center ${
              isDragging ? "opacity-25" : "opacity-100"
            } `}
            style={{ width: "20rem" }}
          >
            <p className="text-center">{lesson.title}</p>
          </div>
        ))}
      </div>
    </div>

    // {/* <h4>Add Lesson in the course</h4>
    // <DndContext onDragEnd={handleDragEnd}>
    //   {!parent ? draggable : null}
    //   <Droppable id="droppable">
    //     {parent === "droppable" ? draggable : 'Drop here'}
    //   </Droppable>
    // </DndContext> */}
  );

  // function handleDragEnd({over}) {
  //   setParent(over ? over.id : null);
  // }
}
