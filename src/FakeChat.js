import { useState, useEffect } from "react";

const courses = [
  { id: 1, name: "Học CSS" },
  { id: 2, name: "Học HTML" },
  { id: 3, name: "Học JS" },
  { id: 4, name: "Học React" }
];

export default function FakeChat() {
  const [lessonId, setLessonId] = useState(1);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      setDetail((prev) => [...prev, detail]);
    };

    window.addEventListener(`lesson-${lessonId}`, handleComment);
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
      setDetail([]);
    };
  }, [lessonId]);

  return (
    <div className="FakeChat">
      <h2>Fake Chat App</h2>
      <ul>
        {courses.map((course, index) => {
          return (
            <li
              key={index}
              style={{ color: course.id === lessonId ? "red" : "#333", cursor:"pointer" }}
              onClick={() => setLessonId(course.id)}
            >
              {course.name}
            </li>
          );
        })}
      </ul>
      <div className="box-chat">
        {detail.map((msg) => (
          <p>{msg}</p>
        ))}
      </div>
    </div>
  );
}
